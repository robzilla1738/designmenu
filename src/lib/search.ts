import {
  CATEGORIES,
  ELEMENTS,
  type Category,
  type CategoryId,
  type DesignElement,
} from "./catalog";

export interface SearchFilters {
  query?: string;
  categoryId?: CategoryId | "all";
}

export interface SearchResult {
  elements: DesignElement[];
  categories: Category[];
  total: number;
  query: string;
  categoryId: CategoryId | "all";
}

/** Field weights for relevance ranking (higher = more important). */
const FIELD_WEIGHT = {
  nameExact: 120,
  name: 80,
  aliasExact: 70,
  alias: 55,
  id: 50,
  tagExact: 45,
  tag: 35,
  description: 12,
  promptTip: 8,
} as const;

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

/**
 * Split a free-text query into search tokens.
 * Supports spaces, commas, slashes, and plus as separators so designer
 * phrases like "outline button" or "cta/primary" work naturally.
 */
export function tokenizeQuery(query: string): string[] {
  const q = normalize(query);
  if (!q) return [];
  return q
    .split(/[\s,/+|]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

/** Normalize ids/phrases so "floating-action" matches token "floating". */
function expandableText(text: string): string {
  return text.toLowerCase().replace(/[-_]+/g, " ");
}

function fieldContains(field: string, token: string): boolean {
  const f = field.toLowerCase();
  if (f.includes(token)) return true;
  // Allow token to match hyphenated ids: "action" in "floating-action-button"
  return expandableText(field).includes(token);
}

function fieldEquals(field: string, token: string): boolean {
  return field.toLowerCase() === token || expandableText(field) === token;
}

/**
 * Score how well an element matches every token (AND).
 * Returns null if any token is missing from all searchable fields.
 */
export function scoreElement(
  element: DesignElement,
  tokens: string[],
): number | null {
  if (tokens.length === 0) return 0;

  const aliases = element.alsoKnownAs ?? [];
  const tags = element.tags ?? [];
  let total = 0;

  for (const token of tokens) {
    let best = 0;

    if (fieldEquals(element.name, token)) {
      best = Math.max(best, FIELD_WEIGHT.nameExact);
    } else if (fieldContains(element.name, token)) {
      best = Math.max(best, FIELD_WEIGHT.name);
    }

    for (const alias of aliases) {
      if (fieldEquals(alias, token)) {
        best = Math.max(best, FIELD_WEIGHT.aliasExact);
      } else if (fieldContains(alias, token)) {
        best = Math.max(best, FIELD_WEIGHT.alias);
      }
    }

    if (fieldEquals(element.id, token) || fieldContains(element.id, token)) {
      best = Math.max(best, FIELD_WEIGHT.id);
    }

    for (const tag of tags) {
      if (fieldEquals(tag, token)) {
        best = Math.max(best, FIELD_WEIGHT.tagExact);
      } else if (fieldContains(tag, token)) {
        best = Math.max(best, FIELD_WEIGHT.tag);
      }
    }

    if (fieldContains(element.description, token)) {
      best = Math.max(best, FIELD_WEIGHT.description);
    }
    if (fieldContains(element.promptTip, token)) {
      best = Math.max(best, FIELD_WEIGHT.promptTip);
    }

    // Phrase-level bonus: full token sequence in name (handled per multi-token below)
    if (best === 0) return null;
    total += best;
  }

  // Bonus when the full normalized query is a contiguous phrase in name/alias/id
  const phrase = tokens.join(" ");
  if (tokens.length > 1) {
    if (fieldContains(element.name, phrase)) total += 40;
    else if (aliases.some((a) => fieldContains(a, phrase))) total += 30;
    else if (fieldContains(element.id, phrase.replace(/\s+/g, "-"))) total += 25;
  }

  // Prefer shorter, more specific names when scores tie later
  total += Math.max(0, 20 - element.name.length / 4);

  return total;
}

function elementMatchesTokens(
  element: DesignElement,
  tokens: string[],
): boolean {
  return scoreElement(element, tokens) !== null;
}

/**
 * Filter and rank catalog elements by free-text query and optional category.
 * Multi-word queries use AND token matching and relevance ranking
 * (name/alias/id/tags beat deep description/prompt text).
 * Pure function — safe to unit-test without DOM.
 */
export function searchCatalog(filters: SearchFilters = {}): SearchResult {
  const query = filters.query?.trim() ?? "";
  const categoryId = filters.categoryId ?? "all";
  const tokens = tokenizeQuery(query);

  let elements = ELEMENTS.slice();

  if (categoryId !== "all") {
    elements = elements.filter((e) => e.category === categoryId);
  }

  if (tokens.length > 0) {
    const scored = elements
      .map((el) => ({ el, score: scoreElement(el, tokens) }))
      .filter((row): row is { el: DesignElement; score: number } => row.score !== null);

    const categoryOrder = new Map(CATEGORIES.map((c, i) => [c.id, i]));
    const catalogIndex = new Map(ELEMENTS.map((e, i) => [e.id, i]));

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const ca = categoryOrder.get(a.el.category) ?? 99;
      const cb = categoryOrder.get(b.el.category) ?? 99;
      if (ca !== cb) return ca - cb;
      return (catalogIndex.get(a.el.id) ?? 0) - (catalogIndex.get(b.el.id) ?? 0);
    });

    elements = scored.map((row) => row.el);
  } else {
    // Empty query: stable category order, original catalog order within category
    const categoryOrder = new Map(CATEGORIES.map((c, i) => [c.id, i]));
    const catalogIndex = new Map(ELEMENTS.map((e, i) => [e.id, i]));
    elements.sort((a, b) => {
      const ca = categoryOrder.get(a.category) ?? 99;
      const cb = categoryOrder.get(b.category) ?? 99;
      if (ca !== cb) return ca - cb;
      return (catalogIndex.get(a.id) ?? 0) - (catalogIndex.get(b.id) ?? 0);
    });
  }

  const presentCategoryIds = new Set(elements.map((e) => e.category));
  const categories = CATEGORIES.filter((c) => presentCategoryIds.has(c.id));

  return {
    elements,
    categories,
    total: elements.length,
    query,
    categoryId,
  };
}

/**
 * Group already-filtered elements by category (preserving category order).
 * Within each group, preserves the order of the input array (already ranked).
 */
export function groupByCategory(
  elements: DesignElement[],
): { category: Category; elements: DesignElement[] }[] {
  const map = new Map<CategoryId, DesignElement[]>();
  for (const el of elements) {
    const list = map.get(el.category) ?? [];
    list.push(el);
    map.set(el.category, list);
  }

  return CATEGORIES.filter((c) => map.has(c.id)).map((category) => ({
    category,
    elements: map.get(category.id)!,
  }));
}

/** @internal exported for tests that assert matching helpers */
export const __searchInternals = {
  elementMatchesTokens,
  fieldContains,
};

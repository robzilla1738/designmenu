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

function normalize(text: string): string {
  return text.trim().toLowerCase();
}

function elementMatchesQuery(element: DesignElement, query: string): boolean {
  if (!query) return true;
  const q = normalize(query);
  const haystack = [
    element.name,
    element.description,
    element.promptTip,
    element.id,
    ...(element.alsoKnownAs ?? []),
    ...(element.tags ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

/**
 * Filter and rank catalog elements by free-text query and optional category.
 * Pure function — safe to unit-test without DOM.
 */
export function searchCatalog(filters: SearchFilters = {}): SearchResult {
  const query = filters.query?.trim() ?? "";
  const categoryId = filters.categoryId ?? "all";

  let elements = ELEMENTS.slice();

  if (categoryId !== "all") {
    elements = elements.filter((e) => e.category === categoryId);
  }

  if (query) {
    elements = elements.filter((e) => elementMatchesQuery(e, query));
  }

  // Stable category order, then original catalog order within category
  const categoryOrder = new Map(CATEGORIES.map((c, i) => [c.id, i]));
  elements.sort((a, b) => {
    const ca = categoryOrder.get(a.category) ?? 99;
    const cb = categoryOrder.get(b.category) ?? 99;
    if (ca !== cb) return ca - cb;
    return ELEMENTS.indexOf(a) - ELEMENTS.indexOf(b);
  });

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

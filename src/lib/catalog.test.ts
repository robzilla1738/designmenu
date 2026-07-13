import { describe, expect, it } from "vitest";
import {
  CATEGORIES,
  ELEMENTS,
  getCatalogStats,
  getElementById,
  getElementsByCategory,
  type CategoryId,
} from "./catalog";

/** All shipped categories — none may be removed or left empty */
const REQUIRED_CATEGORIES: CategoryId[] = [
  "typography",
  "color",
  "spacing-layout",
  "buttons",
  "forms",
  "navigation",
  "feedback",
  "overlays",
  "data-display",
  "surfaces",
  "media",
  "states",
  "ai-slop",
  "library-practices",
];

/** Core UI categories use a solid coverage floor; specialized sections use higher floors */
const CORE_UI_CATEGORIES: CategoryId[] = [
  "typography",
  "color",
  "spacing-layout",
  "buttons",
  "forms",
  "navigation",
  "feedback",
  "overlays",
  "data-display",
  "surfaces",
  "media",
  "states",
];
const CORE_UI_FLOOR = 14;
const SPECIALIZED_FLOOR = 20;

describe("catalog data", () => {
  it("includes all required design categories", () => {
    const ids = new Set(CATEGORIES.map((c) => c.id));
    for (const required of REQUIRED_CATEGORIES) {
      expect(ids.has(required), `missing category ${required}`).toBe(true);
    }
  });

  it("has many labeled elements spanning multiple categories", () => {
    expect(ELEMENTS.length).toBeGreaterThanOrEqual(50);
    const categoriesWithElements = new Set(ELEMENTS.map((e) => e.category));
    for (const required of REQUIRED_CATEGORIES) {
      expect(
        categoriesWithElements.has(required),
        `no elements in ${required}`,
      ).toBe(true);
    }
  });

  it("gives every element a name, description, prompt tip, and example key", () => {
    for (const el of ELEMENTS) {
      expect(el.id.length).toBeGreaterThan(0);
      expect(el.name.trim().length).toBeGreaterThan(0);
      expect(el.description.trim().length).toBeGreaterThan(0);
      expect(el.promptTip.trim().length).toBeGreaterThan(10);
      expect(el.exampleKey.trim().length).toBeGreaterThan(0);
      expect(CATEGORIES.some((c) => c.id === el.category)).toBe(true);
    }
  });

  it("uses unique element ids", () => {
    const ids = ELEMENTS.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("getElementById returns shipped entries", () => {
    const sample = ELEMENTS[0];
    expect(getElementById(sample.id)).toEqual(sample);
    expect(getElementById("does-not-exist")).toBeUndefined();
  });

  it("getElementsByCategory filters by category", () => {
    const buttons = getElementsByCategory("buttons");
    expect(buttons.length).toBeGreaterThan(0);
    expect(buttons.every((e) => e.category === "buttons")).toBe(true);
  });

  it("getCatalogStats reflects live catalog counts", () => {
    const stats = getCatalogStats();
    expect(stats.totalElements).toBe(ELEMENTS.length);
    expect(stats.totalCategories).toBe(CATEGORIES.length);
    const buttonStat = stats.byCategory.find((c) => c.id === "buttons");
    expect(buttonStat?.count).toBe(getElementsByCategory("buttons").length);
  });

  it("meets per-category solid-coverage floors for every CategoryId", () => {
    expect(CATEGORIES).toHaveLength(REQUIRED_CATEGORIES.length);

    for (const id of CORE_UI_CATEGORIES) {
      const els = getElementsByCategory(id);
      expect(
        els.length,
        `${id} needs ≥${CORE_UI_FLOOR} elements (got ${els.length})`,
      ).toBeGreaterThanOrEqual(CORE_UI_FLOOR);
    }

    const slop = getElementsByCategory("ai-slop");
    const libs = getElementsByCategory("library-practices");
    expect(slop.length).toBeGreaterThanOrEqual(SPECIALIZED_FLOOR);
    expect(libs.length).toBeGreaterThanOrEqual(SPECIALIZED_FLOOR);

    for (const cat of CATEGORIES) {
      expect(
        getElementsByCategory(cat.id).length,
        `${cat.id} must not be empty`,
      ).toBeGreaterThanOrEqual(1);
    }
  });

  it("includes multi-item AI slop and Library best practices sections", () => {
    const slop = getElementsByCategory("ai-slop");
    const libs = getElementsByCategory("library-practices");

    // AI slop teaches avoidance
    expect(slop.every((e) => e.promptKind === "avoid")).toBe(true);
    expect(
      slop.every(
        (e) =>
          /avoid|skip|don't|do not|ban|omit|never|limit/i.test(e.promptTip) ||
          e.promptTip.length > 20,
      ),
    ).toBe(true);
    expect(slop.some((e) => e.id === "slop-inter-only")).toBe(true);
    expect(slop.some((e) => e.id === "slop-glow-everything")).toBe(true);
    expect(slop.some((e) => e.id === "slop-fake-metrics")).toBe(true);

    // Library practices cover shadcn-oriented guidance
    expect(
      libs.some(
        (e) =>
          /shadcn|radix|variant|token|cn\(|tailwind/i.test(
            `${e.name} ${e.description} ${e.promptTip}`,
          ),
      ),
    ).toBe(true);
    expect(libs.some((e) => e.id === "lib-form-field-pattern")).toBe(true);
    expect(libs.some((e) => e.id === "lib-data-state")).toBe(true);
    expect(libs.some((e) => e.id === "lib-destructive-confirm")).toBe(true);
  });

  it("ships standard vocabulary added for category completeness", () => {
    const expected: Array<{ id: string; category: CategoryId }> = [
      // Prior completeness set
      { id: "lead-text", category: "typography" },
      { id: "tabular-nums", category: "typography" },
      { id: "accent-color", category: "color" },
      { id: "opacity-scale", category: "color" },
      { id: "split-layout", category: "spacing-layout" },
      { id: "outline-button", category: "buttons" },
      { id: "search-input", category: "forms" },
      { id: "segmented-control", category: "navigation" },
      { id: "status-dot", category: "feedback" },
      { id: "alert-dialog", category: "overlays" },
      { id: "bottom-sheet", category: "overlays" },
      { id: "timeline", category: "data-display" },
      { id: "raised-surface", category: "surfaces" },
      { id: "media-object", category: "media" },
      { id: "cover-image", category: "media" },
      { id: "active-pressed", category: "states" },
      { id: "drag-state", category: "states" },
      // Exhaustive fill — one+ signature pattern per category
      { id: "ordered-list", category: "typography" },
      { id: "kbd", category: "typography" },
      { id: "code-block", category: "typography" },
      { id: "surface-colors", category: "color" },
      { id: "chart-colors", category: "color" },
      { id: "focus-ring-color", category: "color" },
      { id: "density", category: "spacing-layout" },
      { id: "scroll-area", category: "spacing-layout" },
      { id: "app-shell", category: "spacing-layout" },
      { id: "fab", category: "buttons" },
      { id: "split-button", category: "buttons" },
      { id: "toggle-button", category: "buttons" },
      { id: "combobox", category: "forms" },
      { id: "otp-input", category: "forms" },
      { id: "multi-select", category: "forms" },
      { id: "required-marker", category: "forms" },
      { id: "footer-nav", category: "navigation" },
      { id: "back-link", category: "navigation" },
      { id: "app-rail", category: "navigation" },
      { id: "announcement-bar", category: "feedback" },
      { id: "circular-progress", category: "feedback" },
      { id: "action-banner", category: "feedback" },
      { id: "lightbox", category: "overlays" },
      { id: "toast-stack", category: "overlays" },
      { id: "calendar-month", category: "data-display" },
      { id: "carousel", category: "data-display" },
      { id: "price-display", category: "data-display" },
      { id: "backdrop-blur", category: "surfaces" },
      { id: "surface-levels", category: "surfaces" },
      { id: "gallery-strip", category: "media" },
      { id: "illustration-placeholder", category: "media" },
      { id: "read-only", category: "states" },
      { id: "indeterminate", category: "states" },
      { id: "reduced-motion", category: "states" },
      { id: "slop-gradient-text", category: "ai-slop" },
      { id: "slop-busy-motion", category: "ai-slop" },
      { id: "lib-portal-stacking", category: "library-practices" },
      { id: "lib-accessible-names", category: "library-practices" },
      { id: "lib-css-variables", category: "library-practices" },
      // Second-pass vocabulary
      { id: "small-caps", category: "typography" },
      { id: "responsive-type", category: "typography" },
      { id: "brand-scale", category: "color" },
      { id: "safe-area", category: "spacing-layout" },
      { id: "sticky-footer", category: "spacing-layout" },
      { id: "pill-button", category: "buttons" },
      { id: "button-block", category: "buttons" },
      { id: "phone-input", category: "forms" },
      { id: "checkbox-group", category: "forms" },
      { id: "tree-nav", category: "navigation" },
      { id: "tab-underline", category: "navigation" },
      { id: "top-progress", category: "feedback" },
      { id: "snackbar-action", category: "feedback" },
      { id: "coach-mark", category: "overlays" },
      { id: "rating-stars", category: "data-display" },
      { id: "comparison-table", category: "data-display" },
      { id: "sparkline", category: "data-display" },
      { id: "avatar-status", category: "media" },
      { id: "offline-state", category: "states" },
      { id: "empty-zero", category: "states" },
      { id: "slop-confetti-success", category: "ai-slop" },
      { id: "lib-focus-visible", category: "library-practices" },
      { id: "lib-toast-region", category: "library-practices" },
    ];

    for (const { id, category } of expected) {
      const el = getElementById(id);
      expect(el, `missing element ${id}`).toBeDefined();
      expect(el!.category).toBe(category);
      expect(el!.exampleKey).toBe(id);
      expect(el!.promptTip.trim().length).toBeGreaterThan(10);
    }
  });

  it("keeps material catalog depth after exhaustive vocabulary fill", () => {
    expect(ELEMENTS.length).toBeGreaterThanOrEqual(270);
    // Core UI categories should be robust, not thin starter lists
    for (const id of CORE_UI_CATEGORIES) {
      expect(
        getElementsByCategory(id).length,
        `${id} should stay well-rounded`,
      ).toBeGreaterThanOrEqual(14);
    }
  });

  it("maps every catalog exampleKey to a unique id and non-empty live key", () => {
    const keys = ELEMENTS.map((e) => e.exampleKey);
    expect(new Set(keys).size).toBe(keys.length);
    for (const el of ELEMENTS) {
      expect(el.exampleKey).toBe(el.id);
    }
  });

  it("exposes avoid prompt kind only on intentional anti-pattern entries", () => {
    const avoid = ELEMENTS.filter((e) => e.promptKind === "avoid");
    expect(avoid.length).toBeGreaterThanOrEqual(5);
    expect(avoid.every((e) => e.category === "ai-slop")).toBe(true);
  });
});

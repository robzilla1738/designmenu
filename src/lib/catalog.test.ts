import { describe, expect, it } from "vitest";
import {
  CATEGORIES,
  ELEMENTS,
  getCatalogStats,
  getElementById,
  getElementsByCategory,
  type CategoryId,
} from "./catalog";

/** Minimum categories required by the product plan */
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
  "creative",
  "ai-slop",
  "library-practices",
];

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

  it("includes multi-item Creative, AI slop, and Library best practices sections", () => {
    const creative = getElementsByCategory("creative");
    const slop = getElementsByCategory("ai-slop");
    const libs = getElementsByCategory("library-practices");

    // Expanded floors after catalog polish (several net-new in each)
    expect(creative.length).toBeGreaterThanOrEqual(15);
    expect(slop.length).toBeGreaterThanOrEqual(15);
    expect(libs.length).toBeGreaterThanOrEqual(15);

    expect(creative.some((e) => e.id === "dither" || e.exampleKey === "dither")).toBe(
      true,
    );
    expect(creative.some((e) => e.id === "kinetic-type")).toBe(true);
    expect(creative.some((e) => e.id === "bento-grid")).toBe(true);
    expect(creative.some((e) => e.id === "paper-texture")).toBe(true);

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

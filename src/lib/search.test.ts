import { describe, expect, it } from "vitest";
import { ELEMENTS } from "./catalog";
import { groupByCategory, searchCatalog } from "./search";

describe("searchCatalog", () => {
  it("returns all elements when filters are empty", () => {
    const result = searchCatalog({});
    expect(result.total).toBe(ELEMENTS.length);
    expect(result.elements).toHaveLength(ELEMENTS.length);
    expect(result.categoryId).toBe("all");
    expect(result.query).toBe("");
  });

  it("filters by category", () => {
    const result = searchCatalog({ categoryId: "typography" });
    expect(result.total).toBeGreaterThan(0);
    expect(result.elements.every((e) => e.category === "typography")).toBe(true);
    expect(result.categories.map((c) => c.id)).toEqual(["typography"]);
  });

  it("matches name, aliases, tags, and prompt tip text", () => {
    const byName = searchCatalog({ query: "Primary button" });
    expect(byName.elements.some((e) => e.id === "primary-button")).toBe(true);

    const byAlias = searchCatalog({ query: "CTA button" });
    expect(byAlias.elements.some((e) => e.id === "primary-button")).toBe(true);

    const byTag = searchCatalog({ query: "facepile" });
    expect(byTag.elements.some((e) => e.id === "avatar-group")).toBe(true);

    const byPrompt = searchCatalog({ query: "skeleton placeholders" });
    expect(byPrompt.elements.some((e) => e.id === "skeleton")).toBe(true);
  });

  it("is case-insensitive and trims query", () => {
    const a = searchCatalog({ query: "  MODAL  " });
    const b = searchCatalog({ query: "modal" });
    expect(a.total).toBe(b.total);
    expect(a.total).toBeGreaterThan(0);
  });

  it("combines query and category filters", () => {
    const result = searchCatalog({ query: "button", categoryId: "buttons" });
    expect(result.total).toBeGreaterThan(0);
    expect(result.elements.every((e) => e.category === "buttons")).toBe(true);
    expect(
      result.elements.every(
        (e) =>
          e.name.toLowerCase().includes("button") ||
          e.tags?.some((t) => t.includes("button")) ||
          e.promptTip.toLowerCase().includes("button") ||
          e.description.toLowerCase().includes("button") ||
          (e.alsoKnownAs ?? []).some((a) => a.toLowerCase().includes("button")),
      ),
    ).toBe(true);
  });

  it("returns empty results for nonsense queries", () => {
    const result = searchCatalog({ query: "zzzxxyynonsuch123" });
    expect(result.total).toBe(0);
    expect(result.elements).toEqual([]);
    expect(result.categories).toEqual([]);
  });

  it("finds AI slop and library practice entries", () => {
    const slop = searchCatalog({ query: "purple gradient", categoryId: "ai-slop" });
    expect(slop.total).toBeGreaterThan(0);
    expect(slop.elements.every((e) => e.category === "ai-slop")).toBe(true);

    const glow = searchCatalog({ query: "neon glow", categoryId: "ai-slop" });
    expect(glow.elements.some((e) => e.id === "slop-glow-everything")).toBe(true);

    const fakeMetrics = searchCatalog({ query: "vanity KPI", categoryId: "ai-slop" });
    expect(fakeMetrics.elements.some((e) => e.id === "slop-fake-metrics")).toBe(true);

    const libs = searchCatalog({ query: "shadcn", categoryId: "library-practices" });
    expect(libs.total).toBeGreaterThan(0);
    expect(libs.elements.every((e) => e.category === "library-practices")).toBe(true);

    const field = searchCatalog({
      query: "form field triad",
      categoryId: "library-practices",
    });
    expect(field.elements.some((e) => e.id === "lib-form-field-pattern")).toBe(true);
  });

  it("finds completeness-pack entries across core categories", () => {
    const lead = searchCatalog({ query: "lead paragraph", categoryId: "typography" });
    expect(lead.elements.some((e) => e.id === "lead-text")).toBe(true);

    const accent = searchCatalog({ query: "accent token", categoryId: "color" });
    expect(accent.elements.some((e) => e.id === "accent-color")).toBe(true);

    const outline = searchCatalog({ query: "outline button", categoryId: "buttons" });
    expect(outline.elements.some((e) => e.id === "outline-button")).toBe(true);

    const searchField = searchCatalog({ query: "search field", categoryId: "forms" });
    expect(searchField.elements.some((e) => e.id === "search-input")).toBe(true);

    const segments = searchCatalog({
      query: "segmented control",
      categoryId: "navigation",
    });
    expect(segments.elements.some((e) => e.id === "segmented-control")).toBe(true);

    const status = searchCatalog({ query: "status dot", categoryId: "feedback" });
    expect(status.elements.some((e) => e.id === "status-dot")).toBe(true);

    const alert = searchCatalog({ query: "confirm dialog", categoryId: "overlays" });
    expect(alert.elements.some((e) => e.id === "alert-dialog")).toBe(true);

    const timeline = searchCatalog({ query: "timeline", categoryId: "data-display" });
    expect(timeline.elements.some((e) => e.id === "timeline")).toBe(true);

    const raised = searchCatalog({ query: "raised surface", categoryId: "surfaces" });
    expect(raised.elements.some((e) => e.id === "raised-surface")).toBe(true);

    const media = searchCatalog({ query: "media object", categoryId: "media" });
    expect(media.elements.some((e) => e.id === "media-object")).toBe(true);

    const pressed = searchCatalog({ query: "pressed state", categoryId: "states" });
    expect(pressed.elements.some((e) => e.id === "active-pressed")).toBe(true);
  });
});

describe("groupByCategory", () => {
  it("groups filtered elements in category order", () => {
    const { elements } = searchCatalog({ query: "shadow" });
    const groups = groupByCategory(elements);
    expect(groups.length).toBeGreaterThan(0);
    for (const g of groups) {
      expect(g.elements.every((e) => e.category === g.category.id)).toBe(true);
    }
    // Category order matches catalog order
    const orders = groups.map((g) => g.category.order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
  });
});

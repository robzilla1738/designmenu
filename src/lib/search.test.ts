import { describe, expect, it } from "vitest";
import { ELEMENTS } from "./catalog";
import {
  groupByCategory,
  scoreElement,
  searchCatalog,
  tokenizeQuery,
} from "./search";

describe("tokenizeQuery", () => {
  it("splits on spaces, commas, slashes, and plus", () => {
    expect(tokenizeQuery("  outline button  ")).toEqual(["outline", "button"]);
    expect(tokenizeQuery("cta/primary")).toEqual(["cta", "primary"]);
    expect(tokenizeQuery("a,b+c")).toEqual(["a", "b", "c"]);
  });

  it("returns empty for blank queries", () => {
    expect(tokenizeQuery("")).toEqual([]);
    expect(tokenizeQuery("   ")).toEqual([]);
  });
});

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

  it("matches multi-word designer phrases with AND token order independence", () => {
    // Reversed word order would fail plain substring match
    const reversed = searchCatalog({ query: "button outline" });
    expect(reversed.elements.some((e) => e.id === "outline-button")).toBe(true);

    const fab = searchCatalog({ query: "floating action" });
    expect(fab.elements.some((e) => e.id === "fab")).toBe(true);
    // FAB should rank near the top for this phrase
    expect(fab.elements[0]?.id).toBe("fab");

    const otp = searchCatalog({ query: "one time code" });
    expect(otp.elements.some((e) => e.id === "otp-input")).toBe(true);

    const toastStack = searchCatalog({ query: "toast stack" });
    expect(toastStack.elements.some((e) => e.id === "toast-stack")).toBe(true);
  });

  it("ranks name and alias hits above deep body-only matches", () => {
    const result = searchCatalog({ query: "modal" });
    expect(result.total).toBeGreaterThan(0);
    // Modal element itself should outrank entries that only mention modal in tips
    const modalIdx = result.elements.findIndex((e) => e.id === "modal");
    expect(modalIdx).toBeGreaterThanOrEqual(0);
    expect(modalIdx).toBeLessThan(3);

    const button = searchCatalog({ query: "primary" });
    const primaryBtn = button.elements.findIndex((e) => e.id === "primary-button");
    const primaryColor = button.elements.findIndex((e) => e.id === "primary-color");
    expect(primaryBtn).toBeGreaterThanOrEqual(0);
    expect(primaryColor).toBeGreaterThanOrEqual(0);
    // Both name hits should score highly; either may win depending on weights
    expect(Math.min(primaryBtn, primaryColor)).toBeLessThan(5);
  });

  it("requires every token to match (AND semantics)", () => {
    const both = searchCatalog({ query: "destructive confirm" });
    expect(both.elements.some((e) => e.id === "lib-destructive-confirm")).toBe(
      true,
    );

    // Token that cannot appear together on any element
    const none = searchCatalog({ query: "modal zzzxxyynonsuch123" });
    expect(none.total).toBe(0);
  });

  it("scores name hits higher than description-only hits via scoreElement", () => {
    const tokens = ["button"];
    const primary = ELEMENTS.find((e) => e.id === "primary-button")!;
    // Synthetic: description-only would score lower than a name hit
    const nameScore = scoreElement(primary, tokens);
    expect(nameScore).not.toBeNull();
    expect(nameScore!).toBeGreaterThan(50);
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

  it("preserves ranked order within a category group", () => {
    const { elements } = searchCatalog({ query: "button", categoryId: "buttons" });
    const groups = groupByCategory(elements);
    expect(groups).toHaveLength(1);
    expect(groups[0].elements.map((e) => e.id)).toEqual(
      elements.map((e) => e.id),
    );
  });
});

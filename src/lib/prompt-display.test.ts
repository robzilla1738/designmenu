import { describe, expect, it } from "vitest";
import { formatPromptDisplay } from "./prompt-display";
import { ELEMENTS } from "./catalog";

describe("formatPromptDisplay", () => {
  it("replaces hyphens in multi-segment design tokens with non-breaking hyphens", () => {
    const out = formatPromptDisplay('Use text-5xl/6xl and px-1.5 py-0.5 for chips');
    expect(out).toContain("text\u20115xl/6xl");
    expect(out).toContain("px\u20111.5");
    expect(out).toContain("py\u20110.5");
    // Still human-readable when normalized
    expect(out.replace(/\u2011/g, "-")).toBe(
      "Use text-5xl/6xl and px-1.5 py-0.5 for chips",
    );
  });

  it("leaves plain words and spaces alone", () => {
    expect(formatPromptDisplay("Add a single H1 page title")).toBe(
      "Add a single H1 page title",
    );
  });

  it("protects real catalog prompt tips that include Tailwind-style tokens", () => {
    const display = ELEMENTS.find((e) => e.id === "display-heading");
    expect(display).toBeDefined();
    const formatted = formatPromptDisplay(display!.promptTip);
    // No ASCII hyphen remaining inside utility tokens after format
    expect(formatted).toMatch(/text\u2011/);
    // Copy path stays intact when NB hyphens normalized back
    expect(formatted.includes("\u2011")).toBe(true);
  });
});

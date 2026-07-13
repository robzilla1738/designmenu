import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { ELEMENTS } from "./catalog";

const here = dirname(fileURLToPath(import.meta.url));
const exampleSource = readFileSync(
  join(here, "../components/ElementExample.tsx"),
  "utf8",
);

/** Parse switch case labels from the shipped live-demo renderer. */
function handledExampleKeys(source: string): Set<string> {
  const keys = new Set<string>();
  for (const match of source.matchAll(/case\s+"([^"]+)":/g)) {
    keys.add(match[1]);
  }
  return keys;
}

describe("ElementExample coverage", () => {
  it("implements a live demo for every catalog exampleKey", () => {
    const handled = handledExampleKeys(exampleSource);
    const missing = ELEMENTS.map((e) => e.exampleKey).filter((k) => !handled.has(k));
    expect(missing, `missing demos: ${missing.join(", ")}`).toEqual([]);
  });

  it("does not leave orphan demo branches unused by the catalog", () => {
    const handled = handledExampleKeys(exampleSource);
    const catalogKeys = new Set(ELEMENTS.map((e) => e.exampleKey));
    const orphans = [...handled].filter((k) => !catalogKeys.has(k));
    expect(orphans, `orphan demos: ${orphans.join(", ")}`).toEqual([]);
  });
});

describe("brand tokens are non-purple", () => {
  const css = readFileSync(join(here, "../app/globals.css"), "utf8");

  it("documents teal brand and uses non-purple OKLCH hues for primary tokens", () => {
    expect(css).toMatch(/teal primary/i);
    expect(css).not.toMatch(/indigo primary/i);

    // Extract --primary / --ring / --sidebar-primary declarations (not chart leftovers)
    const brandProps =
      css.match(
        /--(?:primary|ring|sidebar-primary|accent|sidebar-accent|sidebar-ring):\s*oklch\([^)]+\)/g,
      ) ?? [];
    expect(brandProps.length).toBeGreaterThan(4);

    for (const decl of brandProps) {
      const hueMatch = decl.match(/oklch\([\d.]+\s+[\d.]+\s+([\d.]+)/);
      expect(hueMatch, decl).not.toBeNull();
      const hue = Number(hueMatch![1]);
      // Purple/indigo/violet family sits roughly 270–310 in OKLCH
      expect(hue < 250 || hue > 320, `${decl} looks purple-ish (hue ${hue})`).toBe(
        true,
      );
    }
  });

  it("defines dm-font-inter helper bound to the loaded Inter variable", () => {
    expect(css).toMatch(/\.dm-font-inter\s*\{[^}]*var\(--font-inter\)/s);
  });
});

describe("slop-inter-only demo makes Inter sameness obvious", () => {
  it("uses the Inter stack and labels display/UI/caption roles in the shipped switch case", () => {
    const match = exampleSource.match(
      /case\s+"slop-inter-only":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(match, "slop-inter-only case missing").not.toBeNull();
    const body = match![1];
    expect(body).toMatch(/dm-font-inter/);
    expect(body).toMatch(/Inter · display/i);
    expect(body).toMatch(/Inter · UI/i);
    expect(body).toMatch(/Inter · caption/i);
  });

  it("loads Inter as --font-inter in the app layout (not only Geist)", () => {
    const layout = readFileSync(join(here, "../app/layout.tsx"), "utf8");
    expect(layout).toMatch(/Inter/);
    expect(layout).toMatch(/--font-inter/);
    expect(layout).toMatch(/inter\.variable/);
  });
});

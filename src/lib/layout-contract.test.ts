import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  EXAMPLE_STAGE_HEIGHT_PX,
  EXAMPLE_STAGE_PADDING_PX,
} from "@/components/ElementCard";

const here = dirname(fileURLToPath(import.meta.url));
const cardSource = readFileSync(
  join(here, "../components/ElementCard.tsx"),
  "utf8",
);
const exampleSource = readFileSync(
  join(here, "../components/ElementExample.tsx"),
  "utf8",
);

describe("example stage contract", () => {
  it("exports a stage height large enough for demos with padding", () => {
    expect(EXAMPLE_STAGE_HEIGHT_PX).toBeGreaterThanOrEqual(200);
    expect(EXAMPLE_STAGE_PADDING_PX).toBeGreaterThanOrEqual(12);
  });

  it("ships ElementCard with fixed-height stage, padding, and overflow containment", () => {
    expect(cardSource).toMatch(/data-testid="example-stage"/);
    // Mobile-shorter stage + desktop 200px
    expect(cardSource).toMatch(/h-\[168px\]|sm:h-\[200px\]|h-\[200px\]/);
    expect(cardSource).toMatch(/\bp-3\b|\bp-4\b|sm:p-4/);
    expect(cardSource).toMatch(/overflow-hidden/);
    // Use formatPromptDisplay so hyphenated tokens do not wrap mid-token
    expect(cardSource).toMatch(/formatPromptDisplay/);
    expect(cardSource).toMatch(/hyphens-none/);
    // Title/description/prompt use intentional line clamps (complete lines only)
    expect(cardSource).toMatch(/line-clamp-2/);
    expect(cardSource).toMatch(/line-clamp-4/);
  });

  it("does not force max-w-full onto every descendant (breaks absolute layouts)", () => {
    // Prefer [&>*]:max-w-full (direct child only), not [&_*]:max-w-full
    expect(cardSource).not.toMatch(/\[&_\*\]:max-w-full/);
    expect(cardSource).toMatch(/\[&>\*\]:max-w-full/);
  });
});

describe("demo anti-cutoff patterns", () => {
  it("keeps coach-mark callout in normal flow (not absolute past stage)", () => {
    const match = exampleSource.match(
      /case\s+"coach-mark":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(match, "coach-mark case missing").not.toBeNull();
    const body = match![1];
    expect(body).not.toMatch(/absolute\s+top-10/);
    expect(body).toMatch(/flex-col/);
  });

  it("sizes display-heading for the stage (no text-3xl blow-out)", () => {
    const match = exampleSource.match(
      /case\s+"display-heading":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(match, "display-heading case missing").not.toBeNull();
    const body = match![1];
    expect(body).not.toMatch(/text-3xl/);
    expect(body).toMatch(/text-xl|text-2xl/);
    expect(body).toMatch(/text-balance|max-w-/);
  });

  it("uses unique day-of-week keys in calendar-month (no duplicate S/T keys)", () => {
    const match = exampleSource.match(
      /case\s+"calendar-month":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(match, "calendar-month case missing").not.toBeNull();
    const body = match![1];
    expect(body).toMatch(/key=\{`dow-\$\{i\}`\}|key=\{\`dow-\$\{i\}\`\}|key=\{`dow-/);
    expect(body).not.toMatch(/key=\{d\}/);
  });

  it("keeps wide alerts/tables within ~220px stage content width", () => {
    const alert = exampleSource.match(
      /case\s+"alert-banner":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(alert).not.toBeNull();
    expect(alert![1]).toMatch(/max-w-\[220px\]/);
    expect(alert![1]).not.toMatch(/max-w-\[280px\]/);

    const table = exampleSource.match(
      /case\s+"table":\s*return\s*\(([\s\S]*?)\);\s*case\s+"/,
    );
    expect(table).not.toBeNull();
    expect(table![1]).toMatch(/max-w-\[220px\]/);
    expect(table![1]).not.toMatch(/max-w-\[260px\]/);
  });
});

/**
 * Format prompt tip text for card display so hyphenated design tokens
 * (e.g. text-5xl, px-1.5, border-b-2) do not wrap mid-token.
 * Uses Unicode non-breaking hyphen (U+2011).
 */
export function formatPromptDisplay(text: string): string {
  return text.replace(/\b[\w./]+(?:-[\w./]+)+\b/g, (token) =>
    token.replace(/-/g, "\u2011"),
  );
}

import { describe, expect, it } from "vitest";
import {
  THEME_STORAGE_KEY,
  isThemePreference,
  nextThemePreference,
  parseThemePreference,
  readThemeFromStorage,
  resolveTheme,
  writeThemeToStorage,
} from "./theme";

describe("theme helpers", () => {
  it("validates theme preferences", () => {
    expect(isThemePreference("light")).toBe(true);
    expect(isThemePreference("dark")).toBe(true);
    expect(isThemePreference("system")).toBe(true);
    expect(isThemePreference("blue")).toBe(false);
    expect(isThemePreference(null)).toBe(false);
  });

  it("parses storage values with system fallback", () => {
    expect(parseThemePreference("dark")).toBe("dark");
    expect(parseThemePreference("light")).toBe("light");
    expect(parseThemePreference("system")).toBe("system");
    expect(parseThemePreference(null)).toBe("system");
    expect(parseThemePreference("nope")).toBe("system");
    expect(parseThemePreference(undefined)).toBe("system");
  });

  it("resolves system preference against OS dark flag", () => {
    expect(resolveTheme("light", true)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
  });

  it("cycles light → dark → system → light", () => {
    expect(nextThemePreference("light")).toBe("dark");
    expect(nextThemePreference("dark")).toBe("system");
    expect(nextThemePreference("system")).toBe("light");
  });

  it("reads and writes theme via storage API", () => {
    const store = new Map<string, string>();
    const storage = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
    };

    expect(readThemeFromStorage(storage)).toBe("system");
    expect(writeThemeToStorage(storage, "dark")).toBe(true);
    expect(store.get(THEME_STORAGE_KEY)).toBe("dark");
    expect(readThemeFromStorage(storage)).toBe("dark");
  });

  it("handles missing storage safely", () => {
    expect(readThemeFromStorage(null)).toBe("system");
    expect(writeThemeToStorage(undefined, "light")).toBe(false);
  });
});

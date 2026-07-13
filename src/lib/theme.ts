/** Theme preference storage — pure helpers for unit tests. */

export type ThemePreference = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "design-menu-theme";

export function isThemePreference(value: unknown): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

/**
 * Resolve stored preference string to a valid ThemePreference.
 * Invalid / missing values fall back to "system".
 */
export function parseThemePreference(raw: string | null | undefined): ThemePreference {
  if (raw && isThemePreference(raw)) return raw;
  return "system";
}

/**
 * Resolve effective light/dark given preference + system dark flag.
 */
export function resolveTheme(
  preference: ThemePreference,
  systemPrefersDark: boolean,
): "light" | "dark" {
  if (preference === "system") {
    return systemPrefersDark ? "dark" : "light";
  }
  return preference;
}

/**
 * Cycle: light → dark → system → light
 */
export function nextThemePreference(current: ThemePreference): ThemePreference {
  if (current === "light") return "dark";
  if (current === "dark") return "system";
  return "light";
}

/**
 * Read preference from a storage-like object (localStorage shape).
 */
export function readThemeFromStorage(
  storage: Pick<Storage, "getItem"> | null | undefined,
): ThemePreference {
  if (!storage) return "system";
  try {
    return parseThemePreference(storage.getItem(THEME_STORAGE_KEY));
  } catch {
    return "system";
  }
}

/**
 * Persist preference. Returns true if write succeeded.
 */
export function writeThemeToStorage(
  storage: Pick<Storage, "setItem"> | null | undefined,
  preference: ThemePreference,
): boolean {
  if (!storage) return false;
  try {
    storage.setItem(THEME_STORAGE_KEY, preference);
    return true;
  } catch {
    return false;
  }
}

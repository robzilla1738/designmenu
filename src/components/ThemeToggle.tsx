"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ThemePreference } from "@/lib/theme";
import { nextThemePreference } from "@/lib/theme";
import { Button } from "@/components/ui/button";

const STATIC_ARIA = "Cycle color theme: light, dark, or system";
const STATIC_TITLE = "Cycle light / dark / system";

/**
 * Renders an identical placeholder on the server and the first client paint.
 * Theme-dependent UI only appears after mount (localStorage is client-only).
 */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Identical markup for SSR + first client render — no theme reads.
  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        aria-label={STATIC_ARIA}
        title={STATIC_TITLE}
        data-testid="theme-toggle"
        className="gap-2 rounded-full"
        disabled
      >
        <Sun className="size-3.5" aria-hidden />
        <span className="hidden sm:inline">Theme</span>
      </Button>
    );
  }

  const preference = (theme ?? "system") as ThemePreference;
  const label =
    preference === "system"
      ? `System (${resolvedTheme ?? "…"})`
      : preference === "dark"
        ? "Dark"
        : "Light";

  const Icon =
    preference === "dark" ||
    (preference === "system" && resolvedTheme === "dark")
      ? Moon
      : preference === "system"
        ? Monitor
        : Sun;

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setTheme(nextThemePreference(preference))}
      aria-label={`${STATIC_ARIA}. Current: ${label}.`}
      title={STATIC_TITLE}
      data-testid="theme-toggle"
      className="gap-2 rounded-full"
    >
      <Icon className="size-3.5" aria-hidden />
      <span className="hidden sm:inline">{label}</span>
    </Button>
  );
}

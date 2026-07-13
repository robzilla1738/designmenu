"use client";

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { CATEGORIES, getCatalogStats, type CategoryId } from "@/lib/catalog";
import { groupByCategory, searchCatalog } from "@/lib/search";
import { cn } from "@/lib/utils";
import { ElementCard } from "./ElementCard";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CatalogApp() {
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState<CategoryId | "all">("all");
  const stats = useMemo(() => getCatalogStats(), []);
  const chipRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const result = useMemo(
    () => searchCatalog({ query, categoryId }),
    [query, categoryId],
  );

  const groups = useMemo(
    () => groupByCategory(result.elements),
    [result.elements],
  );

  // Keep the active mobile chip visible in the horizontal scroller
  useEffect(() => {
    const key = categoryId === "all" ? "all" : categoryId;
    const el = chipRefs.current.get(key);
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [categoryId]);

  function selectCategory(id: CategoryId | "all") {
    setCategoryId(id);
    if (id !== "all" && typeof document !== "undefined") {
      // Defer so filter re-render can mount the section
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else if (id === "all" && typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-dvh min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--header-bg)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[var(--header-bg)] dm-safe-top">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-3.5 lg:px-8">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <div
              className="relative flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-foreground text-[11px] font-bold tracking-tight text-background shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-border/50 sm:size-9 sm:rounded-[12px] sm:text-[11.5px]"
              aria-hidden
            >
              DM
            </div>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[15px] font-semibold tracking-[-0.02em] sm:text-[16px]">
                Design Menu
              </p>
              <p className="hidden text-[11px] font-medium tracking-wide text-muted-foreground/80 sm:block">
                Name it. See it. Prompt it.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="hidden text-[11px] font-medium tracking-wide text-muted-foreground/70 tabular-nums md:inline">
              {stats.totalElements} elements · {stats.totalCategories} categories
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:gap-10 lg:px-8 lg:py-10">
        <aside className="hidden w-[220px] shrink-0 lg:block">
          <nav
            className="sticky top-[86px]"
            aria-label="Categories"
            data-testid="category-nav"
          >
            <p className="mb-3 px-2.5 text-[10.5px] font-semibold tracking-[0.14em] text-muted-foreground/60 uppercase">
              Browse
            </p>
            <ScrollArea className="h-[calc(100vh-8.5rem)] pr-2">
              <div className="space-y-1 pb-8">
                <NavButton
                  active={categoryId === "all"}
                  onClick={() => selectCategory("all")}
                  label="All elements"
                  count={stats.totalElements}
                />
                {CATEGORIES.map((cat) => {
                  const count =
                    stats.byCategory.find((c) => c.id === cat.id)?.count ?? 0;
                  return (
                    <NavButton
                      key={cat.id}
                      active={categoryId === cat.id}
                      onClick={() => selectCategory(cat.id)}
                      label={cat.name}
                      count={count}
                      href={`#${cat.id}`}
                      highlight={
                        cat.id === "ai-slop" || cat.id === "library-practices"
                      }
                    />
                  );
                })}
              </div>
            </ScrollArea>
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <section className="mb-8 sm:mb-10">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary/90 uppercase">
              Visual glossary for UI
            </p>
            <h1 className="mt-2 max-w-[18ch] text-[28px] font-semibold leading-[1.08] tracking-[-0.03em] sm:mt-3 sm:text-[42px] sm:leading-[1.05]">
              Design Menu
            </h1>
            <p className="mt-3 max-w-[58ch] text-[14.5px] leading-[1.55] tracking-[-0.01em] text-muted-foreground sm:mt-4 sm:text-[17px] sm:leading-[1.6]">
              Live examples of design elements — with the names designers use and
              ready-made language for prompting AI. Includes AI slop to avoid and
              library best practices.
            </p>

            <div className="group relative mt-5 w-full max-w-[560px] sm:mt-7">
              <label htmlFor="catalog-search" className="sr-only">
                Search design elements
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-3.5 size-[18px] -translate-y-1/2 text-muted-foreground/55 transition-colors group-focus-within:text-foreground/70 sm:left-4" />
              <Input
                id="catalog-search"
                type="search"
                inputMode="search"
                enterKeyHint="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search elements, aliases, tags…"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                className="h-11 w-full rounded-[14px] border-border/60 bg-card pl-10 pr-10 text-base tracking-[-0.01em] shadow-[var(--search-shadow)] transition-[box-shadow,border-color,background] placeholder:text-muted-foreground/60 focus-visible:border-border focus-visible:shadow-[var(--search-shadow-focus)] focus-visible:ring-0 sm:h-12 sm:rounded-[16px] sm:pl-11 sm:pr-11 sm:text-[14.5px] [&::-webkit-search-cancel-button]:hidden"
                data-testid="catalog-search"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute top-1/2 right-2.5 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:right-3 sm:size-7"
                  aria-label="Clear search"
                  data-testid="clear-search"
                >
                  <X className="size-3.5" />
                </button>
              ) : null}
            </div>
            {!query ? (
              <p className="mt-2 max-w-[560px] text-[11.5px] leading-snug tracking-[-0.01em] text-muted-foreground/70 sm:mt-2.5 sm:text-[12px]">
                Multi-word search matches every term (e.g.{" "}
                <button
                  type="button"
                  className="font-medium text-foreground/80 underline-offset-2 hover:underline"
                  onClick={() => setQuery("toast stack")}
                >
                  toast stack
                </button>
                ,{" "}
                <button
                  type="button"
                  className="font-medium text-foreground/80 underline-offset-2 hover:underline"
                  onClick={() => setQuery("focus ring")}
                >
                  focus ring
                </button>
                ). Ranked by name first.
              </p>
            ) : null}
          </section>

          {/* Mobile / tablet category chips — sticky under header */}
          <div
            className="sticky top-[calc(3.25rem+env(safe-area-inset-top,0px))] z-30 -mx-4 mb-5 border-b border-border/40 bg-[var(--header-bg)]/95 px-4 py-2.5 backdrop-blur-xl sm:top-[calc(3.75rem+env(safe-area-inset-top,0px))] sm:-mx-0 sm:mb-6 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none lg:hidden"
            data-testid="category-chips"
          >
            <div className="dm-chip-scroller scrollbar-hide flex gap-2 overflow-x-auto pb-0.5">
              <Chip
                ref={(node) => {
                  if (node) chipRefs.current.set("all", node);
                  else chipRefs.current.delete("all");
                }}
                active={categoryId === "all"}
                onClick={() => selectCategory("all")}
                label="All"
              />
              {CATEGORIES.map((cat) => (
                <Chip
                  key={cat.id}
                  ref={(node) => {
                    if (node) chipRefs.current.set(cat.id, node);
                    else chipRefs.current.delete(cat.id);
                  }}
                  active={categoryId === cat.id}
                  onClick={() => selectCategory(cat.id)}
                  label={cat.name}
                />
              ))}
            </div>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 sm:mb-7 sm:gap-3">
            <p
              className="min-w-0 flex-1 text-[12.5px] font-medium tracking-[-0.01em] text-muted-foreground sm:text-[13px]"
              data-testid="result-count"
            >
              {result.total === 0
                ? "No matches"
                : `${result.total} element${result.total === 1 ? "" : "s"}`}
              {query ? (
                <span className="break-words">
                  {" "}
                  for “{query.length > 28 ? `${query.slice(0, 28)}…` : query}”
                </span>
              ) : (
                ""
              )}
            </p>
            {(query || categoryId !== "all") && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setQuery("");
                  setCategoryId("all");
                }}
                className="h-8 shrink-0 gap-1.5 rounded-full px-3 text-[12.5px] font-medium tracking-[-0.01em] text-muted-foreground hover:text-foreground sm:h-7 sm:text-[13px]"
              >
                <X className="size-3.5" />
                Clear
                <span className="hidden sm:inline"> filters</span>
              </Button>
            )}
          </div>

          {groups.length === 0 ? (
            <div
              className="rounded-[16px] border border-dashed border-border/60 bg-card/60 px-4 py-12 text-center backdrop-blur-sm sm:rounded-[20px] sm:px-6 sm:py-16"
              data-testid="empty-results"
            >
              <p className="text-[15px] font-semibold tracking-[-0.01em]">
                No elements found
              </p>
              <p className="mx-auto mt-1.5 max-w-[36ch] text-[13px] leading-relaxed tracking-[-0.01em] text-muted-foreground">
                Every word must match. Try fewer terms, a designer synonym
                (e.g. “FAB”, “CTA”), or clear filters.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {["button", "modal", "toast", "form", "slop"].map((hint) => (
                  <Button
                    key={hint}
                    type="button"
                    size="sm"
                    variant="outline"
                    className="h-9 min-w-[4.5rem] rounded-full px-3 text-[12px] sm:h-8"
                    onClick={() => {
                      setQuery(hint);
                      setCategoryId("all");
                    }}
                  >
                    {hint}
                  </Button>
                ))}
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="h-9 rounded-full px-3 text-[12px] sm:h-8"
                  onClick={() => {
                    setQuery("");
                    setCategoryId("all");
                  }}
                >
                  Clear all
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-12 sm:space-y-16">
              {groups.map(({ category, elements }) => (
                <section
                  key={category.id}
                  id={category.id}
                  data-category={category.id}
                  className="scroll-mt-[7.5rem] sm:scroll-mt-28"
                >
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-2 sm:mb-5 sm:gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <h2 className="text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]">
                          {category.name}
                        </h2>
                        {(category.id === "ai-slop" ||
                          category.id === "library-practices") && (
                          <Badge className="h-5 rounded-full border-0 bg-secondary px-2.5 text-[10px] font-medium tracking-wide text-secondary-foreground">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 max-w-[48ch] text-[12.5px] leading-[1.45] tracking-[-0.01em] text-muted-foreground sm:text-[13px] sm:leading-[1.5]">
                        {category.description}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="h-6 shrink-0 rounded-full border-border/60 px-2.5 text-[11px] font-medium tabular-nums text-muted-foreground/80"
                    >
                      {elements.length}
                    </Badge>
                  </div>
                  <Separator className="mb-4 bg-border/70 sm:mb-6" />
                  <div className="grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 sm:gap-x-5 sm:gap-y-6">
                    {elements.map((el) => (
                      <ElementCard key={el.id} element={el} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <footer className="mt-14 border-t border-border/60 pt-8 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:mt-20 sm:pt-10 sm:pb-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-[13px] font-semibold tracking-[-0.01em] text-foreground/80">
                Design Menu
              </p>
              <p className="max-w-[44ch] px-2 text-[12.5px] leading-[1.55] tracking-[-0.01em] text-muted-foreground/70 sm:text-[13px] sm:leading-[1.6]">
                Built with shadcn/ui · A labeled catalog of design language for
                humans and the AIs they prompt.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

function NavButton({
  active,
  onClick,
  label,
  count,
  href,
  highlight,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  href?: string;
  highlight?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick();
        if (href && typeof document !== "undefined") {
          const el = document.querySelector(href);
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      className={cn(
        "group flex w-full items-center justify-between rounded-[10px] px-2.5 py-2 text-left text-[13.5px] leading-[1.2] tracking-[-0.01em] transition-all duration-150",
        active
          ? "bg-foreground text-background shadow-[0_1px_2px_rgba(0,0,0,0.08)] font-[550]"
          : "text-muted-foreground/80 hover:bg-muted hover:text-foreground",
        highlight && !active && "text-foreground/70",
      )}
    >
      <span className="truncate">{label}</span>
      <span
        className={cn(
          "ml-2 shrink-0 text-[11px] tabular-nums transition-opacity",
          active ? "opacity-70" : "opacity-50 group-hover:opacity-80",
        )}
      >
        {count}
      </span>
    </button>
  );
}

const Chip = forwardRef<
  HTMLButtonElement,
  {
    active: boolean;
    onClick: () => void;
    label: string;
  }
>(function Chip({ active, onClick, label }, ref) {
  return (
    <Button
      ref={ref}
      type="button"
      size="sm"
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className={cn(
        "h-9 shrink-0 touch-manipulation rounded-full border px-3.5 text-[13px] font-medium tracking-[-0.01em] shadow-[0_1px_1px_rgba(0,0,0,0.02)] transition-all sm:h-8",
        active
          ? "border-transparent bg-foreground text-background shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-foreground/90"
          : "border-border/60 bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {label}
    </Button>
  );
});

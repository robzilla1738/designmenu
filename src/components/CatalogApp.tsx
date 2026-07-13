"use client";

import { useMemo, useState } from "react";
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

  const result = useMemo(
    () => searchCatalog({ query, categoryId }),
    [query, categoryId],
  );

  const groups = useMemo(
    () => groupByCategory(result.elements),
    [result.elements],
  );

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--header-bg)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[var(--header-bg)]">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3.5">
            <div
              className="relative flex size-9 items-center justify-center rounded-[12px] bg-foreground text-[11.5px] font-bold tracking-tight text-background shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-border/50"
              aria-hidden
            >
              DM
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold tracking-[-0.02em] sm:text-[16px]">
                Design Menu
              </p>
              <p className="hidden text-[11px] font-medium tracking-wide text-muted-foreground/80 sm:block">
                Name it. See it. Prompt it.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="hidden text-[11px] font-medium tracking-wide text-muted-foreground/70 tabular-nums md:inline">
              {stats.totalElements} elements · {stats.totalCategories} categories
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-8 px-4 py-8 sm:px-6 lg:gap-10 lg:px-8 lg:py-10">
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
                  onClick={() => setCategoryId("all")}
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
                      onClick={() => setCategoryId(cat.id)}
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
          <section className="mb-10">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary/90 uppercase">
              Visual glossary for UI
            </p>
            <h1 className="mt-3 max-w-[18ch] text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[42px]">
              Design Menu
            </h1>
            <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.6] tracking-[-0.01em] text-muted-foreground sm:text-[17px]">
              Live examples of design elements — with the names designers use and
              ready-made language for prompting AI. Includes AI slop to avoid and
              library best practices.
            </p>

            <div className="group relative mt-7 max-w-[560px]">
              <label htmlFor="catalog-search" className="sr-only">
                Search design elements
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 text-muted-foreground/55 transition-colors group-focus-within:text-foreground/70" />
              <Input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search elements, aliases, or tags…"
                className="h-12 rounded-[16px] border-border/60 bg-card pl-11 pr-4 text-[14.5px] tracking-[-0.01em] shadow-[var(--search-shadow)] transition-[box-shadow,border-color,background] placeholder:text-muted-foreground/60 focus-visible:border-border focus-visible:shadow-[var(--search-shadow-focus)] focus-visible:ring-0"
                data-testid="catalog-search"
              />
            </div>

            <div
              className="scrollbar-hide mt-5 flex gap-2 overflow-x-auto pb-1 lg:hidden"
              data-testid="category-chips"
            >
              <Chip
                active={categoryId === "all"}
                onClick={() => setCategoryId("all")}
                label="All"
              />
              {CATEGORIES.map((cat) => (
                <Chip
                  key={cat.id}
                  active={categoryId === cat.id}
                  onClick={() => setCategoryId(cat.id)}
                  label={cat.name}
                />
              ))}
            </div>
          </section>

          <div className="mb-7 flex items-center justify-between gap-3">
            <p
              className="text-[13px] font-medium tracking-[-0.01em] text-muted-foreground"
              data-testid="result-count"
            >
              {result.total === 0
                ? "No matches"
                : `${result.total} element${result.total === 1 ? "" : "s"}`}
              {query ? ` for “${query}”` : ""}
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
                className="h-7 gap-1.5 rounded-full px-3 text-[13px] font-medium tracking-[-0.01em] text-muted-foreground hover:text-foreground"
              >
                <X className="size-3.5" />
                Clear filters
              </Button>
            )}
          </div>

          {groups.length === 0 ? (
            <div className="rounded-[20px] border border-dashed border-border/60 bg-card/60 px-6 py-20 text-center backdrop-blur-sm">
              <p className="text-[15px] font-semibold tracking-[-0.01em]">No elements found</p>
              <p className="mt-1.5 text-[13px] tracking-[-0.01em] text-muted-foreground">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {groups.map(({ category, elements }) => (
                <section
                  key={category.id}
                  id={category.id}
                  data-category={category.id}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h2 className="text-[20px] font-semibold tracking-[-0.02em]">
                          {category.name}
                        </h2>
                        {(category.id === "ai-slop" ||
                          category.id === "library-practices") && (
                          <Badge className="h-5 rounded-full border-0 bg-secondary px-2.5 text-[10px] font-medium tracking-wide text-secondary-foreground">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 max-w-[48ch] text-[13px] leading-[1.5] tracking-[-0.01em] text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="h-6 rounded-full border-border/60 px-2.5 text-[11px] font-medium tabular-nums text-muted-foreground/80">
                      {elements.length}
                    </Badge>
                  </div>
                  <Separator className="mb-6 bg-border/70" />
                  <div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6">
                    {elements.map((el) => (
                      <ElementCard key={el.id} element={el} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <footer className="mt-20 border-t border-border/60 pt-10 pb-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-[13px] font-semibold tracking-[-0.01em] text-foreground/80">Design Menu</p>
              <p className="max-w-[44ch] text-[13px] leading-[1.6] tracking-[-0.01em] text-muted-foreground/70">
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

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <Button
      type="button"
      size="sm"
      variant={active ? "default" : "outline"}
      onClick={onClick}
      className={cn(
        "h-8 shrink-0 rounded-full border px-3.5 text-[13px] font-medium tracking-[-0.01em] shadow-[0_1px_1px_rgba(0,0,0,0.02)] transition-all",
        active
          ? "border-transparent bg-foreground text-background shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-foreground/90"
          : "border-border/60 bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {label}
    </Button>
  );
}

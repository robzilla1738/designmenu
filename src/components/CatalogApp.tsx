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
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm"
              aria-hidden
            >
              DM
            </div>
            <div>
              <p className="text-base font-semibold tracking-tight sm:text-lg">
                Design Menu
              </p>
              <p className="hidden text-xs text-muted-foreground sm:block">
                Name it. See it. Prompt it.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-xs text-muted-foreground md:inline">
              {stats.totalElements} elements · {stats.totalCategories} categories
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <nav
            className="sticky top-24"
            aria-label="Categories"
            data-testid="category-nav"
          >
            <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
              Browse
            </p>
            <ScrollArea className="h-[calc(100vh-8rem)] pr-2">
              <div className="space-y-0.5 pb-8">
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
                        cat.id === "ai-slop" ||
                        cat.id === "creative" ||
                        cat.id === "library-practices"
                      }
                    />
                  );
                })}
              </div>
            </ScrollArea>
          </nav>
        </aside>

        <main className="min-w-0 flex-1">
          <section className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Visual glossary for UI
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Design Menu
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Live examples of design elements — with the names designers use and
              ready-made language for prompting AI. Includes creative effects, AI
              slop to avoid, and library best practices.
            </p>

            <div className="relative mt-6 max-w-xl">
              <label htmlFor="catalog-search" className="sr-only">
                Search design elements
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search elements, aliases, or tags…"
                className="h-11 rounded-xl pl-9 shadow-sm"
                data-testid="catalog-search"
              />
            </div>

            <div
              className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden"
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

          <div className="mb-6 flex items-center justify-between gap-3">
            <p
              className="text-sm text-muted-foreground"
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
                className="gap-1 text-primary"
              >
                <X className="size-3.5" />
                Clear filters
              </Button>
            )}
          </div>

          {groups.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
              <p className="text-lg font-medium">No elements found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try a different search term or category.
              </p>
            </div>
          ) : (
            <div className="space-y-14">
              {groups.map(({ category, elements }) => (
                <section
                  key={category.id}
                  id={category.id}
                  data-category={category.id}
                  className="scroll-mt-28"
                >
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-semibold tracking-tight">
                          {category.name}
                        </h2>
                        {(category.id === "ai-slop" ||
                          category.id === "creative" ||
                          category.id === "library-practices") && (
                          <Badge variant="secondary" className="text-[10px]">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <Badge variant="outline" className="tabular-nums">
                      {elements.length}
                    </Badge>
                  </div>
                  <Separator className="mb-5" />
                  <div className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {elements.map((el) => (
                      <ElementCard key={el.id} element={el} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}

          <footer className="mt-16 border-t border-border pt-8 pb-12 text-center text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Design Menu</p>
            <p className="mt-1">
              Built with shadcn/ui · A labeled catalog of design language for
              humans and the AIs they prompt.
            </p>
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
        "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
        active
          ? "bg-accent font-medium text-accent-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        highlight && !active && "text-foreground/80",
      )}
    >
      <span className="truncate">{label}</span>
      <span className="ml-2 text-[11px] tabular-nums opacity-70">{count}</span>
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
      className="shrink-0 rounded-full"
    >
      {label}
    </Button>
  );
}

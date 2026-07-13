# Architecture

Design Menu is a single-page Next.js catalog: **data in, demos out**. Search and theme helpers are pure so they can be unit-tested without a browser.

## Runtime shape

```
Browser
  └─ CatalogApp
       ├─ searchCatalog({ query, categoryId })  → filtered elements
       ├─ groupByCategory(elements)            → ordered sections
       └─ ElementCard × N
            ├─ ElementExample(exampleKey)      → live stage
            └─ promptTip (copy button)
```

## Catalog data (`src/lib/catalog.ts`)

### `Category`

| Field | Role |
|-------|------|
| `id` | Stable key (`CategoryId` union) |
| `name` | Nav label |
| `description` | Section blurb |
| `order` | Sort order in nav and groups |

### `DesignElement`

| Field | Role |
|-------|------|
| `id` | Unique slug (equals `exampleKey` by convention) |
| `category` | Parent `CategoryId` |
| `name` | Primary label |
| `alsoKnownAs?` | Aliases for search |
| `description` | Human explanation |
| `promptTip` | Prompt or avoidance copy |
| `promptKind?` | `"prompt"` (default) or `"avoid"` for AI slop |
| `exampleKey` | Switch key for `ElementExample` |
| `tags?` | Extra search tokens |

Helpers: `getElementById`, `getElementsByCategory`, `getCatalogStats`.

## Search (`src/lib/search.ts`)

- Case-insensitive **tokenized AND** match over name, description, prompt tip, id, aliases, and tags.
- Multi-word queries (spaces / commas / slashes) require every token to hit some field.
- **Relevance ranking** prefers name/alias/id/tag hits over description and prompt-tip text.
- Optional hard filter by category.
- Empty query returns the full catalog in category order.
- `groupByCategory` rebuilds section headers and preserves ranked order within a category.

## Live demos (`src/components/ElementExample.tsx`)

- One large `switch (exampleKey)`.
- Prefer shadcn primitives for interactive chrome (Button, Dialog, Tabs, …).
- Optional demo helpers use a `dm-` prefix in `globals.css` when Tailwind alone is not enough.
- Default branch is a fallback “missing demo” marker — tests fail if any catalog key lands there.

## Theme

| Piece | Responsibility |
|-------|----------------|
| `globals.css` | Light/dark CSS variables (light blue primary ~ OKLCH 232) |
| `ThemeProvider` | `next-themes` with `attribute="class"` |
| `theme.ts` | Pure parse/cycle/storage helpers for tests |
| `ThemeToggle` | Cycles light → dark → system |

Storage key: `design-menu-theme`.

Fonts:

- **Geist** — product UI (`--font-geist-sans` / mono).
- **Inter** — loaded only for the `slop-inter-only` demo (`.dm-font-inter` / `--font-inter`).

## Testing strategy

| Suite | Asserts |
|-------|---------|
| `catalog.test.ts` | Categories present, element integrity, core UI + specialized floors, completeness ids |
| `search.test.ts` | Query + category filters, findability of key entries |
| `theme.test.ts` | Preference parse/cycle/storage |
| `example-keys.test.ts` | Every `exampleKey` has a switch case; brand hues non-purple; Inter slop demo is real |

Tests import shipped modules — they do not reimplement the catalog list.

## Adding a category (rare)

1. Extend `CategoryId` and `CATEGORIES`.
2. Add elements with that `category`.
3. Update README / CONTRIBUTING category tables.
4. Raise any minimum count expectations in tests if needed.

## Non-goals (current)

- CMS / admin for catalog editing
- Multi-page marketing site beyond the catalog shell
- Pixel-perfect export of demos to Figma

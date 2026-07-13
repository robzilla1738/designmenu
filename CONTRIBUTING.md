# Contributing to Design Menu

Thanks for helping grow the catalog. The bar is **clear demos + usable prompt language**, not volume for its own sake.

## Setup

```bash
npm install
npm run dev
```

```bash
npm test
npm run build
```

## What makes a good element

- **Name** — what designers call it (plus optional `alsoKnownAs`).
- **Description** — one or two sentences of meaning, not implementation trivia.
- **promptTip** — copy-pasteable instructions for an AI (or avoidance language for slop). Keep it concrete.
- **Live demo** — readable in a ~220px stage; one idea per card.
- **Tags** — short search keywords.

### Category guidance

| Category | Do | Don’t |
|----------|----|--------|
| Core UI (type → states) | Teach standard UI language | Invent one-off product features |
| AI Slop | Exaggerate **one** failure mode; `promptKind: "avoid"` | Soften the anti-pattern until it’s unclear |
| Library practices | Actionable shadcn/Radix/Tailwind system advice | Restate generic “write clean code” |

## Workflow

1. Branch from `main`.
2. Edit `src/lib/catalog.ts` and `src/components/ElementExample.tsx` together.
3. If you add creative CSS helpers, put them in `src/app/globals.css` with a `dm-` prefix.
4. Update README counts if category totals change meaningfully.
5. Ensure `npm test` and `npm run build` pass.
6. Open a PR with a short description of what was added or fixed.

## Code style

- Catalog data stays **pure TypeScript** (no React in `catalog.ts`) so search and stats stay unit-testable.
- Prefer semantic tokens (`bg-primary`, `text-muted-foreground`) over hard-coded brand hex in non-slop demos.
- Respect `prefers-reduced-motion` for animated demos.

## Reporting issues

Include:

- Element id or name (if relevant)
- What you expected vs. what you saw
- Browser / dark-or-light theme if visual

## License

By contributing, you agree your contributions are licensed under the MIT License.

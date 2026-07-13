<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design Menu — agent notes

- Catalog data: `src/lib/catalog.ts` (pure). Demos: `src/components/ElementExample.tsx`.
- Brand accent is **teal** (not purple). Purple only in intentional AI-slop demos.
- New elements need both a catalog entry and a matching `exampleKey` switch case.
- Run `npm test` after catalog or demo changes. See `docs/ARCHITECTURE.md` and `CONTRIBUTING.md`.

# Design Menu

A visual catalog of UI design elements — each with a **live example**, the **name designers use**, and **ready-to-use AI prompt language**.

Built for people who recognize a pattern on screen but don’t know what it’s called (or how to describe it to an AI).

**146 labeled elements** · **15 categories** · Teal brand accent · Light / dark / system theme

---

## Why it exists

When you vibe-code or brief a designer (or an LLM), the bottleneck is often **vocabulary**:

- “That soft blurry panel over the gradient” → **glass / frosted surface**
- “The endless scrolling logo strip” → **marquee / ticker**
- “That same purple AI landing page look” → **default purple gradient hero** (AI slop — avoid)

Design Menu names the pattern, shows it, and hands you prompt text you can copy.

---

## What’s inside

| Area | Count | What you get |
|------|------:|--------------|
| Typography → States | 88 | Core UI language: type, color, layout, controls, feedback, overlays, surfaces |
| **Creative** | 21 | Dither, grain, kinetic type, bento, paper, risograph, Swiss grid, mesh, and more |
| **AI Slop** | 19 | Anti-patterns with **Avoid by prompting** tips (purple haze, Inter-only, fake metrics, glow spam…) |
| **Library Best Practices** | 18 | shadcn / Radix / Tailwind composition habits |

### Categories

Typography · Color · Spacing & Layout · Buttons · Form Controls · Navigation · Feedback · Overlays · Data Display · Surfaces · Media & Icons · States & Motion · **Creative** · **AI Slop** · **Library Best Practices**

### Standout sections

- **Creative** — distinctive visual craft that reads in a small stage (print texture, editorial type, restrained motion).
- **AI Slop** — common model defaults and how to steer past them. Purple gradients stay *here* as intentional bad examples; the product chrome uses teal.
- **Library Best Practices** — compose primitives, semantic tokens, CVA variants, accessible overlays, controlled open state, and more.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm test          # Vitest unit tests
npm run build     # production build
npm start         # serve production build
```

Requirements: **Node.js 20+** recommended.

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js](https://nextjs.org/) (App Router) 16 |
| UI | [shadcn/ui](https://ui.shadcn.com/) + Radix primitives |
| Styling | Tailwind CSS v4 · CSS variables (teal primary) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) (light / dark / system) |
| Language | TypeScript |
| Tests | [Vitest](https://vitest.dev/) |

---

## Project structure

```
src/
  app/                 # Next.js app shell, globals.css brand tokens
  components/
    CatalogApp.tsx     # Search, category nav, element grid
    ElementCard.tsx    # Card chrome + copy-prompt
    ElementExample.tsx # Live demo switch (one branch per exampleKey)
    ui/                # shadcn primitives
  lib/
    catalog.ts         # Categories + element data (pure, testable)
    search.ts          # Catalog search / filter
    theme.ts           # Theme preference helpers
```

### Adding an element

1. Append a `DesignElement` in `src/lib/catalog.ts` (unique `id`, `category`, `name`, `description`, `promptTip`, `exampleKey`, optional `tags` / `alsoKnownAs`).
2. For **AI Slop**, set `promptKind: "avoid"` and write avoidance-oriented tip language.
3. Add a matching `case` in `src/components/ElementExample.tsx` that clearly demonstrates the pattern.
4. Run `npm test` — coverage tests assert every `exampleKey` has a live demo branch.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for data model details and [CONTRIBUTING.md](CONTRIBUTING.md) for PR expectations.

---

## Brand notes

- Product accent is **teal** (OKLCH hue ~195), not purple/indigo.
- Purple / violet / fuchsia gradients appear only in **intentional AI-slop demos**.
- The Inter font is loaded solely so the **Inter-only vacuum** anti-pattern can be shown honestly; the app UI uses Geist.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm test` | Unit tests once |
| `npm run test:watch` | Vitest watch mode |
| `npm run lint` | ESLint |

---

## License

MIT — see [LICENSE](LICENSE).

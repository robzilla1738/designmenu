# Design Menu

A visual catalog of UI design elements — each with a **live example**, the **name designers use**, and **ready-to-use AI prompt language**.

Built for people who recognize a pattern on screen but don’t know what it’s called (or how to describe it to an AI).

**309 labeled elements** · **14 categories** · Light blue brand accent · Light / dark / system theme

---

## Why it exists

When you vibe-code or brief a designer (or an LLM), the bottleneck is often **vocabulary**:

- “That soft blurry panel over the gradient” → **glass / frosted surface**
- “The thin bar above the header about an outage” → **announcement bar**
- “That same purple AI landing page look” → **default purple gradient hero** (AI slop — avoid)

Design Menu names the pattern, shows it, and hands you prompt text you can copy.

---

## What’s inside

| Area | Count | What you get |
|------|------:|--------------|
| Typography → States | 254 | Core UI language: type, color, layout, controls, feedback, overlays, surfaces, media, states |
| **AI Slop** | 25 | Anti-patterns with **Avoid by prompting** tips (purple haze, Inter-only, fake metrics, glow spam…) |
| **Library Best Practices** | 30 | shadcn / Radix / Tailwind composition habits |

### Categories

Typography · Color · Spacing & Layout · Buttons · Form Controls · Navigation · Feedback · Overlays · Data Display · Surfaces · Media & Icons · States & Motion · **AI Slop** · **Library Best Practices**

### Standout sections

- **AI Slop** — common model defaults and how to steer past them. Purple gradients stay *here* as intentional bad examples; the product chrome uses light blue.
- **Library Best Practices** — compose primitives, semantic tokens, CVA variants, accessible overlays, controlled open state, portals, focus-visible, schema forms, compound APIs, and more.

### Search

Multi-word queries use **AND** matching across name, aliases, tags, ids, descriptions, and prompt tips. Results are **ranked** so name and alias hits beat deep body text. Try phrases like `outline button`, `floating action`, or `toast stack`.

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
| Styling | Tailwind CSS v4 · CSS variables (light blue primary) |
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
    search.ts          # Tokenized ranked catalog search / filter
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

- Product accent is **light blue** (OKLCH hue ~232), not purple/indigo.
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

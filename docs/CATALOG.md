# Catalog reference

Counts reflect the shipped catalog in `src/lib/catalog.ts` (**281 elements / 14 categories**).

## Core UI

| Category | Count | Focus |
|----------|------:|--------|
| Typography | 25 | Display, headings, lists, kbd, code, weights, tracking, measure, small caps, fluid type |
| Color | 17 | Primary scale, semantic, surfaces, chart colors, focus ring, contrast, disabled |
| Spacing & Layout | 20 | Scale, grid, density, scroll, full-bleed, app shell, safe area, sticky footers |
| Buttons | 18 | Primary → soft, FAB, split, toggle, pill, block, loading, sizes |
| Form Controls | 25 | Inputs, combobox, OTP, multi-select, phone, color, fieldset, checkbox group |
| Navigation | 19 | Navbar, rail, tree, footer, back link, underline tabs, overflow, skip link |
| Feedback | 18 | Alert, toast/snackbar, progress (bar + circular + top), announcement, validation summary |
| Overlays | 16 | Modal, sheet, lightbox, toast stack, coach mark, detail drawer, scrim |
| Data Display | 21 | Card, table, calendar, carousel, price, KPI, stars, comparison, sparkline |
| Surfaces | 16 | Elevation levels, glass, blur, tinted well, layered shadow, inset border |
| Media & Icons | 17 | Avatar + status, gallery, cover, illustration, object-fit, favicon set |
| States & Motion | 18 | Hover, focus, offline, empty vs zero, stale data, reduced motion |

## AI Slop (25)

All entries use `promptKind: "avoid"`. Demos are allowed to look deliberately bad.

Examples: default purple gradient hero · floating 3D blobs · interchangeable SaaS copy · 3-up icon grid · center-everything · rainbow badges · fake testimonials · emoji overload · low contrast · one huge radius · Inter-only vacuum · neon glow · fake metrics · hero badge stack · shadow soup · lorem product · glass everywhere · dark+cyan hacker kit · identical feature cards · gradient text · busy motion · AI badge spam · unsourced hero stats · confetti on every success · typewriter hero loop

## Library Best Practices (26)

Compose primitives · Variants / CVA · Semantic tokens · asChild · Accessible overlays · cn() merge · Class-strategy theme · Don’t restyle every instance · Tailwind layout · Own shadcn source · Form field triad · Icon sizing · data-state · Controlled open · Mobile-first · Size props · Skeleton match · Destructive confirm · Portals & stacking · Accessible names · CSS variables · Compose layout · Empty/error UI · Keyboard navigation · Focus-visible · Live region toasts

## Search

- **Tokens:** multi-word queries are split on spaces / commas / slashes; every token must match (AND).
- **Fields:** name, aliases, id, tags, description, prompt tips.
- **Ranking:** name and alias hits rank above deep description/prompt matches.
- **Category filter** combines with free-text query.

Examples:

- `button outline` → outline button (order-independent)  
- `floating action` → FAB  
- `purple gradient` → AI slop hero  
- `shadcn` → library practices  
- `facepile` → avatar group via tag/alias  

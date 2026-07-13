# Catalog reference

Counts reflect the shipped catalog in `src/lib/catalog.ts` (**309 elements / 14 categories**).

## Core UI

| Category | Count | Focus |
|----------|------:|--------|
| Typography | 26 | Display, headings, lists, kbd, code, weights, tracking, measure, mark/highlight, fluid type |
| Color | 19 | Primary scale, semantic, surfaces, chart colors, selection tint, dark-mode pairs, disabled |
| Spacing & Layout | 21 | Scale, grid, density, scroll, full-bleed, app shell, bento grid, sticky footers |
| Buttons | 19 | Primary → soft, FAB, split, toggle, pill, block, success, loading, sizes |
| Form Controls | 31 | Inputs, combobox, OTP, multi-select, tag input, password strength, floating label, date range |
| Navigation | 22 | Navbar, rail, tree, footer, hamburger, account menu, on-this-page TOC, overflow |
| Feedback | 20 | Alert, toast/snackbar, progress, cookie consent, typing indicator, validation summary |
| Overlays | 18 | Modal, sheet, lightbox, popconfirm, notification center, coach mark, detail drawer |
| Data Display | 25 | Card, table, expandable row, filter chips, kanban, bar chart, calendar, sparkline |
| Surfaces | 17 | Elevation levels, glass, blur, danger zone, layered shadow, inset border |
| Media & Icons | 17 | Avatar + status, gallery, cover, illustration, object-fit, favicon set |
| States & Motion | 19 | Hover, focus, offline, empty vs zero, empty search, stale data, reduced motion |

## AI Slop (25)

All entries use `promptKind: "avoid"`. Demos are allowed to look deliberately bad.

Examples: default purple gradient hero · floating 3D blobs · interchangeable SaaS copy · 3-up icon grid · center-everything · rainbow badges · fake testimonials · emoji overload · low contrast · one huge radius · Inter-only vacuum · neon glow · fake metrics · hero badge stack · shadow soup · lorem product · glass everywhere · dark+cyan hacker kit · identical feature cards · gradient text · busy motion · AI badge spam · unsourced hero stats · confetti on every success · typewriter hero loop

## Library Best Practices (30)

Compose primitives · Variants / CVA · Semantic tokens · asChild · Accessible overlays · cn() merge · Class-strategy theme · Don’t restyle every instance · Tailwind layout · Own shadcn source · Form field triad · Icon sizing · data-state · Controlled open · Mobile-first · Size props · Skeleton match · Destructive confirm · Portals & stacking · Accessible names · CSS variables · Compose layout · Empty/error UI · Keyboard navigation · Focus-visible · Live region toasts · Form schema wiring · Compound components · Polymorphic props · Empty + error pairing

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
- `password strength` → password strength meter  
- `notification center` → bell panel of alerts  

/**
 * Design Menu catalog — structured design-element data.
 * Keep pure (no React) so search/indexing can be unit-tested.
 */

export type CategoryId =
  | "typography"
  | "color"
  | "spacing-layout"
  | "buttons"
  | "forms"
  | "navigation"
  | "feedback"
  | "overlays"
  | "data-display"
  | "surfaces"
  | "media"
  | "states"
  | "ai-slop"
  | "library-practices";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  order: number;
}

export interface DesignElement {
  id: string;
  category: CategoryId;
  name: string;
  alsoKnownAs?: string[];
  description: string;
  /** Short reusable AI prompt language (or avoidance language for slop) */
  promptTip: string;
  /** "prompt" = how to use; "avoid" = how to steer AI away from the pattern */
  promptKind?: "prompt" | "avoid";
  /** Key used by the example renderer */
  exampleKey: string;
  tags?: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "typography",
    name: "Typography",
    description: "Type scales, weights, and text treatments",
    order: 1,
  },
  {
    id: "color",
    name: "Color",
    description: "Palettes, contrast, and semantic color roles",
    order: 2,
  },
  {
    id: "spacing-layout",
    name: "Spacing & Layout",
    description: "Whitespace, grids, stacks, and alignment",
    order: 3,
  },
  {
    id: "buttons",
    name: "Buttons",
    description: "Primary actions and button variants",
    order: 4,
  },
  {
    id: "forms",
    name: "Form Controls",
    description: "Inputs, selects, toggles, and field patterns",
    order: 5,
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Menus, tabs, breadcrumbs, and wayfinding",
    order: 6,
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "Alerts, toasts, loaders, and progress",
    order: 7,
  },
  {
    id: "overlays",
    name: "Overlays",
    description: "Modals, drawers, tooltips, and popovers",
    order: 8,
  },
  {
    id: "data-display",
    name: "Data Display",
    description: "Cards, tables, lists, and content blocks",
    order: 9,
  },
  {
    id: "surfaces",
    name: "Surfaces",
    description: "Shadows, borders, radius, and dividers",
    order: 10,
  },
  {
    id: "media",
    name: "Media & Icons",
    description: "Avatars, images, icons, and empty states",
    order: 11,
  },
  {
    id: "states",
    name: "States & Motion",
    description: "Hover, focus, disabled, and interactive states",
    order: 12,
  },
  {
    id: "ai-slop",
    name: "AI Slop",
    description: "Common AI design anti-patterns — and how to prompt past them",
    order: 13,
  },
  {
    id: "library-practices",
    name: "Library Best Practices",
    description: "Working well with shadcn, Radix, Tailwind, and design systems",
    order: 14,
  },
];

export const ELEMENTS: DesignElement[] = [
  // ── Typography ──────────────────────────────────────────
  {
    id: "display-heading",
    category: "typography",
    name: "Display heading",
    alsoKnownAs: ["Hero title", "Display type"],
    description:
      "Largest type size for marketing heroes and page openings—usually one per view.",
    promptTip:
      'Use a large display heading (e.g. text-5xl/6xl, tight tracking, bold weight) as the hero title: "Build something beautiful."',
    exampleKey: "display-heading",
    tags: ["type", "heading", "hero"],
  },
  {
    id: "page-title",
    category: "typography",
    name: "Page title (H1)",
    alsoKnownAs: ["Heading 1"],
    description: "Primary page heading—one H1 per page for hierarchy and accessibility.",
    promptTip:
      "Add a single H1 page title at the top of the content with bold weight and clear visual hierarchy above body text.",
    exampleKey: "page-title",
    tags: ["heading", "h1"],
  },
  {
    id: "section-heading",
    category: "typography",
    name: "Section heading (H2/H3)",
    description: "Subheadings that break content into scannable sections.",
    promptTip:
      "Use H2 for major sections and H3 for subsections; keep size steps consistent (e.g. text-2xl then text-xl).",
    exampleKey: "section-heading",
    tags: ["heading", "h2", "h3"],
  },
  {
    id: "body-text",
    category: "typography",
    name: "Body text",
    alsoKnownAs: ["Paragraph", "Body copy"],
    description: "Main reading text—comfortable line length and line-height.",
    promptTip:
      "Style body copy at ~16px with 1.5–1.7 line-height and max-width ~65ch for readability.",
    exampleKey: "body-text",
    tags: ["paragraph", "copy"],
  },
  {
    id: "caption",
    category: "typography",
    name: "Caption / helper text",
    alsoKnownAs: ["Microcopy", "Hint text"],
    description: "Small supporting text under images, fields, or metadata.",
    promptTip:
      "Add muted caption text (text-sm, lower contrast) under the field or image for secondary context.",
    exampleKey: "caption",
    tags: ["small", "helper"],
  },
  {
    id: "label-text",
    category: "typography",
    name: "Form label",
    description: "Text that names a control for users and assistive tech.",
    promptTip:
      "Use a clear form label above each input (text-sm font-medium), associated with the control via htmlFor.",
    exampleKey: "label-text",
    tags: ["form", "label"],
  },
  {
    id: "overline",
    category: "typography",
    name: "Overline / eyebrow",
    alsoKnownAs: ["Eyebrow text", "Kicker"],
    description: "Small uppercase label above a title for category or context.",
    promptTip:
      'Add an eyebrow/overline above the title: small uppercase tracking-widest text like "NEW FEATURE".',
    exampleKey: "overline",
    tags: ["eyebrow", "kicker"],
  },
  {
    id: "code-inline",
    category: "typography",
    name: "Inline code",
    description: "Monospace snippets inside a sentence.",
    promptTip:
      "Style inline code with mono font, subtle background, and rounded padding (e.g. px-1.5 py-0.5).",
    exampleKey: "code-inline",
    tags: ["code", "mono"],
  },
  {
    id: "blockquote",
    category: "typography",
    name: "Blockquote",
    description: "Quoted or highlighted pull text with a left border or indent.",
    promptTip:
      "Create a blockquote with a left accent border, slightly larger or italic text, and muted attribution.",
    exampleKey: "blockquote",
    tags: ["quote"],
  },
  {
    id: "link-text",
    category: "typography",
    name: "Text link",
    alsoKnownAs: ["Inline link", "Hyperlink"],
    description: "Clickable text in content—distinct from buttons.",
    promptTip:
      "Style inline links with accent color and underline on hover; keep button-like CTAs as real buttons.",
    exampleKey: "link-text",
    tags: ["link", "anchor"],
  },
  {
    id: "lead-text",
    category: "typography",
    name: "Lead / intro text",
    alsoKnownAs: ["Deck", "Lede", "Intro paragraph"],
    description:
      "Slightly larger supporting paragraph under a title that sets context before body copy.",
    promptTip:
      "Add a lead paragraph under the H1 at text-lg/xl with relaxed leading and muted or slightly softer color than body.",
    exampleKey: "lead-text",
    tags: ["type", "intro", "lede"],
  },
  {
    id: "text-truncation",
    category: "typography",
    name: "Text truncation",
    alsoKnownAs: ["Ellipsis", "Line clamp"],
    description:
      "Single- or multi-line clamp with ellipsis when content overflows a fixed width.",
    promptTip:
      "Truncate overflowing titles with truncate (1 line) or line-clamp-2; ensure full text is available via title attribute or expand.",
    exampleKey: "text-truncation",
    tags: ["ellipsis", "clamp", "overflow"],
  },
  {
    id: "tabular-nums",
    category: "typography",
    name: "Tabular numbers",
    alsoKnownAs: ["Monospaced digits", "Table numerals"],
    description:
      "Fixed-width digits so columns of numbers align cleanly in tables and stats.",
    promptTip:
      "Use font-variant-numeric: tabular-nums (or tabular-nums utility) on prices, stats, and table columns so digits align.",
    exampleKey: "tabular-nums",
    tags: ["numbers", "tables", "stats"],
  },
  {
    id: "unordered-list",
    category: "typography",
    name: "Bulleted list",
    alsoKnownAs: ["Unordered list", "UL"],
    description: "Vertical list of items with bullets for scannable content.",
    promptTip:
      "Render a bulleted list with consistent marker indent, comfortable line-height, and gap between items (not dense walls of text).",
    exampleKey: "unordered-list",
    tags: ["list", "ul", "bullets"],
  },

  // ── Color ───────────────────────────────────────────────
  {
    id: "primary-color",
    category: "color",
    name: "Primary brand color",
    description: "Main accent used for primary actions and key highlights.",
    promptTip:
      "Define a primary brand color for CTAs and key accents; use it sparingly so it stays attention-grabbing.",
    exampleKey: "primary-color",
    tags: ["brand", "accent"],
  },
  {
    id: "semantic-colors",
    category: "color",
    name: "Semantic colors",
    alsoKnownAs: ["Status colors", "Intent colors"],
    description: "Success, warning, error, and info colors with meaning.",
    promptTip:
      "Use semantic colors: green success, amber warning, red error, blue info—consistent across alerts and badges.",
    exampleKey: "semantic-colors",
    tags: ["success", "error", "warning"],
  },
  {
    id: "neutral-scale",
    category: "color",
    name: "Neutral gray scale",
    description: "Grays for text, borders, and backgrounds.",
    promptTip:
      "Build a neutral scale (50–950) for surfaces, borders, and text hierarchy instead of pure black/white only.",
    exampleKey: "neutral-scale",
    tags: ["gray", "neutral"],
  },
  {
    id: "foreground-background",
    category: "color",
    name: "Foreground / background",
    description: "Main text-on-surface pairing for readable contrast.",
    promptTip:
      "Pair high-contrast foreground text on background surfaces; support light and dark with semantic tokens.",
    exampleKey: "foreground-background",
    tags: ["contrast", "tokens"],
  },
  {
    id: "muted-text",
    category: "color",
    name: "Muted / secondary text",
    description: "Lower-emphasis text for metadata and supporting copy.",
    promptTip:
      "Use muted secondary text color for timestamps, hints, and less important metadata—not for primary content.",
    exampleKey: "muted-text",
    tags: ["secondary", "muted"],
  },
  {
    id: "color-swatches",
    category: "color",
    name: "Color swatches",
    description: "Visual chips showing a palette for designers and prompts.",
    promptTip:
      "Show a palette as rounded color swatches with hex labels in a horizontal row.",
    exampleKey: "color-swatches",
    tags: ["palette", "swatch"],
  },
  {
    id: "accent-color",
    category: "color",
    name: "Accent color",
    alsoKnownAs: ["Secondary accent", "Highlight color"],
    description:
      "Supporting brand hue for selected rows, chips, and soft highlights—not every CTA.",
    promptTip:
      "Define an accent token for soft highlights (selected rows, chips, focus tints) separate from the primary CTA color so actions stay clear.",
    exampleKey: "accent-color",
    tags: ["accent", "highlight", "tokens"],
  },
  {
    id: "border-color",
    category: "color",
    name: "Border color",
    alsoKnownAs: ["Hairline", "Stroke color"],
    description: "Subtle stroke color for cards, inputs, and dividers.",
    promptTip:
      "Use a dedicated border color token (low-chroma, mid lightness) for cards and inputs; avoid pure black borders on light UIs.",
    exampleKey: "border-color",
    tags: ["border", "stroke", "tokens"],
  },
  {
    id: "opacity-scale",
    category: "color",
    name: "Opacity / alpha scale",
    alsoKnownAs: ["Alpha steps", "Transparent overlays"],
    description:
      "Consistent transparency steps for overlays, disabled UI, and scrims.",
    promptTip:
      "Use a short opacity scale (e.g. 5/10/20/40/60/80%) for scrims, disabled fills, and overlays instead of one-off rgba values.",
    exampleKey: "opacity-scale",
    tags: ["opacity", "alpha", "overlay"],
  },
  {
    id: "inverse-colors",
    category: "color",
    name: "Inverse colors",
    alsoKnownAs: ["On-primary", "Inverted surface"],
    description:
      "Light text on dark/brand surfaces (and the reverse) for badges, toasts, and heroes.",
    promptTip:
      "Provide inverse pairs (e.g. primary-foreground on primary) so text on solid brand fills always meets contrast.",
    exampleKey: "inverse-colors",
    tags: ["inverse", "contrast", "on-color"],
  },

  // ── Spacing & Layout ────────────────────────────────────
  {
    id: "spacing-scale",
    category: "spacing-layout",
    name: "Spacing scale",
    alsoKnownAs: ["Space tokens", "Padding scale"],
    description: "Consistent gaps (4/8/12/16…) instead of arbitrary pixels.",
    promptTip:
      "Use a consistent spacing scale (4px base: 4, 8, 12, 16, 24, 32, 48) for padding and gaps throughout.",
    exampleKey: "spacing-scale",
    tags: ["gap", "padding"],
  },
  {
    id: "stack-layout",
    category: "spacing-layout",
    name: "Vertical stack",
    alsoKnownAs: ["VStack", "Column stack"],
    description: "Elements stacked vertically with even gaps.",
    promptTip:
      "Lay out items in a vertical flex/stack column with consistent gap (e.g. gap-4).",
    exampleKey: "stack-layout",
    tags: ["flex", "column"],
  },
  {
    id: "inline-cluster",
    category: "spacing-layout",
    name: "Horizontal cluster",
    alsoKnownAs: ["HStack", "Inline group"],
    description: "Items in a row that wrap when needed.",
    promptTip:
      "Group related controls in a horizontal flex row with gap, wrapping on small screens.",
    exampleKey: "inline-cluster",
    tags: ["flex", "row"],
  },
  {
    id: "grid-layout",
    category: "spacing-layout",
    name: "Responsive grid",
    description: "Multi-column grid that adapts to viewport width.",
    promptTip:
      "Use a responsive CSS grid: 1 col mobile, 2 tablet, 3 desktop with equal gap.",
    exampleKey: "grid-layout",
    tags: ["grid", "responsive"],
  },
  {
    id: "container",
    category: "spacing-layout",
    name: "Content container",
    alsoKnownAs: ["Max-width wrapper", "Page container"],
    description: "Centered max-width shell for readable page content.",
    promptTip:
      "Wrap page content in a centered container with max-w-5xl/6xl and horizontal padding.",
    exampleKey: "container",
    tags: ["max-width", "wrapper"],
  },
  {
    id: "whitespace",
    category: "spacing-layout",
    name: "Whitespace / breathing room",
    alsoKnownAs: ["Negative space"],
    description: "Empty space that separates groups and reduces clutter.",
    promptTip:
      "Increase whitespace between sections (py-12+) so the layout feels calm and scannable—not cramped.",
    exampleKey: "whitespace",
    tags: ["space", "air"],
  },
  {
    id: "alignment",
    category: "spacing-layout",
    name: "Alignment",
    description: "Left, center, or right alignment of content blocks.",
    promptTip:
      "Align text and actions consistently (e.g. left-aligned body, center for empty states, right for table actions).",
    exampleKey: "alignment",
    tags: ["align", "layout"],
  },
  {
    id: "aspect-ratio",
    category: "spacing-layout",
    name: "Aspect ratio box",
    description: "Fixed ratio frames for media (16:9, 1:1, 4:3).",
    promptTip:
      "Reserve media slots with aspect-ratio (aspect-video, aspect-square) so layout doesn't jump when images load.",
    exampleKey: "aspect-ratio",
    tags: ["ratio", "media"],
  },
  {
    id: "z-index-layers",
    category: "spacing-layout",
    name: "Z-index layers",
    alsoKnownAs: ["Stacking order", "Elevation layers"],
    description:
      "Named stacking levels so dropdowns, sticky bars, and modals never fight randomly.",
    promptTip:
      "Define a small z-index scale (base, sticky, dropdown, modal, toast) and never invent one-off z-[9999] values.",
    exampleKey: "z-index-layers",
    tags: ["z-index", "stacking", "layers"],
  },
  {
    id: "sticky-position",
    category: "spacing-layout",
    name: "Sticky position",
    alsoKnownAs: ["Sticky header", "Pinned bar"],
    description:
      "Element sticks within its scroll container (headers, table columns, side notes).",
    promptTip:
      "Use position sticky with a top offset for toolbars or section labels that should pin while content scrolls beneath.",
    exampleKey: "sticky-position",
    tags: ["sticky", "scroll", "header"],
  },
  {
    id: "split-layout",
    category: "spacing-layout",
    name: "Split layout",
    alsoKnownAs: ["Two-column", "Side-by-side", "Master-detail"],
    description:
      "Two regions side by side (form + preview, list + detail) with a shared gap.",
    promptTip:
      "Build a two-column split (e.g. 1fr 1fr or 320px 1fr) with consistent gap; stack to one column on small screens.",
    exampleKey: "split-layout",
    tags: ["columns", "split", "responsive"],
  },

  // ── Buttons ─────────────────────────────────────────────
  {
    id: "primary-button",
    category: "buttons",
    name: "Primary button",
    alsoKnownAs: ["CTA button","Solid button","Main CTA"],
    description: "Highest-emphasis action—filled brand color.",
    promptTip:
      "Make the primary CTA a solid filled button with brand background, white text, and clear hover state.",
    exampleKey: "primary-button",
    tags: ["cta","action","submit"],
  },
  {
    id: "secondary-button",
    category: "buttons",
    name: "Secondary button",
    alsoKnownAs: ["Outline button"],
    description: "Medium emphasis—outline or soft fill next to primary.",
    promptTip:
      "Add a secondary outline button beside the primary for less important actions (e.g. Cancel).",
    exampleKey: "secondary-button",
    tags: ["outline"],
  },
  {
    id: "ghost-button",
    category: "buttons",
    name: "Ghost / tertiary button",
    alsoKnownAs: ["Text button", "Quiet button"],
    description: "Lowest emphasis—no border until hover.",
    promptTip:
      "Use a ghost/tertiary button (transparent, text only, subtle hover bg) for low-priority actions.",
    exampleKey: "ghost-button",
    tags: ["tertiary", "quiet"],
  },
  {
    id: "destructive-button",
    category: "buttons",
    name: "Destructive button",
    alsoKnownAs: ["Danger button"],
    description: "Dangerous actions like delete—red emphasis.",
    promptTip:
      "Style destructive actions (Delete, Remove) with red/danger styling and often require confirmation.",
    exampleKey: "destructive-button",
    tags: ["danger", "delete"],
  },
  {
    id: "icon-button",
    category: "buttons",
    name: "Icon button",
    description: "Square/round control with only an icon.",
    promptTip:
      "Create an icon-only button (square, equal padding) with an accessible aria-label for the action.",
    exampleKey: "icon-button",
    tags: ["icon", "compact"],
  },
  {
    id: "button-group",
    category: "buttons",
    name: "Button group",
    alsoKnownAs: ["Segmented control (related)"],
    description: "Related buttons joined or tightly spaced.",
    promptTip:
      "Group related actions in a button group with shared borders or tight gap for a single unit.",
    exampleKey: "button-group",
    tags: ["group", "segmented"],
  },
  {
    id: "loading-button",
    category: "buttons",
    name: "Loading button",
    description: "Button showing spinner while an action runs.",
    promptTip:
      "When submitting, disable the button and show a small spinner + loading label to prevent double submits.",
    exampleKey: "loading-button",
    tags: ["spinner", "async"],
  },
  {
    id: "button-sizes",
    category: "buttons",
    name: "Button sizes",
    description: "Small, medium, large sizing for hierarchy.",
    promptTip:
      "Offer sm/md/lg button sizes with consistent padding and type scale across variants.",
    exampleKey: "button-sizes",
    tags: ["size", "scale"],
  },
  {
    id: "outline-button",
    category: "buttons",
    name: "Outline button",
    alsoKnownAs: ["Bordered button"],
    description: "Medium-emphasis action with a stroke and transparent fill.",
    promptTip:
      "Use an outline button (1px border, transparent fill) for secondary actions that still need clear hit targets.",
    exampleKey: "outline-button",
    tags: ["outline", "secondary"],
  },
  {
    id: "link-button",
    category: "buttons",
    name: "Link button",
    alsoKnownAs: ["Text button", "Button as link"],
    description: "Button-role control styled like a text link for low emphasis.",
    promptTip:
      "Use a link-variant button for tertiary actions (Cancel as text, Learn more) when you need button semantics without chrome.",
    exampleKey: "link-button",
    tags: ["link", "tertiary"],
  },
  {
    id: "button-with-icon",
    category: "buttons",
    name: "Button with icon",
    alsoKnownAs: ["Icon + label button"],
    description: "Label paired with a leading or trailing icon for faster recognition.",
    promptTip:
      "Pair a short label with a leading icon inside the button (icon size ~1em, gap-2); keep the label for accessibility.",
    exampleKey: "button-with-icon",
    tags: ["icon", "label", "cta"],
  },

  // ── Forms ───────────────────────────────────────────────
  {
    id: "text-input",
    category: "forms",
    name: "Text input",
    alsoKnownAs: ["Text field"],
    description: "Single-line text entry with border and focus ring.",
    promptTip:
      "Build a text input with label, border, focus ring, placeholder, and comfortable height (h-10/h-11).",
    exampleKey: "text-input",
    tags: ["input", "field"],
  },
  {
    id: "textarea",
    category: "forms",
    name: "Textarea",
    description: "Multi-line text entry for longer content.",
    promptTip:
      "Use a multi-line textarea with min-height, resize-y optional, and matching input border styles.",
    exampleKey: "textarea",
    tags: ["multiline"],
  },
  {
    id: "select",
    category: "forms",
    name: "Select / dropdown",
    alsoKnownAs: ["Dropdown menu (form)"],
    description: "Choose one option from a list.",
    promptTip:
      "Add a select dropdown with a clear label, chevron affordance, and native or custom options list.",
    exampleKey: "select",
    tags: ["dropdown", "choice"],
  },
  {
    id: "checkbox",
    category: "forms",
    name: "Checkbox",
    description: "Binary multi-select options.",
    promptTip:
      "Style checkboxes with label to the right; support checked, unchecked, and indeterminate if needed.",
    exampleKey: "checkbox",
    tags: ["boolean", "multi"],
  },
  {
    id: "radio-group",
    category: "forms",
    name: "Radio group",
    description: "Mutually exclusive single choice.",
    promptTip:
      "Use radio buttons in a group for exclusive single selection with a fieldset legend.",
    exampleKey: "radio-group",
    tags: ["choice", "exclusive"],
  },
  {
    id: "switch-toggle",
    category: "forms",
    name: "Switch / toggle",
    alsoKnownAs: ["Toggle switch"],
    description: "On/off control that takes effect immediately.",
    promptTip:
      "Add a toggle switch for instant on/off settings (not form submit)—pill track with sliding thumb.",
    exampleKey: "switch-toggle",
    tags: ["toggle", "settings"],
  },
  {
    id: "input-with-addon",
    category: "forms",
    name: "Input with addon",
    alsoKnownAs: ["Input group", "Affix input"],
    description: "Field with prefix/suffix (icon, unit, or button).",
    promptTip:
      "Attach a prefix icon or suffix unit/button to the input in a connected input group.",
    exampleKey: "input-with-addon",
    tags: ["prefix", "suffix"],
  },
  {
    id: "form-validation",
    category: "forms",
    name: "Validation error state",
    description: "Error styling and message when input fails validation.",
    promptTip:
      "Show invalid fields with red border, error icon, and helper error message below the input.",
    exampleKey: "form-validation",
    tags: ["error", "validation"],
  },
  {
    id: "slider",
    category: "forms",
    name: "Slider / range",
    description: "Drag control to pick a value on a continuum.",
    promptTip:
      "Use a range slider for continuous values with a visible track, thumb, and optional value label.",
    exampleKey: "slider",
    tags: ["range", "continuous"],
  },
  {
    id: "file-upload",
    category: "forms",
    name: "File upload dropzone",
    alsoKnownAs: ["Drop zone", "File picker"],
    description: "Area to drag-and-drop or browse for files.",
    promptTip:
      "Create a dashed-border dropzone with upload icon, helper text, and browse link for file uploads.",
    exampleKey: "file-upload",
    tags: ["upload", "file"],
  },
  {
    id: "search-input",
    category: "forms",
    name: "Search field",
    alsoKnownAs: ["Search input", "Filter field"],
    description: "Input with search affordance for query and filter UIs.",
    promptTip:
      "Build a search field with a leading search icon, placeholder like “Search…”, and optional clear control.",
    exampleKey: "search-input",
    tags: ["search", "filter", "input"],
  },
  {
    id: "password-input",
    category: "forms",
    name: "Password field",
    alsoKnownAs: ["Secret input"],
    description: "Masked text entry for secrets, often with show/hide.",
    promptTip:
      "Use a password input with type=password, label, and a show/hide toggle; never prefill real secrets in demos.",
    exampleKey: "password-input",
    tags: ["password", "security", "input"],
  },
  {
    id: "number-input",
    category: "forms",
    name: "Number input",
    alsoKnownAs: ["Numeric field", "Stepper input"],
    description: "Numeric entry with optional steppers for counts and quantities.",
    promptTip:
      "Provide a number input with min/max, step, and either native spinners or +/- steppers for quantities.",
    exampleKey: "number-input",
    tags: ["number", "quantity", "input"],
  },
  {
    id: "date-input",
    category: "forms",
    name: "Date field",
    alsoKnownAs: ["Date picker input", "Calendar field"],
    description: "Control for selecting a calendar date.",
    promptTip:
      "Add a date field with a clear label and calendar affordance (native date input or picker trigger).",
    exampleKey: "date-input",
    tags: ["date", "calendar", "input"],
  },

  // ── Navigation ──────────────────────────────────────────
  {
    id: "navbar",
    category: "navigation",
    name: "Navbar / top bar",
    alsoKnownAs: ["App bar", "Header nav"],
    description: "Horizontal top navigation with logo and links.",
    promptTip:
      "Build a top navbar with logo left, nav links center/right, and optional CTA; sticky on scroll.",
    exampleKey: "navbar",
    tags: ["header", "top"],
  },
  {
    id: "sidebar",
    category: "navigation",
    name: "Sidebar navigation",
    alsoKnownAs: ["Side nav", "App shell nav"],
    description: "Vertical nav panel for app sections.",
    promptTip:
      "Add a left sidebar nav with section labels, active item highlight, and collapsible groups if needed.",
    exampleKey: "sidebar",
    tags: ["side", "app"],
  },
  {
    id: "tabs",
    category: "navigation",
    name: "Tabs",
    description: "Switch between peer views in the same context.",
    promptTip:
      "Use horizontal tabs with active underline or pill; keep related content panels below.",
    exampleKey: "tabs",
    tags: ["tablist", "views"],
  },
  {
    id: "breadcrumbs",
    category: "navigation",
    name: "Breadcrumbs",
    alsoKnownAs: ["Path trail","Crumb trail"],
    description: "Trail showing hierarchy and path back up.",
    promptTip:
      "Show breadcrumbs as Home / Section / Page with separators and the current page as non-link text.",
    exampleKey: "breadcrumbs",
    tags: ["path", "hierarchy"],
  },
  {
    id: "pagination",
    category: "navigation",
    name: "Pagination",
    description: "Controls to move between pages of results.",
    promptTip:
      "Add pagination with prev/next and numbered pages; highlight the current page.",
    exampleKey: "pagination",
    tags: ["pages", "results"],
  },
  {
    id: "stepper",
    category: "navigation",
    name: "Stepper / wizard steps",
    alsoKnownAs: ["Progress steps", "Wizard"],
    description: "Multi-step flow indicator.",
    promptTip:
      "Show a horizontal stepper with numbered steps, completed checkmarks, and the active step emphasized.",
    exampleKey: "stepper",
    tags: ["wizard", "steps"],
  },
  {
    id: "bottom-nav",
    category: "navigation",
    name: "Bottom navigation",
    alsoKnownAs: ["Tab bar (mobile)"],
    description: "Mobile primary destinations fixed to the bottom.",
    promptTip:
      "For mobile, use a bottom tab bar with 3–5 icons + labels and a clear active state.",
    exampleKey: "bottom-nav",
    tags: ["mobile", "tab-bar"],
  },
  {
    id: "mega-menu",
    category: "navigation",
    name: "Mega menu",
    description: "Large dropdown with multi-column link groups.",
    promptTip:
      "Design a mega menu: full-width panel under the nav with columns of categorized links.",
    exampleKey: "mega-menu",
    tags: ["dropdown", "desktop"],
  },
  {
    id: "segmented-control",
    category: "navigation",
    name: "Segmented control",
    alsoKnownAs: ["Segmented tabs","iOS segments","iOS segment","Toggle group"],
    description: "Compact mutually exclusive choices in a single control.",
    promptTip:
      "Use a segmented control for 2–4 peer options (Day/Week/Month) with one selected fill and equal-width segments.",
    exampleKey: "segmented-control",
    tags: ["segments","toggle","filter","segment"],
  },
  {
    id: "skip-link",
    category: "navigation",
    name: "Skip link",
    alsoKnownAs: ["Skip to content","Skip navigation"],
    description: "Keyboard-first link that jumps past chrome to main content.",
    promptTip:
      "Add a skip-to-main-content link that is focusable first and becomes visible on keyboard focus.",
    exampleKey: "skip-link",
    tags: ["a11y", "keyboard", "skip"],
  },
  {
    id: "active-nav-item",
    category: "navigation",
    name: "Active nav item",
    alsoKnownAs: ["Current page indicator", "Selected nav"],
    description: "Visual treatment showing which destination the user is on.",
    promptTip:
      "Highlight the current nav item with stronger weight, accent color, or left bar; set aria-current=page.",
    exampleKey: "active-nav-item",
    tags: ["active", "current", "nav"],
  },

  // ── Feedback ────────────────────────────────────────────
  {
    id: "alert-banner",
    category: "feedback",
    name: "Alert / banner",
    alsoKnownAs: ["Inline alert", "Callout"],
    description: "In-page message for important status info.",
    promptTip:
      "Show an inline alert banner with icon, title, body, and optional dismiss—color-coded by severity.",
    exampleKey: "alert-banner",
    tags: ["callout", "banner"],
  },
  {
    id: "toast",
    category: "feedback",
    name: "Toast / snackbar",
    alsoKnownAs: ["Snackbar", "Notification toast"],
    description: "Temporary floating message after an action.",
    promptTip:
      "After save, show a toast/snackbar in a corner with short message and optional undo; auto-dismiss.",
    exampleKey: "toast",
    tags: ["snackbar", "notification"],
  },
  {
    id: "spinner",
    category: "feedback",
    name: "Spinner / loading indicator",
    description: "Indeterminate loading for short waits.",
    promptTip:
      "Use a circular spinner for indeterminate loading; center it in the content area with optional label.",
    exampleKey: "spinner",
    tags: ["loading", "wait"],
  },
  {
    id: "skeleton",
    category: "feedback",
    name: "Skeleton loader",
    alsoKnownAs: ["Content placeholder","Shimmer loader"],
    description: "Pulsing shapes matching content layout while loading.",
    promptTip:
      "Replace loading content with skeleton placeholders (gray rounded bars) that match the final layout.",
    exampleKey: "skeleton",
    tags: ["placeholder", "loading"],
  },
  {
    id: "progress-bar",
    category: "feedback",
    name: "Progress bar",
    alsoKnownAs: ["Linear progress","Loading bar"],
    description: "Determinate progress for known completion %.",
    promptTip:
      "Show a horizontal progress bar with filled track for determinate progress (e.g. upload 60%).",
    exampleKey: "progress-bar",
    tags: ["progress", "percent"],
  },
  {
    id: "empty-state",
    category: "feedback",
    name: "Empty state",
    alsoKnownAs: ["Blank slate","No data"],
    description: "Friendly screen when there's no data yet.",
    promptTip:
      "Design an empty state with illustration/icon, short explanation, and a primary action to create first item.",
    exampleKey: "empty-state",
    tags: ["zero-data","onboarding","blank"],
  },
  {
    id: "badge-notification",
    category: "feedback",
    name: "Notification badge",
    alsoKnownAs: ["Count badge", "Dot badge"],
    description: "Small count or dot on icons for unread items.",
    promptTip:
      "Attach a red notification badge (count or dot) to the top-right of an icon for unread alerts.",
    exampleKey: "badge-notification",
    tags: ["badge", "count"],
  },
  {
    id: "status-dot",
    category: "feedback",
    name: "Status indicator",
    alsoKnownAs: ["Status dot", "Presence indicator"],
    description: "Colored dot signaling online, busy, offline, or health.",
    promptTip:
      "Show a small status dot (green online, amber away, red busy/error) next to avatars or service names.",
    exampleKey: "status-dot",
    tags: ["status", "presence", "dot"],
  },
  {
    id: "inline-callout",
    category: "feedback",
    name: "Inline callout",
    alsoKnownAs: ["Info callout", "Note box"],
    description: "Soft in-flow note for tips or secondary guidance (not a full alert).",
    promptTip:
      "Add an inline callout with a soft accent background, short title, and tip body for non-urgent guidance.",
    exampleKey: "inline-callout",
    tags: ["callout", "tip", "note"],
  },
  {
    id: "success-banner",
    category: "feedback",
    name: "Success confirmation",
    alsoKnownAs: ["Success banner", "Save confirmation"],
    description: "Positive confirmation after a completed action.",
    promptTip:
      "After a successful save, show a green success banner or check + “Saved” message; allow dismiss.",
    exampleKey: "success-banner",
    tags: ["success", "confirmation"],
  },

  // ── Overlays ────────────────────────────────────────────
  {
    id: "modal",
    category: "overlays",
    name: "Modal / dialog",
    alsoKnownAs: ["Dialog","Lightbox (related)","Dialog window","Popup modal"],
    description: "Centered overlay requiring focus before continuing.",
    promptTip:
      "Open a centered modal dialog with backdrop, title, body, and primary/secondary actions; trap focus.",
    exampleKey: "modal",
    tags: ["dialog", "overlay"],
  },
  {
    id: "drawer",
    category: "overlays",
    name: "Drawer / sheet",
    alsoKnownAs: ["Side panel", "Slide-over"],
    description: "Panel that slides in from an edge.",
    promptTip:
      "Use a side drawer/slide-over panel for secondary flows (filters, details) without leaving the page.",
    exampleKey: "drawer",
    tags: ["sheet","slide-over","slideover"],
  },
  {
    id: "tooltip",
    category: "overlays",
    name: "Tooltip",
    description: "Small hover/focus hint near a control.",
    promptTip:
      "Add a tooltip on hover/focus with short helper text; dark small rounded bubble with arrow optional.",
    exampleKey: "tooltip",
    tags: ["hint", "hover"],
  },
  {
    id: "popover",
    category: "overlays",
    name: "Popover",
    description: "Rich floating panel with interactive content.",
    promptTip:
      "Show a popover panel with richer content (form fields, lists) anchored to a trigger button.",
    exampleKey: "popover",
    tags: ["floating", "panel"],
  },
  {
    id: "dropdown-menu",
    category: "overlays",
    name: "Dropdown menu",
    alsoKnownAs: ["Context menu (related)", "Action menu"],
    description: "Menu of actions triggered by a button.",
    promptTip:
      "Build a dropdown action menu: trigger button, list of menu items, keyboard navigable, closes on select.",
    exampleKey: "dropdown-menu",
    tags: ["menu", "actions"],
  },
  {
    id: "command-palette",
    category: "overlays",
    name: "Command palette",
    alsoKnownAs: ["Cmd+K menu", "Spotlight search"],
    description: "Keyboard-first search for app actions.",
    promptTip:
      "Add a Cmd+K command palette: centered search overlay listing actions and pages to jump to.",
    exampleKey: "command-palette",
    tags: ["search","keyboard","cmdk","shortcut"],
  },
  {
    id: "alert-dialog",
    category: "overlays",
    name: "Alert / confirm dialog",
    alsoKnownAs: ["Confirmation dialog", "Destructive confirm"],
    description: "Modal that asks the user to confirm a consequential action.",
    promptTip:
      "For delete/overwrite, open an alert dialog with clear consequence copy, Cancel, and a destructive Confirm.",
    exampleKey: "alert-dialog",
    tags: ["confirm", "destructive", "dialog"],
  },
  {
    id: "bottom-sheet",
    category: "overlays",
    name: "Bottom sheet",
    alsoKnownAs: ["Mobile sheet", "Action sheet (related)"],
    description: "Panel that rises from the bottom edge—common on mobile.",
    promptTip:
      "Use a bottom sheet for mobile filters or actions: drag handle, title, content, and scrim dismiss.",
    exampleKey: "bottom-sheet",
    tags: ["sheet", "mobile", "drawer"],
  },
  {
    id: "context-menu",
    category: "overlays",
    name: "Context menu",
    alsoKnownAs: ["Right-click menu"],
    description: "Action menu anchored to a pointer or long-press target.",
    promptTip:
      "Provide a context menu on right-click/long-press with dense action rows; keep labels short and group with separators.",
    exampleKey: "context-menu",
    tags: ["menu", "right-click", "actions"],
  },
  {
    id: "hover-card",
    category: "overlays",
    name: "Hover card",
    alsoKnownAs: ["Preview card", "Rich tooltip"],
    description: "Floating preview that appears on hover/focus with richer content than a tooltip.",
    promptTip:
      "Show a hover card on avatar/link hover with name, meta, and optional action—delay open slightly to avoid flicker.",
    exampleKey: "hover-card",
    tags: ["preview", "hover", "card"],
  },

  // ── Data Display ────────────────────────────────────────
  {
    id: "card",
    category: "data-display",
    name: "Card",
    description: "Contained surface grouping related content.",
    promptTip:
      "Use a card with subtle border/shadow, padding, title, body, and optional footer actions.",
    exampleKey: "card",
    tags: ["surface", "group"],
  },
  {
    id: "table",
    category: "data-display",
    name: "Data table",
    description: "Rows and columns for structured data.",
    promptTip:
      "Build a clean data table with header row, zebra or hover rows, and aligned columns.",
    exampleKey: "table",
    tags: ["grid", "rows"],
  },
  {
    id: "list",
    category: "data-display",
    name: "List",
    alsoKnownAs: ["List group"],
    description: "Vertical list of similar items.",
    promptTip:
      "Render a list of items with dividers, optional leading icon/avatar, title, and trailing meta.",
    exampleKey: "list",
    tags: ["items", "rows"],
  },
  {
    id: "stat-card",
    category: "data-display",
    name: "Stat / metric card",
    alsoKnownAs: ["KPI card", "Metric tile"],
    description: "Big number with label for dashboards.",
    promptTip:
      "Show a KPI stat card: large metric number, short label, and optional trend delta (↑ 12%).",
    exampleKey: "stat-card",
    tags: ["kpi","dashboard","metric"],
  },
  {
    id: "chip-tag",
    category: "data-display",
    name: "Chip / tag",
    alsoKnownAs: ["Pill", "Badge (content)"],
    description: "Compact labels for categories or filters.",
    promptTip:
      "Use chips/tags as rounded pills for categories; optional dismiss X for filter chips.",
    exampleKey: "chip-tag",
    tags: ["pill", "tag"],
  },
  {
    id: "avatar-group",
    category: "data-display",
    name: "Avatar group",
    alsoKnownAs: ["Facepile","User stack"],
    description: "Overlapping avatars for multiple people.",
    promptTip:
      "Show an avatar group/facepile with overlapping circular images and a +N overflow count.",
    exampleKey: "avatar-group",
    tags: ["people","facepile","users"],
  },
  {
    id: "description-list",
    category: "data-display",
    name: "Description list",
    alsoKnownAs: ["Key-value list", "Definition list"],
    description: "Label–value pairs for details views.",
    promptTip:
      "Display details as a description list of label/value pairs in two columns on desktop.",
    exampleKey: "description-list",
    tags: ["key-value", "details"],
  },
  {
    id: "accordion",
    category: "data-display",
    name: "Accordion / disclosure",
    alsoKnownAs: ["Collapsible", "Expandable"],
    description: "Expand/collapse sections to hide detail.",
    promptTip:
      "Use an accordion with chevron toggles so users expand one FAQ/section at a time.",
    exampleKey: "accordion",
    tags: ["collapse", "faq"],
  },
  {
    id: "timeline",
    category: "data-display",
    name: "Timeline",
    alsoKnownAs: ["Activity feed", "Event history"],
    description: "Chronological events connected by a vertical line.",
    promptTip:
      "Show a vertical timeline with dots, connector line, timestamps, and short event titles for activity history.",
    exampleKey: "timeline",
    tags: ["history", "events", "chronology"],
  },
  {
    id: "tree-list",
    category: "data-display",
    name: "Tree list",
    alsoKnownAs: ["Nested list", "File tree"],
    description: "Hierarchical nested items with expand/collapse.",
    promptTip:
      "Render a tree of nested items with indent levels and expand chevrons for folders/sections.",
    exampleKey: "tree-list",
    tags: ["tree", "hierarchy", "nested"],
  },
  {
    id: "toolbar",
    category: "data-display",
    name: "Toolbar",
    alsoKnownAs: ["Action bar", "Tool strip"],
    description: "Horizontal strip of related actions above content.",
    promptTip:
      "Place a compact toolbar above a table or editor with icon buttons, separators, and optional overflow menu.",
    exampleKey: "toolbar",
    tags: ["actions", "tools", "bar"],
  },

  // ── Surfaces ────────────────────────────────────────────
  {
    id: "elevation-shadow",
    category: "surfaces",
    name: "Elevation / shadow",
    alsoKnownAs: ["Drop shadow", "Depth"],
    description: "Shadows that suggest layering and depth.",
    promptTip:
      "Use a shadow scale (sm/md/lg) for elevation—cards low, modals higher—consistent across the UI.",
    exampleKey: "elevation-shadow",
    tags: ["shadow", "depth"],
  },
  {
    id: "border",
    category: "surfaces",
    name: "Border",
    description: "Strokes defining edges of components.",
    promptTip:
      "Use subtle 1px borders (border-border/neutral-200) to separate surfaces without heavy boxes.",
    exampleKey: "border",
    tags: ["stroke", "outline"],
  },
  {
    id: "border-radius",
    category: "surfaces",
    name: "Border radius",
    alsoKnownAs: ["Corner radius", "Rounding"],
    description: "Rounded corners that set product personality.",
    promptTip:
      "Apply a consistent radius scale (sm 4px, md 8px, lg 12px, full pill) across buttons, cards, and inputs.",
    exampleKey: "border-radius",
    tags: ["rounded", "corners"],
  },
  {
    id: "divider",
    category: "surfaces",
    name: "Divider / separator",
    alsoKnownAs: ["Rule", "Hairline"],
    description: "Horizontal or vertical line separating content.",
    promptTip:
      "Insert a thin horizontal divider between list sections or card blocks for separation.",
    exampleKey: "divider",
    tags: ["separator", "hr"],
  },
  {
    id: "glassmorphism",
    category: "surfaces",
    name: "Glass / frosted surface",
    alsoKnownAs: ["Glassmorphism","Frosted glass","Blur panel"],
    description: "Translucent blurred surface over content.",
    promptTip:
      "Create a frosted glass panel with bg-white/10 backdrop-blur border and soft shadow over a gradient.",
    exampleKey: "glassmorphism",
    tags: ["blur","translucent","frost"],
  },
  {
    id: "gradient",
    category: "surfaces",
    name: "Gradient fill",
    description: "Smooth color transition as background or accent.",
    promptTip:
      "Use a subtle brand gradient (e.g. teal→sky or warm sand→amber) for hero panels or accent surfaces — avoid default purple-pink AI slop meshes.",
    exampleKey: "gradient",
    tags: ["gradient", "fill"],
  },
  {
    id: "raised-surface",
    category: "surfaces",
    name: "Raised surface",
    alsoKnownAs: ["Elevated card", "Paper surface"],
    description: "Surface lifted above the page with shadow or lighter fill.",
    promptTip:
      "Raise a panel above the canvas with a soft shadow and slightly brighter fill so it reads as a card layer.",
    exampleKey: "raised-surface",
    tags: ["elevation", "card", "paper"],
  },
  {
    id: "inset-surface",
    category: "surfaces",
    name: "Inset / sunken surface",
    alsoKnownAs: ["Well", "Recessed panel"],
    description: "Recessed area that feels cut into the page (wells, code blocks).",
    promptTip:
      "Use an inset surface (darker fill, inner shadow or ring) for wells, code blocks, and drop targets.",
    exampleKey: "inset-surface",
    tags: ["inset", "well", "sunken"],
  },
  {
    id: "outline-ring",
    category: "surfaces",
    name: "Outline ring",
    alsoKnownAs: ["Focus outline", "Halo ring"],
    description: "Ring stroke outside a component for selection or focus.",
    promptTip:
      "Apply a 2px outline/ring outside the border (ring-offset) for selected cards or keyboard focus.",
    exampleKey: "outline-ring",
    tags: ["ring", "outline", "focus"],
  },
  {
    id: "dashed-border",
    category: "surfaces",
    name: "Dashed border",
    alsoKnownAs: ["Dropzone border", "Placeholder stroke"],
    description: "Dashed stroke for placeholders, dropzones, and optional regions.",
    promptTip:
      "Use a dashed border for empty dropzones and “add item” placeholders so they feel provisional, not solid cards.",
    exampleKey: "dashed-border",
    tags: ["dashed", "placeholder", "border"],
  },

  // ── Media & Icons ───────────────────────────────────────
  {
    id: "avatar",
    category: "media",
    name: "Avatar",
    description: "Circular image or initials for a person.",
    promptTip:
      "Show user avatars as circles with image or initials fallback; sizes sm/md/lg.",
    exampleKey: "avatar",
    tags: ["user", "profile"],
  },
  {
    id: "icon",
    category: "media",
    name: "Icon",
    description: "Symbolic glyph supporting labels or actions.",
    promptTip:
      "Use a consistent icon set at 16/20/24px; pair icons with text labels for primary nav when possible.",
    exampleKey: "icon",
    tags: ["glyph", "symbol"],
  },
  {
    id: "image-frame",
    category: "media",
    name: "Image frame",
    description: "Cropped image with radius and object-fit.",
    promptTip:
      "Frame product/hero images with rounded corners and object-cover so crops stay intentional.",
    exampleKey: "image-frame",
    tags: ["photo", "crop"],
  },
  {
    id: "favicon-logo",
    category: "media",
    name: "Logo / wordmark",
    description: "Brand mark used in headers and marketing.",
    promptTip:
      "Place a logo/wordmark in the navbar; ensure a monochrome version works on light and dark backgrounds.",
    exampleKey: "favicon-logo",
    tags: ["brand", "logo"],
  },
  {
    id: "thumbnail",
    category: "media",
    name: "Thumbnail",
    description: "Small preview image for lists and grids.",
    promptTip:
      "Use square or 16:9 thumbnails in lists/grids with consistent size and object-cover cropping.",
    exampleKey: "thumbnail",
    tags: ["preview", "small"],
  },
  {
    id: "media-object",
    category: "media",
    name: "Media object",
    alsoKnownAs: ["Image + text row", "Media block"],
    description: "Classic layout: media on one side, title and body on the other.",
    promptTip:
      "Compose a media object: fixed-size image/avatar left, title + supporting text right, aligned to the start.",
    exampleKey: "media-object",
    tags: ["layout", "image", "text"],
  },
  {
    id: "image-caption",
    category: "media",
    name: "Image with caption",
    alsoKnownAs: ["Figure", "Captioned image"],
    description: "Image paired with a caption or credit beneath.",
    promptTip:
      "Wrap an image in a figure with a muted caption below (credit, source, or short description).",
    exampleKey: "image-caption",
    tags: ["figure", "caption", "photo"],
  },
  {
    id: "video-placeholder",
    category: "media",
    name: "Video placeholder",
    alsoKnownAs: ["Video frame", "Play overlay"],
    description: "Reserved frame for video with play affordance before load.",
    promptTip:
      "Show a 16:9 video placeholder with a centered play button and optional duration badge.",
    exampleKey: "video-placeholder",
    tags: ["video", "play", "media"],
  },
  {
    id: "icon-badge",
    category: "media",
    name: "Icon with badge",
    alsoKnownAs: ["Badged icon"],
    description: "Icon carrying a small status or count badge.",
    promptTip:
      "Overlay a small badge (dot or count) on the top-right of an icon for notifications or status.",
    exampleKey: "icon-badge",
    tags: ["icon", "badge", "notification"],
  },
  {
    id: "cover-image",
    category: "media",
    name: "Cover image",
    alsoKnownAs: ["Hero image", "Banner image"],
    description: "Wide image that fills a header or card edge with object-cover.",
    promptTip:
      "Use a wide cover image with object-cover and fixed height for card headers or profile banners.",
    exampleKey: "cover-image",
    tags: ["cover", "hero", "banner"],
  },

  // ── States & Motion ─────────────────────────────────────
  {
    id: "hover-state",
    category: "states",
    name: "Hover state",
    description: "Visual change when the pointer is over a control.",
    promptTip:
      "Define hover states (bg shift, underline, scale 1.02) for interactive elements; keep transitions short.",
    exampleKey: "hover-state",
    tags: ["interactive", "pointer"],
  },
  {
    id: "focus-ring",
    category: "states",
    name: "Focus ring",
    alsoKnownAs: ["Keyboard focus"],
    description: "Keyboard-visible outline for accessibility.",
    promptTip:
      "Add a visible focus ring (ring-2 ring-offset-2) on keyboard focus for all interactive controls.",
    exampleKey: "focus-ring",
    tags: ["a11y", "keyboard"],
  },
  {
    id: "disabled-state",
    category: "states",
    name: "Disabled state",
    description: "Non-interactive appearance for unavailable actions.",
    promptTip:
      "Disable controls with reduced opacity and cursor-not-allowed; keep labels readable.",
    exampleKey: "disabled-state",
    tags: ["inactive"],
  },
  {
    id: "selected-state",
    category: "states",
    name: "Selected / active state",
    description: "Shows the currently chosen option.",
    promptTip:
      "Highlight selected items with accent border/background and optional checkmark so choice is obvious.",
    exampleKey: "selected-state",
    tags: ["active", "chosen"],
  },
  {
    id: "skeleton-pulse",
    category: "states",
    name: "Pulse / shimmer animation",
    description: "Subtle motion indicating loading or attention.",
    promptTip:
      "Use a gentle pulse or shimmer animation on skeletons; keep motion subtle and respect prefers-reduced-motion.",
    exampleKey: "skeleton-pulse",
    tags: ["animation", "motion"],
  },
  {
    id: "cursor-affordance",
    category: "states",
    name: "Cursor affordance",
    description: "Cursor styles that signal interactivity.",
    promptTip:
      "Use cursor-pointer on clickable elements, cursor-grab on draggable, cursor-not-allowed when disabled.",
    exampleKey: "cursor-affordance",
    tags: ["cursor", "affordance"],
  },
  {
    id: "active-pressed",
    category: "states",
    name: "Active / pressed state",
    alsoKnownAs: ["Pressed", "Active state"],
    description: "Momentary feedback while a control is held down.",
    promptTip:
      "On press/active, darken the fill slightly or scale to 0.98 so clicks feel responsive; keep the change brief.",
    exampleKey: "active-pressed",
    tags: ["active", "pressed", "interactive"],
  },
  {
    id: "loading-state",
    category: "states",
    name: "Loading state",
    alsoKnownAs: ["Busy state", "Pending"],
    description: "Control or region waiting on an async result.",
    promptTip:
      "While loading, disable the control, show a spinner, and optionally swap the label to a progressive verb (Saving…).",
    exampleKey: "loading-state",
    tags: ["loading", "async", "busy"],
  },
  {
    id: "error-state",
    category: "states",
    name: "Error state",
    alsoKnownAs: ["Invalid state", "Failed state"],
    description: "Visual treatment when a control or section has failed.",
    promptTip:
      "Mark error state with danger border/text and a short recovery message; keep the field value editable.",
    exampleKey: "error-state",
    tags: ["error", "invalid", "failure"],
  },
  {
    id: "drag-state",
    category: "states",
    name: "Drag state",
    alsoKnownAs: ["Dragging", "Reorder state"],
    description: "Appearance while an item is being dragged for reorder or drop.",
    promptTip:
      "While dragging, lift the item with shadow, reduce opacity of the placeholder slot, and use cursor-grabbing.",
    exampleKey: "drag-state",
    tags: ["drag", "reorder", "dnd"],
  },

  // ── AI Slop ─────────────────────────────────────────────
  {
    id: "slop-purple-gradient",
    category: "ai-slop",
    name: "Default purple gradient hero",
    alsoKnownAs: ["AI purple haze","Violet gradient hero"],
    description:
      "The same indigo→violet→pink gradient every generic AI landing page ships.",
    promptTip:
      "Avoid the default purple-pink mesh hero. Use our brand neutrals with one restrained accent, or a photographic/textural background unique to the product.",
    promptKind: "avoid",
    exampleKey: "slop-purple-gradient",
    tags: ["gradient","landing","anti-pattern","violet"],
  },
  {
    id: "slop-3d-blobs",
    category: "ai-slop",
    name: "Floating 3D blobs",
    alsoKnownAs: ["Glass blobs", "Abstract orbs"],
    description: "Glossy floating orbs that fill space without meaning.",
    promptTip:
      "Skip decorative floating 3D glass orbs. Prefer real product UI screenshots, diagrams, or empty space that supports hierarchy.",
    promptKind: "avoid",
    exampleKey: "slop-3d-blobs",
    tags: ["3d", "orb", "anti-pattern"],
  },
  {
    id: "slop-generic-copy",
    category: "ai-slop",
    name: "Interchangeable SaaS copy",
    alsoKnownAs: ["Lorem marketing"],
    description:
      "“Unlock the future of…” / “seamlessly empower…” that could sell any product.",
    promptTip:
      "Write concrete product copy: who it is for, what job it does, one specific outcome. Ban words like seamlessly, unlock, revolutionize, empower, cutting-edge.",
    promptKind: "avoid",
    exampleKey: "slop-generic-copy",
    tags: ["copy", "voice", "anti-pattern"],
  },
  {
    id: "slop-icon-grid",
    category: "ai-slop",
    name: "Feature icon grid of three",
    description: "Three identical rounded cards with lucide icons and vague titles.",
    promptTip:
      "Don't default to a 3-up icon feature grid with generic labels. Show real workflows, numbered steps with screenshots, or a single strong product demo.",
    promptKind: "avoid",
    exampleKey: "slop-icon-grid",
    tags: ["features", "grid", "anti-pattern"],
  },
  {
    id: "slop-center-everything",
    category: "ai-slop",
    name: "Everything center-aligned",
    description: "Walls of centered text that kill scannability on wide layouts.",
    promptTip:
      "Left-align body and long form content; reserve center alignment for short heroes and empty states. Prefer a clear reading column.",
    promptKind: "avoid",
    exampleKey: "slop-center-everything",
    tags: ["layout", "alignment", "anti-pattern"],
  },
  {
    id: "slop-rainbow-badges",
    category: "ai-slop",
    name: "Rainbow badge soup",
    description: "Too many multi-color pills fighting for attention.",
    promptTip:
      "Limit badges to one semantic system (neutral + one accent, or status colors only). Don't rainbow-tag every label.",
    promptKind: "avoid",
    exampleKey: "slop-rainbow-badges",
    tags: ["badge", "color", "anti-pattern"],
  },
  {
    id: "slop-stock-faces",
    category: "ai-slop",
    name: "Fake testimonial carousel",
    description: "Identical avatar circles and interchangeable praise quotes.",
    promptTip:
      "If you lack real testimonials, omit them. Prefer named customers, logos with permission, or product metrics over inventing smiling stock faces.",
    promptKind: "avoid",
    exampleKey: "slop-stock-faces",
    tags: ["social-proof", "anti-pattern"],
  },
  {
    id: "slop-emoji-overload",
    category: "ai-slop",
    name: "Emoji as design system",
    description: "Every heading and button padded with 🚀✨💡.",
    promptTip:
      "Use zero or one emoji only if on-brand. Prefer a consistent icon set and typography for hierarchy — not emoji confetti.",
    promptKind: "avoid",
    exampleKey: "slop-emoji-overload",
    tags: ["emoji", "tone", "anti-pattern"],
  },
  {
    id: "slop-low-contrast",
    category: "ai-slop",
    name: "Fashionably low contrast",
    description: "Gray-on-gray text that fails accessibility for style points.",
    promptTip:
      "Meet WCAG contrast for body text (aim 4.5:1). Soften hierarchy with size/weight first; never light-gray body on white as the default look.",
    promptKind: "avoid",
    exampleKey: "slop-low-contrast",
    tags: ["a11y", "contrast", "anti-pattern"],
  },
  {
    id: "slop-same-radius",
    category: "ai-slop",
    name: "One huge corner radius",
    description: "Everything pill-shaped until structure disappears.",
    promptTip:
      "Use a small radius scale (sm/md/lg). Large full pills only for chips/CTAs — not for every card, input, and image.",
    promptKind: "avoid",
    exampleKey: "slop-same-radius",
    tags: ["radius", "anti-pattern"],
  },
  {
    id: "slop-inter-only",
    category: "ai-slop",
    name: "Inter-only personality vacuum",
    alsoKnownAs: ["Default system sans forever", "Inter for everything"],
    description:
      "One overused neutral sans (usually Inter) for display, UI, and captions — size changes only, zero type character.",
    promptTip:
      "Don't ship Inter/Roboto for every role by default. Pair a distinctive display face (or weight/optical size) with a quiet UI sans; document the pairing in the prompt.",
    promptKind: "avoid",
    exampleKey: "slop-inter-only",
    tags: ["typography", "font", "inter", "anti-pattern"],
  },
  {
    id: "slop-glow-everything",
    category: "ai-slop",
    name: "Neon glow on everything",
    alsoKnownAs: ["Cyan glow haze", "Bloom spam"],
    description:
      "Soft outer glows on buttons, cards, and text until the UI looks like a nightclub flyer.",
    promptTip:
      "Avoid defaulting to cyan/magenta outer-glow on every surface. Reserve glow for one focal element if the brand needs it; prefer borders, elevation, and contrast for hierarchy.",
    promptKind: "avoid",
    exampleKey: "slop-glow-everything",
    tags: ["glow", "neon", "anti-pattern"],
  },
  {
    id: "slop-fake-metrics",
    category: "ai-slop",
    name: "Invented social-proof metrics",
    alsoKnownAs: ["Fake 10k users", "Vanity KPI row"],
    description:
      "“10,000+ teams · 99.9% uptime · 4.9★” with no source — manufactured trust.",
    promptTip:
      "Never invent user counts, star ratings, or uptime claims. Use real metrics with sources, customer logos with permission, or omit social proof entirely.",
    promptKind: "avoid",
    exampleKey: "slop-fake-metrics",
    tags: ["metrics", "trust", "anti-pattern"],
  },
  {
    id: "slop-hero-badge-stack",
    category: "ai-slop",
    name: "Hero badge stack",
    alsoKnownAs: ["New · AI · Beta · Free pills"],
    description:
      "A row of shiny pills above every hero that all shout equally and say nothing.",
    promptTip:
      "Skip stacking New/AI/Beta/Free badges on the hero. At most one truthful status label; let the headline carry the message.",
    promptKind: "avoid",
    exampleKey: "slop-hero-badge-stack",
    tags: ["badges", "hero", "anti-pattern"],
  },
  {
    id: "slop-shadow-everywhere",
    category: "ai-slop",
    name: "Soft shadow on every box",
    alsoKnownAs: ["Elevation soup"],
    description:
      "Identical 0.1-opacity drop shadows on every card so nothing actually elevates.",
    promptTip:
      "Don't put the same soft shadow on every surface. Use a short elevation scale (none → sm → md → lg) and reserve higher shadows for overlays and floating panels.",
    promptKind: "avoid",
    exampleKey: "slop-shadow-everywhere",
    tags: ["shadow", "elevation", "anti-pattern"],
  },
  {
    id: "slop-lorem-product",
    category: "ai-slop",
    name: "Lorem as product copy",
    alsoKnownAs: ["Placeholder shipped"],
    description:
      "Latin placeholder or nonsense paragraphs left in as if they were real marketing.",
    promptTip:
      "Never leave lorem ipsum in product UI or marketing. Write real microcopy for the job-to-be-done, or use clearly labeled placeholders only in design drafts.",
    promptKind: "avoid",
    exampleKey: "slop-lorem-product",
    tags: ["copy", "placeholder", "anti-pattern"],
  },
  {
    id: "slop-glass-everywhere",
    category: "ai-slop",
    name: "Frosted glass everywhere",
    alsoKnownAs: ["Glassmorphism spam"],
    description:
      "Backdrop-blur on every panel until hierarchy and performance both melt.",
    promptTip:
      "Don't frosted-glass every surface. Limit glass to one chrome layer (e.g. sticky nav) over a purposeful background; use solid surfaces for content density.",
    promptKind: "avoid",
    exampleKey: "slop-glass-everywhere",
    tags: ["glass", "blur", "anti-pattern"],
  },
  {
    id: "slop-dark-cyan-hacker",
    category: "ai-slop",
    name: "Default dark + cyan hacker vibe",
    alsoKnownAs: ["Terminal cosplay UI"],
    description:
      "Near-black canvas, cyan accents, and mono type applied to products that aren't terminals.",
    promptTip:
      "Avoid the lazy dark-mode + neon-cyan + monospace “hacker” kit unless the product is actually a terminal/devtools brand. Pick a palette and type system from real brand constraints.",
    promptKind: "avoid",
    exampleKey: "slop-dark-cyan-hacker",
    tags: ["dark", "cyan", "anti-pattern"],
  },
  {
    id: "slop-identical-cards",
    category: "ai-slop",
    name: "Identical feature cards",
    alsoKnownAs: ["Cookie-cutter tiles"],
    description:
      "Same icon size, same title length, same body, same padding — a grid with no hierarchy.",
    promptTip:
      "Don't generate three identical feature cards. Vary hierarchy (one featured story, screenshots, numbered steps) or show a real workflow instead of equal tiles.",
    promptKind: "avoid",
    exampleKey: "slop-identical-cards",
    tags: ["features", "cards", "anti-pattern"],
  },

  // ── Library Best Practices ──────────────────────────────
  {
    id: "lib-compose-primitives",
    category: "library-practices",
    name: "Compose primitives, don't fork",
    description: "Build product UI from shared shadcn/Radix primitives instead of one-off HTML.",
    promptTip:
      "Use the project's Button/Input/Dialog primitives (e.g. shadcn) for chrome and forms. Only hand-roll markup for custom illustrations or effects.",
    exampleKey: "lib-compose-primitives",
    tags: ["shadcn", "radix", "compose"],
  },
  {
    id: "lib-variants",
    category: "library-practices",
    name: "Variants over one-off classes",
    alsoKnownAs: ["CVA variants"],
    description: "Encode size/intent variants once so the app stays consistent.",
    promptTip:
      "Add a CVA/variant API (default, outline, ghost, destructive × sm/md/lg) instead of sprinkling ad-hoc Tailwind on each call site.",
    exampleKey: "lib-variants",
    tags: ["cva", "variants"],
  },
  {
    id: "lib-tokens",
    category: "library-practices",
    name: "Semantic design tokens",
    description: "bg-primary and text-muted-foreground beat raw hex everywhere.",
    promptTip:
      "Style with semantic tokens (background, foreground, primary, muted, border, ring) so light/dark and brand changes stay one-file edits.",
    exampleKey: "lib-tokens",
    tags: ["tokens", "theme"],
  },
  {
    id: "lib-as-child",
    category: "library-practices",
    name: "asChild / Slot composition",
    description: "Merge component styles onto links and custom elements without wrapper div soup.",
    promptTip:
      "Use asChild/Slot so a Button can render as Next.js Link without nested interactive elements or lost styles.",
    exampleKey: "lib-as-child",
    tags: ["slot", "composition"],
  },
  {
    id: "lib-accessible-overlays",
    category: "library-practices",
    name: "Accessible overlays from the library",
    description: "Dialogs and menus need focus trap, escape, and labels — Radix already did the hard part.",
    promptTip:
      "Prefer Dialog/Sheet/DropdownMenu primitives for overlays; don't reinvent focus traps with absolute divs.",
    exampleKey: "lib-accessible-overlays",
    tags: ["a11y", "dialog", "radix"],
  },
  {
    id: "lib-cn-merge",
    category: "library-practices",
    name: "cn() class merging",
    alsoKnownAs: ["className merge","twMerge helper"],
    description: "clsx + tailwind-merge so consumer className can override safely.",
    promptTip:
      "Always pass className through cn()/twMerge in shared components so callers can extend without fighting conflicting utilities.",
    exampleKey: "lib-cn-merge",
    tags: ["cn","tailwind-merge","clsx"],
  },
  {
    id: "lib-dark-mode",
    category: "library-practices",
    name: "Theme with class strategy",
    description: "next-themes + .dark class keeps SSR and client in sync.",
    promptTip:
      "Wire next-themes with attribute=class, suppressHydrationWarning on <html>, and CSS variables for both themes — never toggle only with media queries if users need a switch.",
    exampleKey: "lib-dark-mode",
    tags: ["theme", "next-themes"],
  },
  {
    id: "lib-dont-restyle-everything",
    category: "library-practices",
    name: "Don't restyle every instance",
    description: "Override variants sparingly; fight design drift.",
    promptTip:
      "Reach for existing variants first. If you need a new look more than twice, add a variant — don't copy-paste custom classes across pages.",
    exampleKey: "lib-dont-restyle-everything",
    tags: ["consistency", "system"],
  },
  {
    id: "lib-tailwind-layout",
    category: "library-practices",
    name: "Layout with Tailwind utilities",
    description: "Flex/grid/gap from utilities; components for interactive atoms.",
    promptTip:
      "Use Tailwind for page layout (flex, grid, gap, container). Keep shadcn for interactive atoms (Button, Input, Dialog) — don't wrap a div in a component for every stack.",
    exampleKey: "lib-tailwind-layout",
    tags: ["tailwind", "layout"],
  },
  {
    id: "lib-copy-then-adapt",
    category: "library-practices",
    name: "Own the component source",
    alsoKnownAs: ["Copy, don't black-box"],
    description: "shadcn copies code into your repo so you can adapt it.",
    promptTip:
      "Treat shadcn components as starting source in your repo — customize tokens and variants in place; don't fight a sealed npm design kit.",
    exampleKey: "lib-copy-then-adapt",
    tags: ["shadcn", "ownership"],
  },
  {
    id: "lib-form-field-pattern",
    category: "library-practices",
    name: "Form field triad",
    alsoKnownAs: ["Label + control + description"],
    description:
      "Every field needs a label, control, and optional helper/error — wired for a11y.",
    promptTip:
      "Compose fields as Label + Input/Select + description/error text. Associate label via htmlFor; put errors in aria-describedby. Prefer the shared Field pattern over ad-hoc stacks.",
    exampleKey: "lib-form-field-pattern",
    tags: ["form", "a11y", "shadcn"],
  },
  {
    id: "lib-icon-sizing",
    category: "library-practices",
    name: "Consistent icon sizing",
    description:
      "Icons share a size scale so toolbars and buttons don't jitter.",
    promptTip:
      "Standardize Lucide/icons at size-4 (16px) in buttons and size-5 in nav. Pair icon+label with gap-2; don't mix arbitrary w-3/w-6 mid-toolbar.",
    exampleKey: "lib-icon-sizing",
    tags: ["icons", "tailwind", "consistency"],
  },
  {
    id: "lib-data-state",
    category: "library-practices",
    name: "Style with data-state",
    alsoKnownAs: ["Radix state attributes"],
    description:
      "Radix sets data-state/open/checked — style those instead of fighting class toggles.",
    promptTip:
      "Style Radix/shadcn open and checked states with data-[state=open] and data-[state=checked] selectors rather than manual isOpen className branches when possible.",
    exampleKey: "lib-data-state",
    tags: ["radix", "data-state", "css"],
  },
  {
    id: "lib-controlled-open",
    category: "library-practices",
    name: "Controlled open state",
    description:
      "Dialogs, sheets, and dropdowns should accept open + onOpenChange for app logic.",
    promptTip:
      "When app logic must open/close overlays (after submit, deep link), use controlled open/onOpenChange on Dialog/Sheet/Dropdown — don't only rely on uncontrolled triggers.",
    exampleKey: "lib-controlled-open",
    tags: ["radix", "controlled", "dialog"],
  },
  {
    id: "lib-mobile-first",
    category: "library-practices",
    name: "Mobile-first breakpoints",
    description:
      "Base styles for small screens; layer md:/lg: enhancements upward.",
    promptTip:
      "Write mobile-first Tailwind: single column and stacked actions by default, then md:grid-cols-2 / lg:grid-cols-3. Don't design desktop-only and bolt on mobile hacks.",
    exampleKey: "lib-mobile-first",
    tags: ["responsive", "tailwind", "mobile"],
  },
  {
    id: "lib-size-props",
    category: "library-practices",
    name: "Size props over arbitrary heights",
    description:
      "Use component size variants (sm/default/lg) instead of one-off h-9/h-11 classes.",
    promptTip:
      "Prefer Button/Input size props (sm, default, lg) over sprinkling h-8/h-11 at call sites. If a height repeats, extend the variant map once.",
    exampleKey: "lib-size-props",
    tags: ["variants", "sizing", "cva"],
  },
  {
    id: "lib-skeleton-match",
    category: "library-practices",
    name: "Skeletons match final layout",
    description:
      "Loading placeholders should mirror real content geometry to avoid layout shift.",
    promptTip:
      "Build skeletons with the same grid, gaps, and radii as the loaded UI (avatar circle + two text bars, not one generic rectangle). Prefer Suspense boundaries per section.",
    exampleKey: "lib-skeleton-match",
    tags: ["loading", "skeleton", "ux"],
  },
  {
    id: "lib-destructive-confirm",
    category: "library-practices",
    name: "Confirm destructive actions",
    description:
      "Delete/remove flows use danger styling plus an explicit confirm step.",
    promptTip:
      "Wire destructive actions through AlertDialog (or confirm sheet): clear consequence copy, Cancel + destructive confirm. Never delete on a single unguarded click.",
    exampleKey: "lib-destructive-confirm",
    tags: ["a11y", "dialog", "patterns"],
  },

  // ── Expanded vocabulary (exhaustive fill) ────────────
  {
    id: "ordered-list",
    category: "typography",
    name: "Numbered list",
    alsoKnownAs: ["Ordered list","OL"],
    description:
      "Sequential list with numbers for steps, rankings, or ordered content.",
    promptTip:
      "Use an ordered list (ol) with consistent marker indent and spacing for sequential steps; prefer numbers over bullets when order matters.",
    exampleKey: "ordered-list",
    tags: ["list","ol","steps"],
  },
  {
    id: "kbd",
    category: "typography",
    name: "Keyboard key",
    alsoKnownAs: ["KBD","Shortcut key"],
    description:
      "Styled keycap for keyboard shortcuts in docs and command UIs.",
    promptTip:
      "Render shortcuts as <kbd> chips: mono font, bordered, subtle fill (e.g. \"⌘K\") so they read as physical keys.",
    exampleKey: "kbd",
    tags: ["keyboard","shortcut","kbd"],
  },
  {
    id: "code-block",
    category: "typography",
    name: "Code block",
    alsoKnownAs: ["Pre block","Fenced code"],
    description:
      "Multi-line monospace block for snippets, logs, and API examples.",
    promptTip:
      "Show multi-line code in a pre/code block: mono font, muted background, padding, overflow-x auto, and optional language label.",
    exampleKey: "code-block",
    tags: ["code","pre","mono"],
  },
  {
    id: "font-weight-scale",
    category: "typography",
    name: "Font weight scale",
    alsoKnownAs: ["Type weights"],
    description:
      "A small ladder of weights (regular → medium → semibold → bold) for hierarchy.",
    promptTip:
      "Define a weight scale (400 body, 500 labels, 600 headings, 700 emphasis) and reuse it—avoid random font-black on every title.",
    exampleKey: "font-weight-scale",
    tags: ["weight","type","hierarchy"],
  },
  {
    id: "letter-spacing",
    category: "typography",
    name: "Letter spacing",
    alsoKnownAs: ["Tracking","Character spacing"],
    description:
      "Tracking adjustments for display type, overlines, and dense UI labels.",
    promptTip:
      "Tighten tracking on large display headings; open tracking (tracking-widest) on small uppercase labels. Keep body text near default.",
    exampleKey: "letter-spacing",
    tags: ["tracking","type"],
  },
  {
    id: "strikethrough",
    category: "typography",
    name: "Strikethrough",
    alsoKnownAs: ["Deleted text","Compare-at price"],
    description:
      "Struck text for removed content, completed tasks, or old prices.",
    promptTip:
      "Use line-through for superseded prices or completed items; pair with a clear new value so the meaning is obvious.",
    exampleKey: "strikethrough",
    tags: ["deleted","price","s"],
  },
  {
    id: "prose-measure",
    category: "typography",
    name: "Measure / line length",
    alsoKnownAs: ["Reading width","Max characters"],
    description:
      "Comfortable line length (~45–75ch) so body copy stays readable.",
    promptTip:
      "Constrain body copy to ~65ch max-width (prose measure) so lines don't stretch edge-to-edge on wide screens.",
    exampleKey: "prose-measure",
    tags: ["measure","readability","prose"],
  },
  {
    id: "text-balance",
    category: "typography",
    name: "Text balance",
    alsoKnownAs: ["Balanced headlines","Wrap balance"],
    description:
      "Balanced line breaks on multi-line titles so the last line isn't a single word.",
    promptTip:
      "Apply text-wrap: balance (text-balance) on multi-line headings so wrapped titles look even, not orphaned.",
    exampleKey: "text-balance",
    tags: ["balance","headline","wrap"],
  },
  {
    id: "surface-colors",
    category: "color",
    name: "Surface colors",
    alsoKnownAs: ["Layered surfaces","Canvas levels"],
    description:
      "Stacked background tokens (page → card → popover) for depth without heavy shadows.",
    promptTip:
      "Define surface tokens (background, card, popover/muted) so nested panels step up in elevation via fill, not only shadow.",
    exampleKey: "surface-colors",
    tags: ["surface","tokens","layers"],
  },
  {
    id: "focus-ring-color",
    category: "color",
    name: "Focus ring color",
    alsoKnownAs: ["Ring token","Focus color"],
    description:
      "Dedicated ring/focus color so keyboard focus is visible and on-brand.",
    promptTip:
      "Set a focus ring token (ring-primary or ring) with offset so keyboard users always see a clear, brand-aligned focus indicator.",
    exampleKey: "focus-ring-color",
    tags: ["focus","ring","a11y"],
  },
  {
    id: "chart-colors",
    category: "color",
    name: "Chart / data colors",
    alsoKnownAs: ["Series colors","Data viz palette"],
    description:
      "Distinct hues for chart series and data categories that stay legible in light/dark.",
    promptTip:
      "Provide a chart color set (4–8 distinct hues) as tokens so multi-series charts stay consistent and colorblind-friendlier than pure red/green only.",
    exampleKey: "chart-colors",
    tags: ["chart","data","palette"],
  },
  {
    id: "contrast-pair",
    category: "color",
    name: "Contrast pair",
    alsoKnownAs: ["WCAG pair","Text on fill"],
    description:
      "Explicit text/fill pairs that meet contrast so content stays readable.",
    promptTip:
      "Document contrast pairs (e.g. foreground on background, primary-foreground on primary) and verify they meet WCAG AA for body and UI text.",
    exampleKey: "contrast-pair",
    tags: ["contrast","a11y","wcag"],
  },
  {
    id: "link-color",
    category: "color",
    name: "Link color",
    alsoKnownAs: ["Hyperlink color"],
    description:
      "Dedicated color for inline links, distinct from body text and primary buttons.",
    promptTip:
      "Use a link color (often primary) with underline on hover; don't rely on color alone—pair with underline or weight for affordance.",
    exampleKey: "link-color",
    tags: ["link","tokens"],
  },
  {
    id: "density",
    category: "spacing-layout",
    name: "UI density",
    alsoKnownAs: ["Compact mode","Comfortable density"],
    description:
      "Comfortable vs compact spacing modes for the same components.",
    promptTip:
      "Support density: comfortable (roomy padding/gaps) vs compact (tighter rows for data-heavy UIs). Toggle padding and gap tokens, not one-off pixels.",
    exampleKey: "density",
    tags: ["density","compact","comfortable"],
  },
  {
    id: "scroll-area",
    category: "spacing-layout",
    name: "Scroll area",
    alsoKnownAs: ["Overflow scroll","Scrollport"],
    description:
      "Bounded region that scrolls while the page chrome stays fixed.",
    promptTip:
      "Put long lists in a max-height scroll area with overflow-y auto so panels don't stretch the whole page; prefer custom thin scrollbars only if accessible.",
    exampleKey: "scroll-area",
    tags: ["scroll","overflow"],
  },
  {
    id: "full-bleed",
    category: "spacing-layout",
    name: "Full-bleed",
    alsoKnownAs: ["Edge-to-edge","Breakout"],
    description:
      "Content that breaks out of the container to span the full viewport width.",
    promptTip:
      "Allow heroes or media to go full-bleed (w-screen relative to container) while text stays in the max-width measure.",
    exampleKey: "full-bleed",
    tags: ["bleed","edge","hero"],
  },
  {
    id: "multi-column",
    category: "spacing-layout",
    name: "Multi-column text",
    alsoKnownAs: ["CSS columns","Newspaper columns"],
    description:
      "Text flowed into multiple columns for dense editorial layouts.",
    promptTip:
      "Use CSS multi-column (columns-2, gap) for dense FAQs or glossaries; avoid columns for interactive forms.",
    exampleKey: "multi-column",
    tags: ["columns","editorial"],
  },
  {
    id: "center-layout",
    category: "spacing-layout",
    name: "Centered layout",
    alsoKnownAs: ["Center stage","Auth layout"],
    description:
      "Content horizontally and often vertically centered—common for auth and empty heroes.",
    promptTip:
      "Center key solitary content with flex/grid place-items-center and a max-width card—common for login and empty states.",
    exampleKey: "center-layout",
    tags: ["center","auth","layout"],
  },
  {
    id: "app-shell",
    category: "spacing-layout",
    name: "App shell",
    alsoKnownAs: ["Admin layout","Sidebar + content"],
    description:
      "Persistent chrome (nav + main) framing application pages.",
    promptTip:
      "Structure product pages as an app shell: fixed/side nav + scrollable main content region with consistent header height.",
    exampleKey: "app-shell",
    tags: ["shell","admin","layout"],
  },
  {
    id: "fab",
    category: "buttons",
    name: "Floating action button",
    alsoKnownAs: ["FAB","Floating CTA","Plus button"],
    description:
      "Circular primary action that floats above content, usually bottom-right.",
    promptTip:
      "Add a floating action button (circular, elevated shadow, brand fill) for the single most common create action; keep one FAB per view.",
    exampleKey: "fab",
    tags: ["fab","floating","mobile","create","add"],
  },
  {
    id: "split-button",
    category: "buttons",
    name: "Split button",
    alsoKnownAs: ["Split CTA","Dropdown button"],
    description:
      "Primary action plus a chevron that opens related alternatives.",
    promptTip:
      "Use a split button: main action on the left, chevron dropdown on the right for alternate actions (Save / Save as…).",
    exampleKey: "split-button",
    tags: ["split","dropdown"],
  },
  {
    id: "toggle-button",
    category: "buttons",
    name: "Toggle button",
    alsoKnownAs: ["Pressed button","Toggle group item"],
    description:
      "Button that stays pressed/selected to represent an on/off or mode choice.",
    promptTip:
      "Use toggle buttons (aria-pressed) for modes like Bold/Grid view; show selected with filled or accent background.",
    exampleKey: "toggle-button",
    tags: ["toggle","pressed","aria"],
  },
  {
    id: "close-button",
    category: "buttons",
    name: "Close button",
    alsoKnownAs: ["Dismiss button","X button"],
    description:
      "Icon control that dismisses a dialog, toast, or chip.",
    promptTip:
      "Provide a clear close/dismiss icon button (X) with aria-label Close in the corner of modals, toasts, and banners.",
    exampleKey: "close-button",
    tags: ["close","dismiss","icon"],
  },
  {
    id: "soft-button",
    category: "buttons",
    name: "Soft button",
    alsoKnownAs: ["Subtle button","Tinted button"],
    description:
      "Medium-quiet action with soft tinted fill—between secondary outline and ghost.",
    promptTip:
      "Use a soft/subtle button: light primary-tinted background, no heavy border, for secondary actions that still need fill presence.",
    exampleKey: "soft-button",
    tags: ["soft","subtle","tinted"],
  },
  {
    id: "combobox",
    category: "forms",
    name: "Combobox",
    alsoKnownAs: ["Autocomplete","Typeahead", "Filter select", "Searchable select"],
    description:
      "Searchable select: type to filter options, pick one value.",
    promptTip:
      "Use a combobox/autocomplete for long option lists: input + filtered listbox, keyboard navigable, clear empty and loading states.",
    exampleKey: "combobox",
    tags: ["autocomplete","typeahead","select","filter","searchable"],
  },
  {
    id: "otp-input",
    category: "forms",
    name: "OTP / PIN input",
    alsoKnownAs: ["One-time code","Verification code","2FA code","Verification digits"],
    description:
      "Segmented digit fields for one-time passwords and PINs.",
    promptTip:
      "Build OTP as equal digit boxes with auto-advance, paste support, and a single accessible field group label.",
    exampleKey: "otp-input",
    tags: ["otp","pin","2fa","mfa"],
  },
  {
    id: "multi-select",
    category: "forms",
    name: "Multi-select",
    alsoKnownAs: ["Tag select","Multi combobox"],
    description:
      "Control that picks multiple values, often shown as removable chips.",
    promptTip:
      "For multi-select, show selected values as chips inside the field with remove actions, plus a checklist or combobox for adding more.",
    exampleKey: "multi-select",
    tags: ["multi","chips","select"],
  },
  {
    id: "time-input",
    category: "forms",
    name: "Time field",
    alsoKnownAs: ["Time picker","Time input"],
    description:
      "Control for selecting a clock time (hours and minutes).",
    promptTip:
      "Provide a time input (native type=time or custom spinner) with clear 12/24h handling and an associated label.",
    exampleKey: "time-input",
    tags: ["time","picker"],
  },
  {
    id: "fieldset-group",
    category: "forms",
    name: "Fieldset / field group",
    alsoKnownAs: ["Form section","Grouped fields"],
    description:
      "Related fields grouped under a legend for structure and accessibility.",
    promptTip:
      "Group related inputs in a fieldset with a visible legend (e.g. Billing address); use spacing and optional card chrome to show the group.",
    exampleKey: "fieldset-group",
    tags: ["fieldset","group","form"],
  },
  {
    id: "input-sizes",
    category: "forms",
    name: "Input sizes",
    alsoKnownAs: ["Field sizes"],
    description:
      "Small, default, and large field heights aligned with button size scale.",
    promptTip:
      "Offer input size variants (sm/default/lg) that match button heights so toolbars and forms align on a baseline grid.",
    exampleKey: "input-sizes",
    tags: ["size","input","scale"],
  },
  {
    id: "required-marker",
    category: "forms",
    name: "Required field marker",
    alsoKnownAs: ["Required asterisk"],
    description:
      "Visual cue (usually asterisk) that a field must be completed.",
    promptTip:
      "Mark required fields with an asterisk after the label and explain once near the form; don't rely on color alone.",
    exampleKey: "required-marker",
    tags: ["required","validation","a11y"],
  },
  {
    id: "footer-nav",
    category: "navigation",
    name: "Footer navigation",
    alsoKnownAs: ["Site footer links"],
    description:
      "Secondary link columns in the page footer for sitemap and legal.",
    promptTip:
      "Build footer nav as labeled link columns (Product, Company, Legal) with muted styling and adequate tap targets.",
    exampleKey: "footer-nav",
    tags: ["footer","sitemap"],
  },
  {
    id: "back-link",
    category: "navigation",
    name: "Back link",
    alsoKnownAs: ["Return link","Up navigation"],
    description:
      "Inline control that returns to the previous page or parent section.",
    promptTip:
      "Add a back link (\"← Settings\") above page titles for nested flows; prefer real history or parent route over browser-only back.",
    exampleKey: "back-link",
    tags: ["back","up","breadcrumb"],
  },
  {
    id: "app-rail",
    category: "navigation",
    name: "App rail",
    alsoKnownAs: ["Icon rail","Activity bar"],
    description:
      "Narrow vertical strip of icons for top-level app sections.",
    promptTip:
      "Use an app rail (icon-only vertical nav, ~48–64px) for multi-section products; pair icons with tooltips and an active indicator.",
    exampleKey: "app-rail",
    tags: ["rail","icons","sidebar"],
  },
  {
    id: "overflow-nav",
    category: "navigation",
    name: "Overflow navigation",
    alsoKnownAs: ["More menu","Nav overflow"],
    description:
      "Collapsed extra nav items behind a More/⋯ control when space is tight.",
    promptTip:
      "When horizontal nav overflows, move excess items into a More menu instead of shrinking labels unreadably.",
    exampleKey: "overflow-nav",
    tags: ["overflow","more","responsive"],
  },
  {
    id: "nav-section-label",
    category: "navigation",
    name: "Nav section label",
    alsoKnownAs: ["Sidebar group label"],
    description:
      "Small uppercase or muted heading that groups links in a sidebar.",
    promptTip:
      "Group sidebar links under muted section labels (Workspace, Settings) with extra top margin between groups.",
    exampleKey: "nav-section-label",
    tags: ["sidebar","group","label"],
  },
  {
    id: "announcement-bar",
    category: "feedback",
    name: "Announcement bar",
    alsoKnownAs: ["Promo bar","System banner"],
    description:
      "Thin full-width bar for product news, outages, or promos above the header.",
    promptTip:
      "Use a slim announcement bar (full width, dismissible) for sitewide news; keep copy to one line and a single action link.",
    exampleKey: "announcement-bar",
    tags: ["banner","promo","system"],
  },
  {
    id: "circular-progress",
    category: "feedback",
    name: "Circular progress",
    alsoKnownAs: ["Progress ring","Radial progress"],
    description:
      "Ring or circle that fills to show percent complete.",
    promptTip:
      "Show determinate circular progress for upload/completion percentages; include a text value for accessibility.",
    exampleKey: "circular-progress",
    tags: ["progress","ring","percent"],
  },
  {
    id: "action-banner",
    category: "feedback",
    name: "Actionable banner",
    alsoKnownAs: ["Banner with CTA"],
    description:
      "Alert-style banner that includes one or more explicit actions.",
    promptTip:
      "When a banner needs a decision, include primary/secondary actions inline (e.g. Update · Dismiss) rather than text-only notices.",
    exampleKey: "action-banner",
    tags: ["banner","cta","alert"],
  },
  {
    id: "inline-status",
    category: "feedback",
    name: "Inline status text",
    alsoKnownAs: ["Helper status","Field status"],
    description:
      "Short status line next to a control (Saving…, Saved, Error).",
    promptTip:
      "Show inline status beside or under controls for async saves (Saving… → Saved) using muted or semantic color.",
    exampleKey: "inline-status",
    tags: ["status","inline","async"],
  },
  {
    id: "count-badge",
    category: "feedback",
    name: "Count badge",
    alsoKnownAs: ["Numeric badge","Tab count"],
    description:
      "Small numeric chip indicating quantity (inbox count, tab totals).",
    promptTip:
      "Use a compact count badge (muted or primary) next to nav labels; cap display (e.g. 99+) for large numbers.",
    exampleKey: "count-badge",
    tags: ["count","badge","quantity"],
  },
  {
    id: "lightbox",
    category: "overlays",
    name: "Lightbox",
    alsoKnownAs: ["Image modal","Media zoom"],
    description:
      "Full-focus overlay that enlarges an image or media item.",
    promptTip:
      "Open images in a lightbox: dimmed scrim, centered media, close on Escape/scrim click, optional prev/next for galleries.",
    exampleKey: "lightbox",
    tags: ["lightbox","image","modal"],
  },
  {
    id: "toast-stack",
    category: "overlays",
    name: "Toast stack",
    alsoKnownAs: ["Toast region","Notification stack"],
    description:
      "Stacked toasts in a fixed corner region with newest on top or bottom.",
    promptTip:
      "Stack toasts in a fixed corner region with consistent spacing; limit visible toasts and collapse or queue overflow.",
    exampleKey: "toast-stack",
    tags: ["toast","stack","sonner"],
  },
  {
    id: "fullscreen-modal",
    category: "overlays",
    name: "Fullscreen modal",
    alsoKnownAs: ["Takeover modal","Page sheet"],
    description:
      "Modal that covers most or all of the viewport for complex flows.",
    promptTip:
      "For multi-step or dense tasks, use a near-fullscreen modal/sheet with sticky header actions and clear dismiss.",
    exampleKey: "fullscreen-modal",
    tags: ["modal","fullscreen","takeover"],
  },
  {
    id: "modal-scrim",
    category: "overlays",
    name: "Modal scrim",
    alsoKnownAs: ["Backdrop","Overlay dim"],
    description:
      "Dimmed layer behind dialogs that focuses attention and blocks the page.",
    promptTip:
      "Place dialogs over a semi-transparent scrim (black/50 or similar); clicking the scrim should dismiss only when appropriate.",
    exampleKey: "modal-scrim",
    tags: ["scrim","backdrop","overlay"],
  },
  {
    id: "calendar-month",
    category: "data-display",
    name: "Calendar month",
    alsoKnownAs: ["Date grid","Month view"],
    description:
      "Month grid of days for pickers and scheduling UIs.",
    promptTip:
      "Render a month calendar as a 7-column day grid with today highlighted and out-of-month days muted.",
    exampleKey: "calendar-month",
    tags: ["calendar","date","grid"],
  },
  {
    id: "carousel",
    category: "data-display",
    name: "Carousel",
    alsoKnownAs: ["Slider","Horizontal scroller"],
    description:
      "Horizontally paged content with next/previous controls.",
    promptTip:
      "Build a carousel with peek of next slide, prev/next controls, and dots or a counter; pause autoplay on hover and respect reduced motion.",
    exampleKey: "carousel",
    tags: ["carousel","slider","gallery"],
  },
  {
    id: "price-display",
    category: "data-display",
    name: "Price / currency",
    alsoKnownAs: ["Price block","Money format"],
    description:
      "Formatted currency with emphasis hierarchy for product and billing UIs.",
    promptTip:
      "Display prices with clear currency, tabular nums, and hierarchy (large amount, smaller period). Show compare-at with strikethrough when discounted.",
    exampleKey: "price-display",
    tags: ["price","currency","money"],
  },
  {
    id: "code-snippet",
    category: "data-display",
    name: "Code snippet card",
    alsoKnownAs: ["Snippet panel","Copyable code"],
    description:
      "Compact code panel with language cue and copy affordance for docs/APIs.",
    promptTip:
      "Present install/API snippets in a card with mono code, optional language label, and a copy button.",
    exampleKey: "code-snippet",
    tags: ["code","copy","docs"],
  },
  {
    id: "activity-feed",
    category: "data-display",
    name: "Activity feed item",
    alsoKnownAs: ["Feed row","Notification row"],
    description:
      "Single row in an activity or notification feed with actor, action, and time.",
    promptTip:
      "Layout feed items as avatar + action sentence + relative time; group by day when the list is long.",
    exampleKey: "activity-feed",
    tags: ["feed","activity","notifications"],
  },
  {
    id: "kpi-strip",
    category: "data-display",
    name: "KPI strip",
    alsoKnownAs: ["Metric row","Stats strip"],
    description:
      "Horizontal row of compact metrics for dashboards.",
    promptTip:
      "Show 3–5 KPIs in a horizontal strip with label, value, and optional delta; keep alignment and tabular numbers consistent.",
    exampleKey: "kpi-strip",
    tags: ["kpi","metrics","dashboard"],
  },
  {
    id: "backdrop-blur",
    category: "surfaces",
    name: "Backdrop blur",
    alsoKnownAs: ["Frosted chrome","Blur overlay"],
    description:
      "Blur of content behind a translucent bar or panel for layered chrome.",
    promptTip:
      "Use backdrop-blur on sticky headers and overlays with semi-transparent fill so underlying content softly shows through.",
    exampleKey: "backdrop-blur",
    tags: ["blur","frosted","glass"],
  },
  {
    id: "surface-levels",
    category: "surfaces",
    name: "Surface elevation levels",
    alsoKnownAs: ["Elevation ladder","Level 0–3"],
    description:
      "Stepped elevations (flat → raised → floating) via shadow and fill.",
    promptTip:
      "Define 3–4 elevation levels (flat, raised, floating, modal) with paired shadow + surface tokens and reuse them consistently.",
    exampleKey: "surface-levels",
    tags: ["elevation","levels","shadow"],
  },
  {
    id: "tinted-surface",
    category: "surfaces",
    name: "Tinted surface",
    alsoKnownAs: ["Soft fill panel"],
    description:
      "Panel with a light brand or semantic tint instead of pure neutral fill.",
    promptTip:
      "Use lightly tinted surfaces (primary/5–10%) for selected regions, tips, or brand panels without heavy borders.",
    exampleKey: "tinted-surface",
    tags: ["tint","fill","surface"],
  },
  {
    id: "well-surface",
    category: "surfaces",
    name: "Well / recessed group",
    alsoKnownAs: ["Recessed panel","Grouped well"],
    description:
      "Slightly recessed background that groups controls as one unit.",
    promptTip:
      "Group toolbars or filters in a muted well (bg-muted rounded-lg p-1) so related controls read as a single surface.",
    exampleKey: "well-surface",
    tags: ["well","group","toolbar"],
  },
  {
    id: "illustration-placeholder",
    category: "media",
    name: "Illustration placeholder",
    alsoKnownAs: ["Empty art","Spot illustration slot"],
    description:
      "Reserved art slot with abstract shapes when final illustration is pending.",
    promptTip:
      "Reserve illustration space with a soft abstract placeholder (shapes + muted fill) matching final aspect ratio—avoid broken-image icons for marketing empty states.",
    exampleKey: "illustration-placeholder",
    tags: ["illustration","placeholder","empty"],
  },
  {
    id: "gallery-strip",
    category: "media",
    name: "Gallery strip",
    alsoKnownAs: ["Thumbnail strip","Image row"],
    description:
      "Horizontal row of image thumbnails for product or media pickers.",
    promptTip:
      "Show a gallery as equal thumbnails in a horizontal strip with selected ring and optional horizontal scroll.",
    exampleKey: "gallery-strip",
    tags: ["gallery","thumbnails","images"],
  },
  {
    id: "image-overlay",
    category: "media",
    name: "Image with text overlay",
    alsoKnownAs: ["Hero image text","Media caption overlay"],
    description:
      "Text or controls layered on an image with a scrim for contrast.",
    promptTip:
      "When placing text on images, add a dark gradient scrim and light text so contrast holds over any photo.",
    exampleKey: "image-overlay",
    tags: ["overlay","scrim","hero"],
  },
  {
    id: "icon-pair",
    category: "media",
    name: "Icon + label pair",
    alsoKnownAs: ["Labeled icon","Feature icon row"],
    description:
      "Icon aligned with a short label for feature lists and menus.",
    promptTip:
      "Pair icons with labels (gap-2, size-4 icon) in menus and feature rows; never rely on unlabeled icons for primary navigation.",
    exampleKey: "icon-pair",
    tags: ["icon","label","pair"],
  },
  {
    id: "read-only",
    category: "states",
    name: "Read-only state",
    alsoKnownAs: ["Non-editable","Locked field"],
    description:
      "Control that displays a value but cannot be edited in this context.",
    promptTip:
      "Style read-only fields with muted border/fill and no focus caret; use readOnly or plaintext so they differ from disabled (still focusable when needed).",
    exampleKey: "read-only",
    tags: ["readonly","locked","form"],
  },
  {
    id: "success-control",
    category: "states",
    name: "Success on control",
    alsoKnownAs: ["Valid field","Success state"],
    description:
      "Positive validation styling on an input or control after success.",
    promptTip:
      "Show success on a control with green border/check when validation passes; clear it when the user edits again.",
    exampleKey: "success-control",
    tags: ["success","valid","form"],
  },
  {
    id: "indeterminate",
    category: "states",
    name: "Indeterminate state",
    alsoKnownAs: ["Partial check","Mixed state"],
    description:
      "Checkbox or progress that is neither fully on nor off (partial selection).",
    promptTip:
      "Use indeterminate checkboxes for partial tree/table selection; set aria-checked=mixed and a distinct dash visual.",
    exampleKey: "indeterminate",
    tags: ["indeterminate","checkbox","mixed"],
  },
  {
    id: "reduced-motion",
    category: "states",
    name: "Reduced motion",
    alsoKnownAs: ["prefers-reduced-motion"],
    description:
      "Design respect for users who prefer minimal animation.",
    promptTip:
      "Wrap non-essential animation in prefers-reduced-motion: reduce media queries—keep opacity fades short or static for those users.",
    exampleKey: "reduced-motion",
    tags: ["a11y","motion","prefers-reduced-motion"],
  },
  {
    id: "visited-link",
    category: "states",
    name: "Visited link",
    alsoKnownAs: ["Visited state"],
    description:
      "Link styling after the user has already opened the destination.",
    promptTip:
      "Optionally style :visited links with a distinct muted purple/secondary color in content-heavy docs so users see where they've been.",
    exampleKey: "visited-link",
    tags: ["visited","link","state"],
  },
  {
    id: "slop-gradient-text",
    category: "ai-slop",
    name: "Gradient text on every headline",
    alsoKnownAs: ["Rainbow headline"],
    description:
      "Every title gets a purple-to-pink gradient fill—instant AI landing page tell.",
    promptTip:
      "Don't put gradient fills on every headline. Use solid type; reserve gradient text for at most one intentional hero word if brand demands it.",
    promptKind: "avoid",
    exampleKey: "slop-gradient-text",
    tags: ["gradient","type","anti-pattern"],
  },
  {
    id: "slop-busy-motion",
    category: "ai-slop",
    name: "Everything animates forever",
    alsoKnownAs: ["Motion spam","Infinite bounce"],
    description:
      "Bounce, float, and pulse on every element until nothing feels stable.",
    promptTip:
      "Don't animate every card, badge, and blob on a loop. Motion should highlight change or hierarchy—default UI should sit still.",
    promptKind: "avoid",
    exampleKey: "slop-busy-motion",
    tags: ["motion","animation","anti-pattern"],
  },
  {
    id: "slop-ai-badge-spam",
    category: "ai-slop",
    name: "Powered by AI badge spam",
    alsoKnownAs: ["AI sparkle badge"],
    description:
      "Every surface stamped with ✨ AI badges as if that were the product.",
    promptTip:
      "Don't sprinkle 'AI-powered' badges on every section. State capability once in plain language; design the actual workflow instead.",
    promptKind: "avoid",
    exampleKey: "slop-ai-badge-spam",
    tags: ["ai","badge","anti-pattern"],
  },
  {
    id: "slop-hero-stats-row",
    category: "ai-slop",
    name: "Unsourced hero stats row",
    alsoKnownAs: ["Fake social proof strip"],
    description:
      "Big 10x / 99% / 24/7 numbers under the hero with no source or meaning.",
    promptTip:
      "Don't invent 10x/99%/24/7 hero stats. If you show metrics, use real numbers with labels users understand—or cut the strip.",
    promptKind: "avoid",
    exampleKey: "slop-hero-stats-row",
    tags: ["stats","social-proof","anti-pattern"],
  },
  {
    id: "lib-portal-stacking",
    category: "library-practices",
    name: "Portals & stacking context",
    alsoKnownAs: ["Portal layering"],
    description:
      "Render overlays in a portal so z-index and overflow aren't trapped by parents.",
    promptTip:
      "Let Dialog/Dropdown/Tooltip portal to document body so overflow:hidden parents don't clip them; keep one stacking scale for overlays.",
    exampleKey: "lib-portal-stacking",
    tags: ["portal","z-index","radix"],
  },
  {
    id: "lib-accessible-names",
    category: "library-practices",
    name: "Accessible names",
    alsoKnownAs: ["aria-label discipline"],
    description:
      "Icon buttons and inputs need computed names for assistive tech.",
    promptTip:
      "Give every icon-only control an aria-label (or visible text). Prefer Label htmlFor over placeholder-only fields.",
    exampleKey: "lib-accessible-names",
    tags: ["a11y","aria","label"],
  },
  {
    id: "lib-css-variables",
    category: "library-practices",
    name: "Theme via CSS variables",
    alsoKnownAs: ["Token variables"],
    description:
      "Brand and theme changes flow through CSS variables, not hunt-and-replace hex.",
    promptTip:
      "Map brand colors to CSS variables (--primary, --radius) and reference them in components so themes swap in one place.",
    exampleKey: "lib-css-variables",
    tags: ["css","tokens","theme"],
  },
  {
    id: "lib-compose-layout",
    category: "library-practices",
    name: "Compose layout outside components",
    alsoKnownAs: ["Pages use utilities"],
    description:
      "Page structure stays in Tailwind layout utilities; components stay interactive atoms.",
    promptTip:
      "Compose pages with flex/grid/gap utilities. Keep shared components focused on interactive atoms—not every margin wrapper.",
    exampleKey: "lib-compose-layout",
    tags: ["composition","layout","tailwind"],
  },
  {
    id: "lib-error-boundaries-ui",
    category: "library-practices",
    name: "Graceful empty & error UI",
    alsoKnownAs: ["Error and empty patterns"],
    description:
      "Shared empty and error panels so failures don't look like broken pages.",
    promptTip:
      "Ship reusable empty-state and error-panel patterns (icon, title, recovery action) instead of raw stack traces or blank main areas.",
    exampleKey: "lib-error-boundaries-ui",
    tags: ["empty","error","ux"],
  },

  // ── Second-pass vocabulary ────────────────────────────
  {
    id: "small-caps",
    category: "typography",
    name: "Small caps",
    alsoKnownAs: ["Petite caps","SC"],
    description:
      "Uppercase letterforms at lowercase height for refined labels and acronyms.",
    promptTip:
      "Use font-variant: small-caps (or a true small-caps face) for acronyms and refined labels—not full uppercase shouty tracking on body copy.",
    exampleKey: "small-caps",
    tags: ["caps","type","acronym"],
  },
  {
    id: "monospace-stack",
    category: "typography",
    name: "Monospace stack",
    alsoKnownAs: ["Code font stack","Mono UI"],
    description:
      "Dedicated mono typeface for code, IDs, and technical metadata.",
    promptTip:
      "Define a mono stack (ui-monospace, SF Mono, Menlo, monospace) for code, IDs, and logs—never mix random mono fonts mid-UI.",
    exampleKey: "monospace-stack",
    tags: ["mono","code","font"],
  },
  {
    id: "responsive-type",
    category: "typography",
    name: "Responsive type scale",
    alsoKnownAs: ["Fluid type","Clamp type"],
    description:
      "Type sizes that scale smoothly between mobile and desktop breakpoints.",
    promptTip:
      "Scale headings with clamp() or stepped text-2xl/md:text-4xl so type stays proportional across viewports without jumping awkwardly.",
    exampleKey: "responsive-type",
    tags: ["fluid","responsive","type"],
  },
  {
    id: "brand-scale",
    category: "color",
    name: "Brand color scale",
    alsoKnownAs: ["Primary steps","Tint/shade ladder"],
    description:
      "Tints and shades of the brand hue for hover, soft fills, and emphasis.",
    promptTip:
      "Build a brand scale (50–900) from the primary hue so soft fills, hovers, and solid CTAs stay related—not random blues.",
    exampleKey: "brand-scale",
    tags: ["brand","scale","tints"],
  },
  {
    id: "disabled-colors",
    category: "color",
    name: "Disabled colors",
    alsoKnownAs: ["Inactive palette"],
    description:
      "Muted fill and text tokens for disabled controls that still look intentional.",
    promptTip:
      "Define disabled foreground/background tokens (lower contrast, no pure gray washout) and apply them consistently—not random opacity.",
    exampleKey: "disabled-colors",
    tags: ["disabled","tokens","muted"],
  },
  {
    id: "safe-area",
    category: "spacing-layout",
    name: "Safe area insets",
    alsoKnownAs: ["Notch padding","env(safe-area-inset)"],
    description:
      "Padding that respects device notches, home indicators, and rounded corners.",
    promptTip:
      "Add safe-area padding (env(safe-area-inset-*)) on fixed bottom bars and full-bleed mobile layouts so content clears the home indicator.",
    exampleKey: "safe-area",
    tags: ["safe-area","mobile","notch"],
  },
  {
    id: "masonry-hint",
    category: "spacing-layout",
    name: "Staggered grid",
    alsoKnownAs: ["Uneven grid","Pinterest-style layout"],
    description:
      "Grid of mixed-height cards for galleries when equal rows feel rigid.",
    promptTip:
      "For mixed-height media, use a CSS columns or grid with row-span variation—not forced equal card heights that crop content.",
    exampleKey: "masonry-hint",
    tags: ["grid","gallery","staggered"],
  },
  {
    id: "sticky-footer",
    category: "spacing-layout",
    name: "Sticky footer actions",
    alsoKnownAs: ["Pinned footer bar","Form footer"],
    description:
      "Action bar pinned to the bottom of a view or modal for primary saves.",
    promptTip:
      "Pin form or modal actions in a sticky footer bar (border-t, background, safe padding) so Save/Cancel stay reachable while content scrolls.",
    exampleKey: "sticky-footer",
    tags: ["footer","sticky","actions"],
  },
  {
    id: "pill-button",
    category: "buttons",
    name: "Pill button",
    alsoKnownAs: ["Rounded full button","Capsule button"],
    description:
      "Fully rounded capsule shape for marketing CTAs and filter chips-as-buttons.",
    promptTip:
      "Use rounded-full pill buttons for marketing CTAs or filter actions; keep product chrome on standard radius so shapes stay intentional.",
    exampleKey: "pill-button",
    tags: ["pill","capsule","rounded-full"],
  },
  {
    id: "button-block",
    category: "buttons",
    name: "Full-width button",
    alsoKnownAs: ["Block button","Stretch CTA"],
    description:
      "Button that spans its container—common in mobile forms and auth.",
    promptTip:
      "On mobile forms and auth, use full-width primary buttons (w-full) so the CTA is easy to tap; stack secondary full-width below.",
    exampleKey: "button-block",
    tags: ["block","full-width","mobile"],
  },
  {
    id: "phone-input",
    category: "forms",
    name: "Phone field",
    alsoKnownAs: ["Tel input","Phone number"],
    description:
      "Telephone input, often with country code prefix.",
    promptTip:
      "Use type=tel with a country code addon or select; format as the user types and keep a single accessible label.",
    exampleKey: "phone-input",
    tags: ["phone","tel","input"],
  },
  {
    id: "color-input",
    category: "forms",
    name: "Color picker field",
    alsoKnownAs: ["Color input","Swatch control"],
    description:
      "Control for choosing a color value, often with swatch + hex.",
    promptTip:
      "Pair a native color input or swatch button with a hex text field so users can pick visually or paste values.",
    exampleKey: "color-input",
    tags: ["color","picker","hex"],
  },
  {
    id: "checkbox-group",
    category: "forms",
    name: "Checkbox group",
    alsoKnownAs: ["Multi-checkbox","Option list"],
    description:
      "Stacked checkboxes for selecting multiple options in a set.",
    promptTip:
      "Group related checkboxes under a legend/label with consistent spacing; support select-all with indeterminate when partial.",
    exampleKey: "checkbox-group",
    tags: ["checkbox","group","multi"],
  },
  {
    id: "inline-label-field",
    category: "forms",
    name: "Inline label field",
    alsoKnownAs: ["Horizontal form row","Label left"],
    description:
      "Label and control on one row for dense settings UIs.",
    promptTip:
      "In settings tables, align labels left and controls right on one row (grid cols); stack on narrow screens.",
    exampleKey: "inline-label-field",
    tags: ["inline","settings","form"],
  },
  {
    id: "tree-nav",
    category: "navigation",
    name: "Tree navigation",
    alsoKnownAs: ["Nested nav","Folder nav"],
    description:
      "Expandable nested links for hierarchical app or docs structure.",
    promptTip:
      "Build tree nav with expand/collapse chevrons, indent levels, and a clear current-item style; keep hit targets large enough.",
    exampleKey: "tree-nav",
    tags: ["tree","nested","sidebar"],
  },
  {
    id: "utility-nav",
    category: "navigation",
    name: "Utility navigation",
    alsoKnownAs: ["Secondary top links","Meta nav"],
    description:
      "Small top links for help, status, locale, or account—secondary to primary nav.",
    promptTip:
      "Place utility nav (Help, Status, Locale) as small muted links above or beside primary nav—never compete with main IA.",
    exampleKey: "utility-nav",
    tags: ["utility","meta","header"],
  },
  {
    id: "tab-underline",
    category: "navigation",
    name: "Underline tabs",
    alsoKnownAs: ["Line tabs","Browser-style tabs"],
    description:
      "Tabs indicated by a bottom border rather than a filled pill.",
    promptTip:
      "Use underline tabs (border-b-2 on active) for content switching in dense product UIs; keep labels short and equal padding.",
    exampleKey: "tab-underline",
    tags: ["tabs","underline","nav"],
  },
  {
    id: "top-progress",
    category: "feedback",
    name: "Top progress bar",
    alsoKnownAs: ["NProgress","Route progress"],
    description:
      "Thin progress line at the top of the viewport for page/route loading.",
    promptTip:
      "Show a 2px top-of-viewport progress bar during route transitions; animate width and hide when complete. Respect reduced motion.",
    exampleKey: "top-progress",
    tags: ["nprogress","loading","route"],
  },
  {
    id: "snackbar-action",
    category: "feedback",
    name: "Snackbar with action",
    alsoKnownAs: ["Action toast","Undo snackbar"],
    description:
      "Transient message with a single related action like Undo.",
    promptTip:
      "Pair short snackbar copy with one text action (Undo, View) and optional dismiss; auto-hide after a few seconds.",
    exampleKey: "snackbar-action",
    tags: ["snackbar","undo","toast"],
  },
  {
    id: "validation-summary",
    category: "feedback",
    name: "Validation summary",
    alsoKnownAs: ["Error summary","Form errors list"],
    description:
      "List of form errors at the top of a form for keyboard and screen-reader users.",
    promptTip:
      "On submit failure, show a validation summary listing fields and errors with links/focus to each invalid control.",
    exampleKey: "validation-summary",
    tags: ["validation","errors","form"],
  },
  {
    id: "coach-mark",
    category: "overlays",
    name: "Coach mark",
    alsoKnownAs: ["Feature spotlight","Tour step","Hotspot"],
    description:
      "Spotlight callout teaching a UI control during onboarding.",
    promptTip:
      "Coach marks: dim the page, highlight one target, short title + body + Next/Skip. Never block critical paths permanently.",
    exampleKey: "coach-mark",
    tags: ["onboarding","tour","spotlight"],
  },
  {
    id: "side-drawer",
    category: "overlays",
    name: "Side drawer detail",
    alsoKnownAs: ["Detail drawer","Record panel"],
    description:
      "Edge drawer for viewing/editing a record without leaving the list.",
    promptTip:
      "Open row details in a side drawer (not a full page) for master-detail flows; include close, title, and sticky footer actions.",
    exampleKey: "side-drawer",
    tags: ["drawer","detail","master-detail"],
  },
  {
    id: "rating-stars",
    category: "data-display",
    name: "Star rating",
    alsoKnownAs: ["Rating","Stars"],
    description:
      "Visual score with stars for reviews and product quality.",
    promptTip:
      "Show star ratings with filled/empty stars, a numeric value for a11y, and consistent half-star rules if used.",
    exampleKey: "rating-stars",
    tags: ["rating","stars","review"],
  },
  {
    id: "comparison-table",
    category: "data-display",
    name: "Comparison table",
    alsoKnownAs: ["Pricing compare","Feature matrix"],
    description:
      "Matrix of plans or products with checkmarks and feature rows.",
    promptTip:
      "Build comparison tables with sticky first column, clear plan headers, and check/dash cells—not walls of paragraphs.",
    exampleKey: "comparison-table",
    tags: ["compare","pricing","matrix"],
  },
  {
    id: "sortable-header",
    category: "data-display",
    name: "Sortable table header",
    alsoKnownAs: ["Column sort","Sort affordance"],
    description:
      "Table column header that toggles sort order with a clear indicator.",
    promptTip:
      "Mark sortable columns with a chevron; show active sort direction and keep sort state in the URL or table state.",
    exampleKey: "sortable-header",
    tags: ["table","sort","header"],
  },
  {
    id: "sparkline",
    category: "data-display",
    name: "Sparkline",
    alsoKnownAs: ["Inline chart","Mini trend"],
    description:
      "Tiny inline chart showing a trend without full chart chrome.",
    promptTip:
      "Use sparklines beside KPIs for trend at a glance; no axes required, but provide a text summary for screen readers.",
    exampleKey: "sparkline",
    tags: ["chart","trend","kpi"],
  },
  {
    id: "inner-border",
    category: "surfaces",
    name: "Inner border / ring inset",
    alsoKnownAs: ["Inset border","Hairline inset"],
    description:
      "Border drawn inside the box so outer size stays stable.",
    promptTip:
      "Prefer ring-inset or shadow-[inset_0_0_0_1px] when adding focus/selection borders so layout doesn't shift.",
    exampleKey: "inner-border",
    tags: ["inset","border","ring"],
  },
  {
    id: "layered-shadow",
    category: "surfaces",
    name: "Layered shadow",
    alsoKnownAs: ["Multi-layer elevation","Soft depth"],
    description:
      "Two-or-more stacked shadows for realistic soft elevation.",
    promptTip:
      "Compose elevation from 2 soft shadows (tight + ambient) instead of one harsh drop-shadow for cards and modals.",
    exampleKey: "layered-shadow",
    tags: ["shadow","elevation","depth"],
  },
  {
    id: "avatar-status",
    category: "media",
    name: "Avatar with status",
    alsoKnownAs: ["Presence avatar","Online indicator"],
    description:
      "User avatar with a small status dot for online/away/busy.",
    promptTip:
      "Overlay a status dot on avatars (bottom-right, ring of background color) for presence; keep the dot large enough to read.",
    exampleKey: "avatar-status",
    tags: ["avatar","presence","status"],
  },
  {
    id: "favicon-set",
    category: "media",
    name: "Favicon set",
    alsoKnownAs: ["App icons","Browser icon"],
    description:
      "Small brand marks for browser tabs and home-screen icons.",
    promptTip:
      "Ship a favicon set (16/32 SVG or PNG, apple-touch) with a simple mark that reads at 16px—avoid tiny text in the icon.",
    exampleKey: "favicon-set",
    tags: ["favicon","icon","brand"],
  },
  {
    id: "aspect-media-fit",
    category: "media",
    name: "Object fit media",
    alsoKnownAs: ["Cover vs contain","Image crop"],
    description:
      "How media fills a frame: cover (crop) vs contain (letterbox).",
    promptTip:
      "Choose object-fit cover for thumbnails/heroes and contain for product shots that must not crop; set a background for letterboxing.",
    exampleKey: "aspect-media-fit",
    tags: ["object-fit","cover","contain"],
  },
  {
    id: "offline-state",
    category: "states",
    name: "Offline state",
    alsoKnownAs: ["Disconnected","Network offline"],
    description:
      "UI treatment when the client has no network connectivity.",
    promptTip:
      "Detect offline and show a non-blocking banner or badge; queue actions when possible and explain what still works.",
    exampleKey: "offline-state",
    tags: ["offline","network","status"],
  },
  {
    id: "empty-zero",
    category: "states",
    name: "Zero state vs empty",
    alsoKnownAs: ["First-run empty","No results yet"],
    description:
      "Distinguish first-use empty from filtered zero results.",
    promptTip:
      "First-run empty: illustrate + primary CTA to create. Filter zero: “No results” + clear filters—not the same illustration.",
    exampleKey: "empty-zero",
    tags: ["empty","zero","first-run"],
  },
  {
    id: "stale-data",
    category: "states",
    name: "Stale data indicator",
    alsoKnownAs: ["Outdated badge","Refresh needed"],
    description:
      "Cue that shown data may be out of date and needs refresh.",
    promptTip:
      "When data may be stale, show a subtle “Updated 5m ago · Refresh” control rather than silently showing old numbers.",
    exampleKey: "stale-data",
    tags: ["stale","refresh","cache"],
  },
  {
    id: "slop-confetti-success",
    category: "ai-slop",
    name: "Confetti on every success",
    alsoKnownAs: ["Celebration spam"],
    description:
      "Particle confetti for mundane saves makes celebration meaningless.",
    promptTip:
      "Don't fire confetti for routine saves. Reserve celebration for rare milestones—or skip it and show a quiet success state.",
    promptKind: "avoid",
    exampleKey: "slop-confetti-success",
    tags: ["confetti","celebration","anti-pattern"],
  },
  {
    id: "slop-typewriter-hero",
    category: "ai-slop",
    name: "Typewriter hero loop",
    alsoKnownAs: ["Rotating keyword hero"],
    description:
      "Hero that types endless buzzwords—dated SaaS cliché.",
    promptTip:
      "Don't use a looping typewriter of buzzwords in the hero. Write one clear value proposition users can read at a glance.",
    promptKind: "avoid",
    exampleKey: "slop-typewriter-hero",
    tags: ["typewriter","hero","anti-pattern"],
  },
  {
    id: "lib-keyboard-nav",
    category: "library-practices",
    name: "Keyboard navigation paths",
    alsoKnownAs: ["Roving tabindex","Arrow key menus"],
    description:
      "Menus and toolbars should be fully operable from the keyboard.",
    promptTip:
      "Rely on Radix keyboard behavior for menus/tabs (arrows, Home/End, typeahead). Don't ship custom menus that trap Tab incorrectly.",
    exampleKey: "lib-keyboard-nav",
    tags: ["a11y","keyboard","radix"],
  },
  {
    id: "lib-focus-visible",
    category: "library-practices",
    name: "Focus-visible only rings",
    alsoKnownAs: [":focus-visible discipline"],
    description:
      "Show focus rings for keyboard users without punishing mouse clicks.",
    promptTip:
      "Style focus with :focus-visible (or focus-visible:ring) so mouse users don't see rings on every click, but keyboard users always do.",
    exampleKey: "lib-focus-visible",
    tags: ["focus","a11y","css"],
  },
  {
    id: "lib-toast-region",
    category: "library-practices",
    name: "Live region toasts",
    alsoKnownAs: ["aria-live toasts","Sonner region"],
    description:
      "Toasts must announce to assistive tech via a live region.",
    promptTip:
      "Use a toast library (or role=status aria-live) so success/error messages are announced—not only painted visually.",
    exampleKey: "lib-toast-region",
    tags: ["a11y","toast","live-region"],
  },
  // ── Gap-fill pass: standard vocabulary + library habits ──
  {
    id: "mark-highlight",
    category: "typography",
    name: "Mark / highlight",
    alsoKnownAs: ["Highlighted text", "Text mark", "<mark>"],
    description:
      "Inline highlight that draws attention to a phrase inside a sentence.",
    promptTip:
      "Highlight key phrases with a soft mark background (e.g. primary/15) and readable foreground—not neon yellow on long passages.",
    exampleKey: "mark-highlight",
    tags: ["mark", "highlight", "inline", "emphasis"],
  },
  {
    id: "selection-colors",
    category: "color",
    name: "Selection colors",
    alsoKnownAs: ["::selection", "Text selection tint"],
    description:
      "Browser text-selection highlight colors that match the brand.",
    promptTip:
      "Set ::selection (and ::-moz-selection) to a soft primary tint with enough contrast so selected text stays readable in light and dark.",
    exampleKey: "selection-colors",
    tags: ["selection", "highlight", "css"],
  },
  {
    id: "dark-mode-pair",
    category: "color",
    name: "Dark-mode pair",
    alsoKnownAs: ["Light/dark swatch", "Theme pair"],
    description:
      "Paired light and dark surface samples so tokens stay intentional in both themes.",
    promptTip:
      "Design colors as light/dark pairs (bg + fg + border) and verify both themes—don’t only polish light mode then invert.",
    exampleKey: "dark-mode-pair",
    tags: ["dark", "theme", "pair", "tokens"],
  },
  {
    id: "bento-grid",
    category: "spacing-layout",
    name: "Bento grid",
    alsoKnownAs: ["Bento layout", "Feature mosaic", "Asymmetric grid"],
    description:
      "Asymmetric card mosaic where cells span uneven rows/columns for hierarchy.",
    promptTip:
      "Build a bento grid with CSS grid and span utilities (col-span/row-span) so one hero cell anchors smaller feature tiles.",
    exampleKey: "bento-grid",
    tags: ["bento", "grid", "mosaic", "layout"],
  },
  {
    id: "success-button",
    category: "buttons",
    name: "Success button",
    alsoKnownAs: ["Positive button", "Confirm success CTA"],
    description:
      "Affirmative action styled with success green instead of brand primary.",
    promptTip:
      "Use a success button (emerald fill) only for completing a positive outcome (Publish, Confirm payment)—not every primary action.",
    exampleKey: "success-button",
    tags: ["success", "positive", "green", "confirm"],
  },
  {
    id: "field-helper-text",
    category: "forms",
    name: "Field helper text",
    alsoKnownAs: ["Hint text", "Field description", "Help text"],
    description:
      "Supporting sentence under a field that explains format or constraints.",
    promptTip:
      "Put helper text under the input (muted, text-xs), wire aria-describedby, and replace it with error text on validation failure—not both stacked forever.",
    exampleKey: "field-helper-text",
    tags: ["helper", "hint", "description", "a11y"],
  },
  {
    id: "character-count",
    category: "forms",
    name: "Character count",
    alsoKnownAs: ["Char counter", "Max length meter", "Remaining characters"],
    description:
      "Live count of characters used vs max for titles, bios, and tweets.",
    promptTip:
      "Show a character counter near the field (current/max, tabular-nums); warn near the limit and block or explain hard max on submit.",
    exampleKey: "character-count",
    tags: ["counter", "maxlength", "textarea", "limit"],
  },
  {
    id: "tag-input",
    category: "forms",
    name: "Tag / chip input",
    alsoKnownAs: ["Chips input", "Tags field", "Token field"],
    description:
      "Freeform field that turns entered tokens into removable chips.",
    promptTip:
      "Build a tag input: type + Enter/comma creates chips, Backspace removes the last, each chip has a clear remove control and a single field label.",
    exampleKey: "tag-input",
    tags: ["tags", "chips", "tokens", "input"],
  },
  {
    id: "password-strength",
    category: "forms",
    name: "Password strength",
    alsoKnownAs: ["Strength meter", "Password meter"],
    description:
      "Meter and cues that show how strong a new password is as the user types.",
    promptTip:
      "Pair the password field with a strength meter (weak→strong segments) and short rules met/unmet—not only a color bar with no text.",
    exampleKey: "password-strength",
    tags: ["password", "strength", "meter", "security"],
  },
  {
    id: "floating-label",
    category: "forms",
    name: "Floating label",
    alsoKnownAs: ["Float label", "Material label"],
    description:
      "Label that sits inside the field and rises when the field is focused or filled.",
    promptTip:
      "Use a floating label that shrinks above the value on focus/fill; keep a visible label always—don’t rely on placeholder alone.",
    exampleKey: "floating-label",
    tags: ["floating", "label", "material", "field"],
  },
  {
    id: "date-range",
    category: "forms",
    name: "Date range",
    alsoKnownAs: ["Date range picker", "From–to dates", "Daterange"],
    description:
      "Paired start and end date controls for filters, bookings, and reports.",
    promptTip:
      "Offer a date range as From/To fields (or one dual calendar) with validation that end ≥ start and clear empty states.",
    exampleKey: "date-range",
    tags: ["date", "range", "picker", "filter"],
  },
  {
    id: "hamburger-menu",
    category: "navigation",
    name: "Hamburger menu",
    alsoKnownAs: ["Menu button", "Mobile nav toggle", "☰ button"],
    description:
      "Icon control that opens the primary navigation on small screens.",
    promptTip:
      "Use a hamburger (☰) menu button with aria-expanded and aria-controls; open a sheet/drawer of full nav links—don’t hide critical actions only behind it on desktop.",
    exampleKey: "hamburger-menu",
    tags: ["hamburger", "menu", "mobile", "toggle"],
  },
  {
    id: "account-menu",
    category: "navigation",
    name: "Account menu",
    alsoKnownAs: ["User menu", "Profile menu", "Avatar menu"],
    description:
      "Avatar or name control that opens account settings, team switch, and sign out.",
    promptTip:
      "Put account actions in an avatar-triggered dropdown: profile, settings, team, sign out—separate from primary product nav.",
    exampleKey: "account-menu",
    tags: ["account", "user", "profile", "avatar", "menu"],
  },
  {
    id: "table-of-contents",
    category: "navigation",
    name: "Table of contents",
    alsoKnownAs: ["On this page", "In-page TOC", "Section nav"],
    description:
      "Anchored list of page sections for long docs and marketing pages.",
    promptTip:
      "Add an on-this-page table of contents with anchor links and an active section indicator as the user scrolls.",
    exampleKey: "table-of-contents",
    tags: ["toc", "anchors", "docs", "sidebar"],
  },
  {
    id: "cookie-consent",
    category: "feedback",
    name: "Cookie consent",
    alsoKnownAs: ["Cookie banner", "Consent bar", "Privacy banner"],
    description:
      "Non-blocking bar or modal asking for cookie/analytics consent.",
    promptTip:
      "Show a compact cookie consent bar with Accept / Reject / Manage choices; don’t block the whole page with a forced modal for basic consent.",
    exampleKey: "cookie-consent",
    tags: ["cookie", "consent", "privacy", "gdpr"],
  },
  {
    id: "typing-indicator",
    category: "feedback",
    name: "Typing indicator",
    alsoKnownAs: ["Is typing", "Composer dots", "Presence typing"],
    description:
      "Animated cue that another person is typing in chat or comments.",
    promptTip:
      "Show a typing indicator (three bouncing dots + name) near the thread; hide after idle and don’t block the composer.",
    exampleKey: "typing-indicator",
    tags: ["typing", "chat", "presence", "dots"],
  },
  {
    id: "popconfirm",
    category: "overlays",
    name: "Popconfirm",
    alsoKnownAs: ["Confirm popover", "Inline confirm", "Light confirm"],
    description:
      "Small confirm dialog anchored to the action instead of a full modal.",
    promptTip:
      "Use a popconfirm (popover with title + Cancel/OK) for medium-risk actions; reserve full alert dialogs for destructive irreversibility.",
    exampleKey: "popconfirm",
    tags: ["confirm", "popover", "inline", "delete"],
  },
  {
    id: "notification-center",
    category: "overlays",
    name: "Notification center",
    alsoKnownAs: ["Notification panel", "Inbox drawer", "Bell panel"],
    description:
      "Panel of recent alerts opened from a bell or inbox control.",
    promptTip:
      "Build a notification center: bell with unread count opens a panel of items (read/unread), mark-all, and empty state—not only a single toast.",
    exampleKey: "notification-center",
    tags: ["notifications", "inbox", "bell", "panel"],
  },
  {
    id: "filter-chips",
    category: "data-display",
    name: "Filter chips",
    alsoKnownAs: ["Facet chips", "Active filters", "Filter bar chips"],
    description:
      "Removable chips showing active filters in a results toolbar.",
    promptTip:
      "Represent active filters as dismissible chips in a filter bar (label + value + ×), with Clear all when more than one is applied.",
    exampleKey: "filter-chips",
    tags: ["filter", "chips", "facets", "toolbar"],
  },
  {
    id: "expandable-row",
    category: "data-display",
    name: "Expandable row",
    alsoKnownAs: ["Row expand", "Detail row", "Nested table row"],
    description:
      "Table row that expands to reveal nested detail without leaving the list.",
    promptTip:
      "Use expandable rows with a chevron and aria-expanded; show detail in a full-width nested panel under the row—keep the stage compact.",
    exampleKey: "expandable-row",
    tags: ["table", "expand", "detail", "row"],
  },
  {
    id: "simple-bar-chart",
    category: "data-display",
    name: "Simple bar chart",
    alsoKnownAs: ["Bar chart", "Horizontal bars", "Mini chart"],
    description:
      "Compact bar comparison for a few categories without a full charting library.",
    promptTip:
      "For 3–6 categories, use a simple bar chart (labels + proportional bars + tabular values); reserve heavy chart libs for interactive analytics.",
    exampleKey: "simple-bar-chart",
    tags: ["chart", "bars", "data", "viz"],
  },
  {
    id: "kanban-column",
    category: "data-display",
    name: "Kanban column",
    alsoKnownAs: ["Board column", "Pipeline column", "Card column"],
    description:
      "Vertical swimlane of cards for status-based boards (To do / Doing / Done).",
    promptTip:
      "Design kanban as labeled columns with card stacks and counts; keep cards short (title + meta) and allow drag between columns when interactive.",
    exampleKey: "kanban-column",
    tags: ["kanban", "board", "column", "cards"],
  },
  {
    id: "danger-zone",
    category: "surfaces",
    name: "Danger zone",
    alsoKnownAs: ["Destructive zone", "Delete account section"],
    description:
      "Isolated settings block for irreversible actions, visually warned.",
    promptTip:
      "Put irreversible actions in a danger zone card: destructive border/tint, plain-language risk, and a confirm step—never next to routine saves.",
    exampleKey: "danger-zone",
    tags: ["danger", "destructive", "settings", "delete"],
  },
  {
    id: "empty-search",
    category: "states",
    name: "Empty search results",
    alsoKnownAs: ["No search hits", "Search zero state"],
    description:
      "State when a query returns no matches, with ways to recover.",
    promptTip:
      "For empty search, show the query, suggest spelling/filters, and offer Clear search—not the same first-run empty illustration.",
    exampleKey: "empty-search",
    tags: ["search", "empty", "zero", "no-results"],
  },
  {
    id: "lib-form-schema",
    category: "library-practices",
    name: "Form schema wiring",
    alsoKnownAs: ["Zod + RHF", "Schema forms", "Typed validation"],
    description:
      "Validate forms with a schema library wired to field errors—not ad-hoc if checks.",
    promptTip:
      "Wire forms with a schema (Zod) + React Hook Form (or equivalent): one source of truth for types, validation, and field-level errors.",
    exampleKey: "lib-form-schema",
    tags: ["zod", "rhf", "schema", "forms", "validation"],
  },
  {
    id: "lib-compound-components",
    category: "library-practices",
    name: "Compound components",
    alsoKnownAs: ["Compound pattern", "Namespaced parts"],
    description:
      "API shape like Card/CardHeader/CardTitle that compose without prop soup.",
    promptTip:
      "Prefer compound components (Dialog + DialogTrigger + DialogContent) over one mega-component with 40 props—compose parts at the call site.",
    exampleKey: "lib-compound-components",
    tags: ["compound", "compose", "api", "shadcn"],
  },
  {
    id: "lib-polymorphic",
    category: "library-practices",
    name: "Polymorphic props discipline",
    alsoKnownAs: ["as prop", "Polymorphic components"],
    description:
      "Components that render as different elements must keep typing and a11y correct.",
    promptTip:
      "If you add as/asChild polymorphism, preserve ref typing and don’t strip native button/link semantics—prefer Radix Slot/asChild over unsafe as= hacks.",
    exampleKey: "lib-polymorphic",
    tags: ["polymorphic", "asChild", "typescript", "slot"],
  },
  {
    id: "lib-empty-error-pair",
    category: "library-practices",
    name: "Empty + error UI pairing",
    alsoKnownAs: ["Empty and error states", "Failure vs empty"],
    description:
      "Ship distinct empty and error presentations—never reuse one generic panel.",
    promptTip:
      "Pair empty and error UIs: empty invites the next action; error explains failure + retry. Don’t show “Nothing here” for a failed fetch.",
    exampleKey: "lib-empty-error-pair",
    tags: ["empty", "error", "states", "ux"],
  },
];

export function getCategoryById(id: CategoryId): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getElementsByCategory(categoryId: CategoryId): DesignElement[] {
  return ELEMENTS.filter((e) => e.category === categoryId);
}

export function getElementById(id: string): DesignElement | undefined {
  return ELEMENTS.find((e) => e.id === id);
}

export function getCatalogStats() {
  const byCategory = CATEGORIES.map((cat) => ({
    id: cat.id,
    name: cat.name,
    count: ELEMENTS.filter((e) => e.category === cat.id).length,
  }));
  return {
    totalElements: ELEMENTS.length,
    totalCategories: CATEGORIES.length,
    byCategory,
  };
}

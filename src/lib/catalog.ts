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
    alsoKnownAs: ["CTA button", "Solid button"],
    description: "Highest-emphasis action—filled brand color.",
    promptTip:
      "Make the primary CTA a solid filled button with brand background, white text, and clear hover state.",
    exampleKey: "primary-button",
    tags: ["cta", "action"],
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
    alsoKnownAs: ["Segmented tabs", "iOS segments"],
    description: "Compact mutually exclusive choices in a single control.",
    promptTip:
      "Use a segmented control for 2–4 peer options (Day/Week/Month) with one selected fill and equal-width segments.",
    exampleKey: "segmented-control",
    tags: ["segments", "toggle", "filter"],
  },
  {
    id: "skip-link",
    category: "navigation",
    name: "Skip link",
    alsoKnownAs: ["Skip to content"],
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
    alsoKnownAs: ["Content placeholder"],
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
    description: "Friendly screen when there's no data yet.",
    promptTip:
      "Design an empty state with illustration/icon, short explanation, and a primary action to create first item.",
    exampleKey: "empty-state",
    tags: ["zero-data", "onboarding"],
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
    alsoKnownAs: ["Dialog", "Lightbox (related)"],
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
    tags: ["sheet", "slide-over"],
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
    tags: ["search", "keyboard"],
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
    tags: ["kpi", "dashboard"],
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
    alsoKnownAs: ["Facepile"],
    description: "Overlapping avatars for multiple people.",
    promptTip:
      "Show an avatar group/facepile with overlapping circular images and a +N overflow count.",
    exampleKey: "avatar-group",
    tags: ["people", "facepile"],
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
    alsoKnownAs: ["Glassmorphism", "Frosted glass"],
    description: "Translucent blurred surface over content.",
    promptTip:
      "Create a frosted glass panel with bg-white/10 backdrop-blur border and soft shadow over a gradient.",
    exampleKey: "glassmorphism",
    tags: ["blur", "translucent"],
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
    alsoKnownAs: ["AI purple haze"],
    description:
      "The same indigo→violet→pink gradient every generic AI landing page ships.",
    promptTip:
      "Avoid the default purple-pink mesh hero. Use our brand neutrals with one restrained accent, or a photographic/textural background unique to the product.",
    promptKind: "avoid",
    exampleKey: "slop-purple-gradient",
    tags: ["gradient", "landing", "anti-pattern"],
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
    description: "clsx + tailwind-merge so consumer className can override safely.",
    promptTip:
      "Always pass className through cn()/twMerge in shared components so callers can extend without fighting conflicting utilities.",
    exampleKey: "lib-cn-merge",
    tags: ["cn", "tailwind-merge"],
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

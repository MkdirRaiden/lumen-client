// types/theme.ts

// For theme color maps (light.ts, dark.ts)
export type SemanticColor =
  | "--color-bg"
  | "--color-screen"
  | "--color-text"
  | "--color-primary"
  | "--color-secondary"
  | "--color-accent"
  | "--color-muted"
  | "--color-border"
  | "--color-focus"
  | "--color-danger"
  | "--color-surface"
  | "--shadow-color"
  | "--gradient-start"
  | "--gradient-end";

// For Tailwind class name helpers
export type SemanticToken =
  | "bg"
  | "screen"
  | "text"
  | "primary"
  | "secondary"
  | "accent"
  | "muted";

// Supported Tailwind class prefixes
export type TailwindPrefix = "bg" | "text" | "border" | "ring";

// Optional array of semantic tokens (if needed in utilities/dev preview)
export const semanticColor: SemanticColor[] = []; // optional placeholder

// types/theme.ts

export type SemanticColor =
  | "--color-bg"
  | "--color-screen"
  | "--color-text"
  | "--color-primary"
  | "--color-secondary"
  | "--color-accent"
  | "--color-muted"
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

export const semanticColor: SemanticColor[] = []; // not used, just placeholder

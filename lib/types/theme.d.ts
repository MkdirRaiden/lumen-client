// These match the keys used in light.ts and dark.ts
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
  | "--color-xp-bar"
  | "--color-avatar-ring"
  | "--color-card-bg"
  | "--color-verse-highlight"
  | "--color-tier-bronze"
  | "--color-tier-silver"
  | "--color-tier-gold"
  | "--color-tier-divine"
  | "--shadow-color"
  | "--gradient-start"
  | "--gradient-end";

// For mapping semantic color names to Tailwind tokens (optional)
export type SemanticToken =
  | "bg"
  | "screen"
  | "text"
  | "primary"
  | "secondary"
  | "accent"
  | "muted"
  | "card"
  | "xp-bar"
  | "tier"
  | "danger";

// Supported Tailwind class prefixes
export type TailwindPrefix = "bg" | "text" | "border" | "ring";

// Optional list of semantic color keys (e.g. for theming utilities)
export const semanticColor: SemanticColor[] = [
  "--color-bg",
  "--color-screen",
  "--color-text",
  "--color-primary",
  "--color-secondary",
  "--color-accent",
  "--color-muted",
  "--color-border",
  "--color-focus",
  "--color-danger",
  "--color-surface",
  "--color-xp-bar",
  "--color-avatar-ring",
  "--color-card-bg",
  "--color-verse-highlight",
  "--color-tier-bronze",
  "--color-tier-silver",
  "--color-tier-gold",
  "--color-tier-divine",
  "--shadow-color",
  "--gradient-start",
  "--gradient-end",
];

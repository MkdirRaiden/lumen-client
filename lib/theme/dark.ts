import { SemanticColor } from "@lib/types/theme";

const dark: Record<SemanticColor, string> = {
  "--color-bg": "15 15 15",
  "--color-screen": "24 24 24",
  "--color-text": "243 244 246",
  "--color-primary": "255 200 61", // Candlelight Gold
  "--color-secondary": "79 157 255", // Electric Blue
  "--color-accent": "44 44 44", // Dark Surface
  "--color-muted": "107 114 128",
  "--color-border": "60 60 60",
  "--color-focus": "255 221 102", // Brighter gold for focus ring
  "--color-danger": "239 68 68", // Tailwind red-500
  "--color-surface": "30 30 30 / 0.6", // For frosted surfaces

  "--shadow-color": "255 255 255 / 0.01",
  "--gradient-start": "255 200 61",
  "--gradient-end": "79 157 255",
};

export default dark;

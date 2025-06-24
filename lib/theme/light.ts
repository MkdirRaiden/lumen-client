import { SemanticColor } from "@ts-types/theme";

const light: Record<SemanticColor, string> = {
  "--color-bg": "253 253 253",
  "--color-screen": "245 245 245",
  "--color-text": "15 15 15",
  "--color-primary": "255 178 0", // Lumen Gold
  "--color-secondary": "0 91 187", // Trust Blue
  "--color-accent": "255 244 206",
  "--color-muted": "107 114 128",
  "--color-border": "222 222 222",
  "--color-focus": "255 200 61", // Match primary for focus
  "--color-danger": "220 38 38", // Tailwind red-600
  "--color-surface": "255 255 255 / 0.6",

  "--shadow-color": "0 0 0 / 0.06",
  "--gradient-start": "255 178 0",
  "--gradient-end": "255 212 121",
};

export default light;

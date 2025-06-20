import { SemanticColor } from "@ts-types/theme";

const light: Record<SemanticColor, string> = {
  "--color-bg": "253 253 253", // Pure white for header/tab
  "--color-screen": "245 245 245", // 👈 Softer background for screens
  "--color-text": "26 26 26",
  "--color-primary": "255 178 0", // Lumen Gold
  "--color-secondary": "0 91 187", // Trust Blue
  "--color-accent": "255 244 206", // Gold Tint
  "--color-muted": "156 163 175", // Light Gray
  "--shadow-color": "0 0 0 / 0.06",
  "--gradient-start": "255 178 0",
  "--gradient-end": "255 212 121",
};

export default light;

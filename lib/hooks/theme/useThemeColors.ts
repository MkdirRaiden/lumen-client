import type { SemanticColor } from "@lib/types/theme";
import { useTheme } from "./useTheme";

const toValidColor = (rgbString: string): string => {
  // Handle raw "15 15 15" -> convert to "rgb(15, 15, 15)"
  if (/^\d+\s\d+\s\d+$/.test(rgbString)) {
    const [r, g, b] = rgbString.split(" ");
    return `rgb(${r.trim()}, ${g.trim()}, ${b.trim()})`;
  }
  return rgbString; // If already valid (hex or rgb())
};

export const useThemeColors = () => {
  const { themeColors } = useTheme();

  const get = (token: SemanticColor): string =>
    toValidColor(themeColors[token]);

  return {
    get,
    all: themeColors,
  };
};

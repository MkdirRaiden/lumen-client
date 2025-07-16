import type { SemanticColor } from "@lib/types/theme";
import { useTheme } from "./useTheme";

const toValidColor = (rgbString: string): string => {
  if (/^\\d+\\s\\d+\\s\\d+$/.test(rgbString)) {
    return `rgb(${rgbString})`;
  }
  return rgbString;
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

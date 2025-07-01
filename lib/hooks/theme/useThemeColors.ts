import { ThemeContext } from "@lib/context/ThemeContext";
import type { SemanticColor } from "@lib/types/theme";
import { useContext } from "react";

const toValidColor = (rgbString: string): string => {
  if (/^\d+\s\d+\s\d+$/.test(rgbString)) {
    return `rgb(${rgbString})`;
  }
  return rgbString;
};

export const useThemeColors = () => {
  const { themeColors } = useContext(ThemeContext);

  const get = (token: SemanticColor): string => {
    const raw = themeColors[token];
    return toValidColor(raw);
  };

  return {
    get,
    all: themeColors,
  };
};

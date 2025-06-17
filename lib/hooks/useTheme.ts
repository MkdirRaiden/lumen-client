import { ThemeContext } from "@lib/context/ThemeContext";
import type { SemanticColor } from "@ts-types/theme";
import { useContext } from "react";

/** Access full theme context */
export const useTheme = () => useContext(ThemeContext);

/** Just check if the theme is ready */
export const useThemeReady = () => useContext(ThemeContext).isReady;

/** Access theme color tokens safely */
export const useThemeColors = () => {
  const { themeColors } = useContext(ThemeContext);

  const get = (token: SemanticColor): string => {
    return themeColors[token];
  };

  return {
    get,
    all: themeColors,
  };
};

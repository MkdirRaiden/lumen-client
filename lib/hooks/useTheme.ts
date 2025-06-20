import { ThemeContext } from "@lib/context/ThemeContext";
import type { SemanticColor } from "@ts-types/theme";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);

export const useThemeReady = () => useContext(ThemeContext).isReady;

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

export const useThemeVersion = () => useContext(ThemeContext).themeVersion;

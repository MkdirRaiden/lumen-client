import type { SemanticToken, TailwindPrefix } from "@lib/types/theme";
import { useTheme } from "./useTheme";

export const useThemeStyles = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const getClass = (prefix: TailwindPrefix, token: SemanticToken): string =>
    `${prefix}-${token}`;

  const getClassWithOpacity = (
    prefix: TailwindPrefix,
    token: SemanticToken,
    opacity: number
  ): string => `${prefix}-${token}/${opacity}`;

  const getVar = (cssVar: string): string => `var(${cssVar})`;

  const styleVar = (property: string, cssVar: string) => ({
    [property]: getVar(cssVar),
  });

  return {
    theme,
    isDark,
    getClass,
    getClassWithOpacity,
    getVar,
    styleVar,
  };
};

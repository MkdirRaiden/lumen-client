import { ThemeContext } from "@lib/context/ThemeContext";
import type { SemanticToken, TailwindPrefix } from "@ts-types/theme";
import { useContext } from "react";

export const useThemeStyles = () => {
  const { theme } = useContext(ThemeContext);

  const tw: Record<SemanticToken | "border" | "card", string> = {
    bg: "bg-bg",
    screen: "bg-screen",
    text: "text-text",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted",
    border: "border-muted",
    card: "bg-screen",
  };

  const getClass = (prefix: TailwindPrefix, token: SemanticToken): string =>
    `${prefix}-${token}`;

  const getClassWithOpacity = (
    prefix: TailwindPrefix,
    token: SemanticToken,
    opacity: number
  ): string => `${prefix}-${token}/${opacity}`;

  const getVar = (cssVar: string): string => `var(${cssVar})`;

  const styleVar = (property: string, cssVar: string) => ({
    [property]: `var(${cssVar})`,
  });

  const isDark = theme === "dark";

  return {
    theme,
    isDark,
    tw,
    getClass,
    getClassWithOpacity,
    getVar,
    styleVar,
  };
};

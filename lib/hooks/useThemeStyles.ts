// hooks/useThemeStyles.ts
import { ThemeContext } from "@lib/context/ThemeContext";
import type { SemanticToken } from "@ts-types/theme";
import { useContext } from "react";

export const useThemeStyles = () => {
  const { theme } = useContext(ThemeContext);

  // Semantic Tailwind class shortcuts
  const tw = {
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

  // Dynamically create a class: e.g., getClass('bg', 'accent') → 'bg-accent'
  const getClass = (
    prefix: "bg" | "text" | "border" | "ring",
    token: SemanticToken
  ) => `${prefix}-${token}`;

  // For raw inline style usage: e.g., getVar('--color-bg') → 'var(--color-bg)'
  const getVar = (cssVar: string) => `var(${cssVar})`;

  return {
    theme,
    tw,
    getClass,
    getVar,
  };
};

import { getInitialTheme, saveThemeToStorage } from "@utils/theme/themeStorage";
import React, { createContext, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  useColorScheme as useSystemColorScheme,
  View,
} from "react-native";

import dark from "@lib/theme/dark";
import light from "@lib/theme/light";

type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  themeColors: typeof light;
  isReady: boolean;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  themeColors: light,
  isReady: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useSystemColorScheme();
  const [theme, setTheme] = useState<Theme>("light");
  const [themeColors, setThemeColors] = useState(light);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const fallback = systemScheme === "dark" ? "dark" : "light";
        const storedTheme = await getInitialTheme(fallback);
        setTheme(storedTheme);
        setThemeColors(storedTheme === "dark" ? dark : light);
      } catch (e) {
        console.error("❌ Theme loading error:", e);
      } finally {
        setIsReady(true); //
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (Platform.OS === "web" && isReady) {
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      for (const [key, value] of Object.entries(themeColors)) {
        root.style.setProperty(key, value);
      }
    }
  }, [theme, themeColors, isReady]);

  const toggleTheme = async () => {
    if (!isReady) return;
    setIsReady(false);
    const next = theme === "dark" ? "light" : "dark";
    await saveThemeToStorage(next);
    setTheme(next);
    setThemeColors(next === "dark" ? dark : light);
    setIsReady(true);
  };

  const themeStyle =
    Platform.OS === "web"
      ? undefined
      : StyleSheet.create({
          root: Object.fromEntries(
            Object.entries(themeColors).map(([k, v]) => [k, v])
          ) as any,
        }).root;

  const Wrapper = Platform.OS === "web" ? "div" : View;
  const wrapperProps =
    Platform.OS === "web"
      ? { className: theme === "dark" ? "dark flex flex-1" : "flex flex-1" }
      : {
          className: theme === "dark" ? "dark flex-1" : "flex-1",
          style: themeStyle,
        };

  if (!isReady) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeColors,
        isReady,
      }}
    >
      <Wrapper {...wrapperProps}>{children}</Wrapper>
    </ThemeContext.Provider>
  );
};

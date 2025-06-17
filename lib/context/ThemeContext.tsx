import {
  loadThemeFromStorage,
  saveThemeToStorage,
} from "@utils/theme/themeStorage";
import React, { createContext, useEffect, useState } from "react";
import {
  Platform,
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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const storedTheme = await loadThemeFromStorage(
        systemScheme === "dark" ? "dark" : "light"
      );
      setTheme(storedTheme);
      setIsReady(true);
    };
    init();
  }, [systemScheme]);

  useEffect(() => {
    if (Platform.OS === "web") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = async () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    await saveThemeToStorage(next);
  };

  const isWeb = Platform.OS === "web";
  const Wrapper = isWeb ? "div" : View;
  const wrapperProps = isWeb
    ? { className: theme === "dark" ? "dark flex flex-1" : "flex flex-1" }
    : { className: theme === "dark" ? "dark flex-1" : "flex-1" };

  if (!isReady) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        themeColors: theme === "dark" ? dark : light,
        isReady,
      }}
    >
      <Wrapper {...wrapperProps}>{children}</Wrapper>
    </ThemeContext.Provider>
  );
};

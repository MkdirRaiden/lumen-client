import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Platform,
  useColorScheme as useSystemColorScheme,
  View,
} from "react-native";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemTheme = useSystemColorScheme();
  const [theme, setTheme] = useState<Theme>(
    systemTheme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isWeb = Platform.OS === "web";
  const Wrapper = isWeb ? "div" : View;
  const wrapperProps = isWeb
    ? { className: theme === "dark" ? "dark flex flex-1" : "flex flex-1" }
    : { className: theme === "dark" ? "dark flex-1" : "flex-1" };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Wrapper {...wrapperProps}>{children}</Wrapper>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

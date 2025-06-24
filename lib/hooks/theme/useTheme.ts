import { ThemeContext } from "@lib/context/ThemeContext";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeContext);

export const useThemeReady = () => useContext(ThemeContext).isReady;

export const useThemeVersion = () => useContext(ThemeContext).themeVersion;

import AsyncStorage from "@react-native-async-storage/async-storage";

export const THEME_STORAGE_KEY = "user-theme";

export async function loadThemeFromStorage(
  systemTheme: "light" | "dark"
): Promise<"light" | "dark"> {
  const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return systemTheme;
}

export async function saveThemeToStorage(theme: "light" | "dark") {
  await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
}

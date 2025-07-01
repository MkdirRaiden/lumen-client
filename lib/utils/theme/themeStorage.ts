import AsyncStorage from "@react-native-async-storage/async-storage";

export const THEME_STORAGE_KEY = "user-theme";

// themeStorage.ts
export async function getInitialTheme(
  fallback: "light" | "dark"
): Promise<"light" | "dark"> {
  try {
    const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : fallback;
  } catch (err) {
    console.error(" Error loading theme:", err);
    return fallback;
  }
}

export async function saveThemeToStorage(theme: "light" | "dark") {
  try {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (err) {
    console.error(" Failed to save theme:", err);
  }
}

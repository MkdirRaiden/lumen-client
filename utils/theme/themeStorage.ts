import AsyncStorage from "@react-native-async-storage/async-storage";

export const THEME_STORAGE_KEY = "user-theme";

export async function loadThemeFromStorage(
  systemTheme: "light" | "dark"
): Promise<"light" | "dark"> {
  try {
    console.log("📦 Trying to load theme from storage...");
    const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
    console.log("🔍 Raw stored theme:", stored);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return systemTheme;
  } catch (err) {
    console.error("❌ Error reading theme from AsyncStorage:", err);
    return systemTheme; // fallback no matter what
  }
}

export async function saveThemeToStorage(theme: "light" | "dark") {
  try {
    await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
    console.log("💾 Theme saved to storage:", theme);
  } catch (err) {
    console.error("❌ Failed to save theme:", err);
  }
}

import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/useTheme";
import * as Haptics from "expo-haptics";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

export const ThemeToggle = () => {
  const { theme, toggleTheme, themeVersion } = useTheme(); // 👈 include version
  const { get } = useThemeColors();
  const isDark = theme === "dark";

  const handleToggle = () => {
    Haptics.selectionAsync();
    toggleTheme();
  };

  return (
    <Pressable
      onPress={handleToggle}
      accessibilityLabel="Toggle theme"
      accessibilityRole="button"
      className="p-2 rounded-full bg-muted/10"
    >
      <Animated.View
        key={themeVersion}
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
      >
        <Feather
          name={isDark ? "sun" : "moon"}
          size={20}
          color={`rgb(${get("--color-text")})`}
        />
      </Animated.View>
    </Pressable>
  );
};

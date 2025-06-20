import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/useTheme";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

export const ThemeToggle = () => {
  const { theme, toggleTheme, isReady } = useTheme();
  const { get } = useThemeColors();
  const isDark = theme === "dark";

  if (!isReady) return null;

  return (
    <Pressable
      onPress={toggleTheme}
      accessibilityLabel="Toggle theme"
      accessibilityRole="button"
      className="p-2 rounded-full bg-muted/20"
    >
      <Animated.View
        key={theme}
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
      >
        <Feather
          name={isDark ? "sun" : "moon"}
          size={20}
          color={`rgb(${get("--color-text")})`} // ✅ Fully reactive via hook
        />
      </Animated.View>
    </Pressable>
  );
};

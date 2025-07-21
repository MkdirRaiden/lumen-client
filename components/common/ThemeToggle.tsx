import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/theme";
import * as Haptics from "expo-haptics";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

export const ThemeToggle = () => {
  const { theme, toggleTheme, themeVersion } = useTheme();
  const { get } = useThemeColors();
  const isDark = theme === "dark";

  const handleToggle = () => {
    Haptics.selectionAsync();
    toggleTheme();
  };
  // console.log(get("--color-text"));

  return (
    <Pressable
      onPress={handleToggle}
      accessibilityLabel="Toggle theme"
      accessibilityRole="button"
      className="p-2 rounded-full bg-muted/10"
    >
      <Animated.View
        key={themeVersion} // ensures reanimation on theme switch
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
      >
        <Feather
          name={isDark ? "sun" : "moon"}
          size={20}
          color={get("--color-text")}
        />
      </Animated.View>
    </Pressable>
  );
};

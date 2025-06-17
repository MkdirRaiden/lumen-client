// components/theme/ThemeToggle.tsx
import { useTheme } from "@lib/hooks/useTheme";
import { Moon, Sun } from "lucide-react-native";
import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Pressable
      onPress={toggleTheme}
      accessibilityLabel="Toggle theme"
      className="p-2 rounded-full bg-muted/20"
    >
      <Animated.View
        key={theme} // triggers animation when theme changes
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
      >
        {isDark ? (
          <Sun size={20} className="text-text" />
        ) : (
          <Moon size={20} className="text-text" />
        )}
      </Animated.View>
    </Pressable>
  );
};

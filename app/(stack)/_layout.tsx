import { useThemeColors } from "@lib/hooks/useTheme";
import { Stack } from "expo-router";

export default function StackLayout() {
  const { get } = useThemeColors();

  const background = `rgb(${get("--color-bg")})`;
  const foreground = `rgb(${get("--color-text")})`;

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: background,
        },
        headerTintColor: foreground,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 18,
        },
        contentStyle: {
          backgroundColor: background,
        },
        animation: "fade", // optional: can be changed to 'slide_from_right' etc.
        headerShadowVisible: false, // cleaner look (enable if needed)
      }}
    />
  );
}

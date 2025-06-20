// app/(stack)/_layout.tsx
import { useThemeColors } from "@lib/hooks/useTheme";
import { Stack } from "expo-router";

export default function StackLayout() {
  const { get } = useThemeColors();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: `rgb(${get("--color-bg")})`,
        },
        headerTintColor: `rgb(${get("--color-text")})`,
        contentStyle: {
          backgroundColor: `rgb(${get("--color-bg")})`,
        },
      }}
    />
  );
}

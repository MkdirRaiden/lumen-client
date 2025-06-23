// app/(stack)/_layout.tsx

import { useThemeColors } from "@lib/hooks/useTheme";
import { getRouteName } from "@utils/routeNames";
import { Stack } from "expo-router";

export default function StackLayout() {
  const { get } = useThemeColors();

  const background = `rgb(${get("--color-bg")})`;
  const foreground = `rgb(${get("--color-text")})`;

  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
        headerShown: false,
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
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name={getRouteName("onboarding1")} />
      <Stack.Screen name={getRouteName("onboarding2")} />
      <Stack.Screen name={getRouteName("onboarding3")} />
      <Stack.Screen name={getRouteName("onboarding4")} />
      <Stack.Screen name={getRouteName("truth")} options={{ title: "Truth" }} />
    </Stack>
  );
}

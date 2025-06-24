import { useThemeColors } from "@lib/hooks/theme";
import { getRouteName } from "@utils/routeNames";
import { Stack } from "expo-router";
import { useMemo } from "react";

export default function StackLayout() {
  const { get } = useThemeColors();

  const { background, foreground } = useMemo(
    () => ({
      background: `rgb(${get("--color-bg")})`,
      foreground: `rgb(${get("--color-text")})`,
    }),
    [get]
  );

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

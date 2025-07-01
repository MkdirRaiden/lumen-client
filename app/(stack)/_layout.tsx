import { StackHeader } from "@components/common/StackHeader";
import { useThemeColors } from "@lib/hooks/theme";
import { routeNames } from "@utils/routes/routeNames";
import { Stack, usePathname } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const titles: Record<string, string> = {
  "ask-lumen": "Ask Lumen",
  truth: "Truth",
};

export default function StackLayout() {
  const { get } = useThemeColors();
  const pathname = usePathname();
  const key = pathname.split("/")[1]; // e.g., "ask-lumen"
  const title = titles[key] || "";
  const insets = useSafeAreaInsets();

  const { background, foreground } = useMemo(
    () => ({
      background: `rgb(${get("--color-screen")})`,
      foreground: `rgb(${get("--color-text")})`,
    }),
    [get]
  );

  return (
    <View className="flex-1" style={{ backgroundColor: background }}>
      {/* Stack header only if route has a title */}
      {!!title && (
        <View style={{ paddingTop: insets.top }}>
          <StackHeader title={title} showBack />
        </View>
      )}

      {/* Stack screens */}
      <Stack
        screenOptions={{
          headerShown: false, // We use StackHeader manually
          animation: "fade",
          contentStyle: {
            backgroundColor: background,
          },
        }}
      >
        {/* Onboarding screens - header hidden */}
        <Stack.Screen name={routeNames.onboarding1} />
        <Stack.Screen name={routeNames.onboarding2} />
        <Stack.Screen name={routeNames.onboarding3} />
        <Stack.Screen name={routeNames.onboarding4} />

        {/* Content screens - header rendered manually */}
        <Stack.Screen name={routeNames.askLumen} />
        <Stack.Screen name={routeNames.truth} />
      </Stack>
    </View>
  );
}

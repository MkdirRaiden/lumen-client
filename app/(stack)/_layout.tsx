import { StackHeader } from "@components/common/StackHeader";
import { useThemeColors } from "@lib/hooks/theme";
import { routeNames } from "@utils/routes/routeNames";
import { Stack, usePathname } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Dynamic titles based on route segments
const titles: Record<string, string> = {
  "ask-lumen": "Ask Lumen",
  truth: "Truth",
  rhetoric: "Rhetoric",
  awakening: "Awakening",
  encounter: "Divine Encounter",
  scripture: "Scripture",
  book: "Book",
  voice: "Suppressed Voice",
  figures: "Figures",
  injustice: "Injustice",
  vision: "Lumen's Vision",
  awakened: "Hall of Awakened Ones",
};

export default function StackLayout() {
  const { get } = useThemeColors();
  const pathname = usePathname();
  const key = pathname.split("/")[1]; // e.g., "encounter"
  const title = titles[key] ?? "";
  const insets = useSafeAreaInsets();

  const { background } = useMemo(
    () => ({
      background: `rgb(${get("--color-screen")})`,
    }),
    [get]
  );

  return (
    <View className="flex-1" style={{ backgroundColor: background }}>
      {!!title && (
        <View style={{ paddingTop: insets.top }}>
          <StackHeader title={title} showBack />
        </View>
      )}

      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
          contentStyle: { backgroundColor: background },
        }}
      >
        {/* Onboarding Screens */}
        <Stack.Screen name={routeNames["onboarding.intro"]} />
        <Stack.Screen name={routeNames["onboarding.purpose"]} />
        <Stack.Screen name={routeNames["onboarding.geospawn"]} />
        <Stack.Screen name={routeNames["onboarding.system"]} />
        <Stack.Screen name={routeNames["onboarding.intention"]} />

        {/* Modules */}
        <Stack.Screen name={routeNames["modules.truth"]} />
        <Stack.Screen name={routeNames["modules.rhetoric"]} />
        <Stack.Screen name={routeNames["modules.myths"]} />
        <Stack.Screen name={routeNames["modules.awakening"]} />

        {/* Static Pages */}
        <Stack.Screen name={routeNames["askLumen"]} />
        <Stack.Screen name={routeNames["awakened"]} />
        <Stack.Screen name={routeNames["vision"]} />

        {/* Dynamic Paths */}
        <Stack.Screen name={routeNames["encounter"]} />
        <Stack.Screen name={routeNames["scripture"]} />
        <Stack.Screen name={routeNames["book"]} />
        <Stack.Screen name={routeNames["voice"]} />
        <Stack.Screen name={routeNames["figures.list"]} />
        <Stack.Screen name={routeNames["figures.detail"]} />
        <Stack.Screen name={routeNames["injustice"]} />
      </Stack>
    </View>
  );
}

import { Header } from "@components/common/Header";
import { TabIcon } from "@components/navigation/TabIcon";
import { getTabBarOptions } from "@lib/constants/navigation";
import { useThemeColors } from "@lib/hooks/theme";

import { Tabs, usePathname } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabMap = {
  journey: { icon: "compass", title: "Journey" },
  ark: { icon: "shield", title: "Ark" },
  insight: { icon: "book-open", title: "Insight" },
  explore: { icon: "search", title: "Explore" },
  profile: { icon: "user", title: "You" },
} as const;

export default function TabsLayout() {
  const { get } = useThemeColors();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  const currentRoute = pathname?.split("/")[1] ?? "journey";
  const headerTitle =
    tabMap[currentRoute as keyof typeof tabMap]?.title ?? "Lumen";

  const tabColors = useMemo(() => {
    return {
      background: `rgb(${get("--color-bg")})`,
      shadow: `rgb(${get("--shadow-color")})`,
      active: `rgb(${get("--color-primary")})`,
      inactive: `rgb(${get("--color-text")})`,
    };
  }, [get]);

  return (
    <View className="flex-1">
      <View style={{ paddingTop: insets.top }}>
        <Header title={headerTitle} />
      </View>

      <Tabs
        screenOptions={({ route }) => {
          const tab = tabMap[route.name as keyof typeof tabMap];

          return {
            ...getTabBarOptions({ insets, colors: tabColors }),
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                name={tab.icon}
                focused={focused}
                size={size}
                color={color}
                label={tab.title}
              />
            ),
          };
        }}
      >
        {Object.keys(tabMap).map((key) => (
          <Tabs.Screen
            key={key}
            name={key}
            options={{ title: tabMap[key as keyof typeof tabMap].title }}
          />
        ))}
      </Tabs>
    </View>
  );
}

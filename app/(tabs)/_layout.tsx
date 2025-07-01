import { Header } from "@components/common/Header";
import { TabIcon } from "@components/navigation/TabIcon";
import { useThemeColors } from "@lib/hooks/theme";
import { Tabs, usePathname } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const iconMap: Record<
  string,
  keyof typeof import("@expo/vector-icons").Feather.glyphMap
> = {
  home: "home",
  explore: "compass",
  learn: "book-open",
  settings: "settings",
};

export default function TabsLayout() {
  const { get } = useThemeColors();
  const insets = useSafeAreaInsets();

  const pathname = usePathname();
  const currentRoute = pathname?.split("/")[1] || "home";

  const pageTitles: Record<string, string> = {
    home: "Home",
    explore: "Explore",
    learn: "Learn",
    settings: "Settings",
  };

  const headerTitle = pageTitles[currentRoute ?? ""] ?? "";

  const { tabBarBackground, tabBarShadow, activeColor, inactiveColor } =
    useMemo(
      () => ({
        tabBarBackground: `rgb(${get("--color-bg")})`,
        tabBarShadow: `rgb(${get("--shadow-color")})`,
        activeColor: `rgb(${get("--color-primary")})`,
        inactiveColor: `rgb(${get("--color-text")})`,
      }),
      [get]
    );

  return (
    <View className="flex-1">
      {/* App Header with safe area */}
      <View style={{ paddingTop: insets.top }}>
        <Header title={headerTitle} />
      </View>

      <Tabs
        screenOptions={({ route }) => {
          const iconName = iconMap[route.name] ?? "circle";

          return {
            headerShown: false,
            tabBarShowLabel: false, // we render label ourselves
            tabBarActiveTintColor: activeColor,
            tabBarInactiveTintColor: inactiveColor,
            tabBarStyle: {
              backgroundColor: tabBarBackground,
              paddingTop: 8,
              paddingBottom: insets.bottom || 8,
              height: 64 + (insets.bottom || 0),
              borderTopWidth: 0,
              borderTopColor: tabBarShadow,
              shadowColor: tabBarShadow,
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 4,
              overflow: "visible",
            },
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                name={iconName}
                focused={focused}
                size={size}
                color={color}
                label={pageTitles[route.name]}
              />
            ),
          };
        }}
      >
        <Tabs.Screen name="home" options={{ title: "Home" }} />
        <Tabs.Screen name="explore" options={{ title: "Explore" }} />
        <Tabs.Screen name="learn" options={{ title: "Learn" }} />
        <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      </Tabs>
    </View>
  );
}

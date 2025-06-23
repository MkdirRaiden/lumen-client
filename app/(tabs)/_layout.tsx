import { Header } from "@components/common/Header";
import { TabIcon } from "@components/navigation/TabIcon";
import { useThemeColors } from "@lib/hooks/useTheme";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const { get } = useThemeColors();
  const insets = useSafeAreaInsets();

  const tabBarBackground = `rgb(${get("--color-bg")})`;
  const tabBarShadow = `rgb(${get("--shadow-color")})`;
  const activeColor = `rgb(${get("--color-primary")})`;
  const inactiveColor = `rgb(${get("--color-text")})`;
  const activeBg = `rgba(${get("--color-primary")}, 0.1)`;

  return (
    <View className="flex-1">
      <View style={{ paddingTop: insets.top }}>
        <Header />
      </View>

      <Tabs
        screenOptions={({ route }) => {
          const iconMap = {
            home: "home",
            explore: "compass",
            learn: "book-open",
            settings: "settings",
          } as const;

          return {
            headerShown: false,
            tabBarActiveTintColor: activeColor,
            tabBarInactiveTintColor: inactiveColor,
            tabBarStyle: {
              backgroundColor: tabBarBackground,
              paddingBottom: insets.bottom || 8,
              paddingTop: 8,
              height: 64 + (insets.bottom || 0),
              borderTopWidth: 0,
              shadowColor: tabBarShadow,
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 4,
              overflow: "visible",
            },
            tabBarIcon: ({ focused, color, size }) => (
              <TabIcon
                name={iconMap[route.name as keyof typeof iconMap]}
                focused={focused}
                size={size}
                color={color}
                backgroundColor={activeBg}
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

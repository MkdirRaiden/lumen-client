import { Header } from "@components/common/Header";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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

  return (
    <View className="flex-1">
      {/* 🔒 Persistent header for all tab screens */}
      <Header />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: activeColor,
          tabBarInactiveTintColor: inactiveColor,
          tabBarStyle: {
            backgroundColor: tabBarBackground,
            paddingBottom: insets.bottom || 8,
            paddingTop: 8,
            height: 60 + (insets.bottom || 0),
            borderTopWidth: 0,
            shadowColor: tabBarShadow,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4, // Android shadow
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="explore" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="learn"
          options={{
            title: "Learn",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="book" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

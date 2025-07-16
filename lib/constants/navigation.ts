import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

export const getTabBarOptions = ({
  insets,
  colors,
}: {
  insets: { bottom: number };
  colors: {
    background: string;
    shadow: string;
    active: string;
    inactive: string;
  };
}): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: colors.active,
  tabBarInactiveTintColor: colors.inactive,
  tabBarStyle: {
    backgroundColor: colors.background,
    paddingTop: 8,
    paddingBottom: insets.bottom || 8,
    height: 64 + (insets.bottom || 0),
    borderTopWidth: 0,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    overflow: "visible",
  },
});

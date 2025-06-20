import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

import LoadingScreen from "@components/common/LoadingScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useThemeReady } from "@lib/hooks/useTheme"; // ✅ import this hook
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans: require("@assets/fonts/IBM-PlexSans-Regular.ttf"),
    "IBMPlexSans-Bold": require("@assets/fonts/IBM-PlexSans-Bold.ttf"),
  });

  // ✅ Show loading screen *outside* ThemeProvider
  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <ThemeLayout />
    </ThemeProvider>
  );
}

// ✅ Inside ThemeLayout — check for theme readiness
function ThemeLayout() {
  const isReady = useThemeReady();

  const onLayout = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <View className="flex-1" onLayout={onLayout}>
      <ThemedStatusBar />
      <Slot />
    </View>
  );
}

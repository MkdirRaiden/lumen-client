import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import LoadingScreen from "@components/common/LoadingScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useThemeReady, useThemeVersion } from "@lib/hooks/useTheme";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans: require("@assets/fonts/IBM-PlexSans-Regular.ttf"),
    "IBMPlexSans-Bold": require("@assets/fonts/IBM-PlexSans-Bold.ttf"),
  });

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <ThemeLayout />
    </ThemeProvider>
  );
}

function ThemeLayout() {
  const isThemeReady = useThemeReady();
  const themeVersion = useThemeVersion();
  const [splashHidden, setSplashHidden] = useState(false);

  useEffect(() => {
    if (isThemeReady && !splashHidden) {
      SplashScreen.hideAsync().then(() => setSplashHidden(true));
    }
  }, [isThemeReady, splashHidden]);

  if (!isThemeReady || !splashHidden) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ThemedStatusBar />
      <Slot key={themeVersion} />
    </>
  );
}

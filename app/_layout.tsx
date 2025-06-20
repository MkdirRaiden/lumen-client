import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import LoadingScreen from "@components/common/LoadingScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useTheme } from "@lib/hooks/useTheme";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <ThemeProvider>
      <InnerLayout />
    </ThemeProvider>
  );
}

function InnerLayout() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans: require("@assets/fonts/IBM-PlexSans-Regular.ttf"),
    "IBMPlexSans-Bold": require("@assets/fonts/IBM-PlexSans-Bold.ttf"),
  });

  const { isReady: themeReady, theme } = useTheme(); // 👈 Include `theme` to trigger re-render on toggle

  const appReady = fontsLoaded && themeReady;

  useEffect(() => {
    if (appReady) {
      SplashScreen.hideAsync();
      console.log("🎉 SplashScreen hidden");
    }
  }, [appReady]);

  if (!appReady) return <LoadingScreen />;

  return (
    <>
      <ThemedStatusBar />
      <Slot />
    </>
  );
}

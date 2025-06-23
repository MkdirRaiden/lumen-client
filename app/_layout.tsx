import AppLayout from "@components/layouts/AppLayout";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans: require("@assets/fonts/IBM-PlexSans-Regular.ttf"),
    "IBMPlexSans-Bold": require("@assets/fonts/IBM-PlexSans-Bold.ttf"),
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppLayout fontsLoaded={fontsLoaded} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

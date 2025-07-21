// app/_layout.tsx
import "../splash-init"; // Must be first to lock splash screen

import AppLayout from "@components/layouts/AppLayout";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
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

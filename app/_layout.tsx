import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { useTheme } from "@lib/hooks/useTheme";
import { Slot } from "expo-router";
import { LogBox } from "react-native";
import "../global.css";

// Ignore this common non-critical warning
LogBox.ignoreLogs(["Cannot record touch end without a touch start"]);

function LayoutContent() {
  const { isReady } = useTheme();

  // Delay rendering until theme context is fully initialized
  if (!isReady) return null; // or you could return a <LoadingScreen />

  return (
    <>
      <ThemedStatusBar />
      <Slot />
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
}

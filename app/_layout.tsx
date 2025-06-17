import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { ThemeProvider } from "@lib/context/ThemeContext";
import { Slot } from "expo-router";
import { LogBox } from "react-native";
import "../global.css";

LogBox.ignoreLogs(["Cannot record touch end without a touch start"]);

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStatusBar />
      <Slot />
    </ThemeProvider>
  );
}

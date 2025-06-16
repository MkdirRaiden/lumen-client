import { Slot } from "expo-router";
import { LogBox } from "react-native";
import "../global.css"; //for web app
import { ThemeProvider } from "../lib/context/ThemeContext";

//suppressing dev warning
LogBox.ignoreLogs(["Cannot record touch end without a touch start"]);

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}

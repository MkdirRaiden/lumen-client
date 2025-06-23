import { useTheme } from "@lib/hooks/useTheme";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedStatusBar() {
  const { theme, themeColors } = useTheme();
  const insets = useSafeAreaInsets();

  const barStyle = theme === "dark" ? "light" : "dark";
  const backgroundColor = `rgb(${themeColors["--color-bg"]})`;

  return (
    <>
      {/* Simulated background behind translucent status bar */}
      {Platform.OS !== "web" && (
        <View
          style={{
            height: insets.top,
            backgroundColor,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        />
      )}

      <StatusBar
        style={barStyle}
        translucent
        // backgroundColor="transparent" ← optional; can be removed
      />
    </>
  );
}

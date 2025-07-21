// components/common/ThemedStatusBar.tsx
import { useTheme } from "@lib/hooks/theme";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedStatusBar() {
  const { theme, themeColors } = useTheme();
  const insets = useSafeAreaInsets();

  // Base background for the top safe area (behind the status bar)
  const backgroundColor = `rgb(${themeColors["--color-bg"]})`;

  // Fix for Android edge-to-edge behavior
  const barStyle =
    Platform.OS === "android"
      ? theme === "dark"
        ? "dark" // inverted for Android edge-to-edge
        : "light"
      : theme === "dark"
        ? "light"
        : "dark";

  return (
    <>
      {/* For Android/iOS only (not web) */}
      {Platform.OS !== "web" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: insets.top,
            backgroundColor,
            zIndex: 0, // keeps it behind header content
          }}
        />
      )}

      <StatusBar style={barStyle} translucent />
    </>
  );
}

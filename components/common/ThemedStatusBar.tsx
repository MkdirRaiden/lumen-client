import { useTheme } from "@lib/hooks/theme";
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
      {/* Render this only on native platforms, not web */}
      {Platform.OS !== "web" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: insets.top,
            backgroundColor,
            zIndex: 0, // stays behind header or content
          }}
        />
      )}

      <StatusBar style={barStyle} translucent />
    </>
  );
}

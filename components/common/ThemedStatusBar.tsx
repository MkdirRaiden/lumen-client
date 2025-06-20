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
      {/* Safe and correct View behind translucent StatusBar */}
      {Platform.OS !== "web" && (
        <View
          style={{
            height: insets.top,
            backgroundColor,
          }}
        />
      )}

      {/* Translucent status bar, no backgroundColor used here */}
      <StatusBar
        style={barStyle}
        translucent
        backgroundColor="transparent" // this avoids the warning
      />
    </>
  );
}

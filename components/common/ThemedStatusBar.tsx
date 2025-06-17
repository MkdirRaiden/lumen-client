import { useTheme } from "@lib/context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedStatusBar() {
  const { theme, themeColors } = useTheme();
  const insets = useSafeAreaInsets();

  const barStyle = theme === "dark" ? "light" : "dark";
  const backgroundColor = `rgb(${themeColors["--color-bg"]})`;

  return (
    <>
      {Platform.OS !== "web" && (
        <View
          style={{
            height: insets.top,
            backgroundColor,
          }}
        />
      )}
      <StatusBar style={barStyle} translucent />
    </>
  );
}

import LottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

import dark from "@lib/theme/dark";
import light from "@lib/theme/light";
import { getInitialTheme } from "@utils/theme/themeStorage";

export default function LoadingScreen() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Get persisted or system theme (fallback = light)
    getInitialTheme("light").then(setTheme);

    // Start the loading animation
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 100,
        duration: 1200,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Select theme tokens
  const themeColors = theme === "dark" ? dark : light;

  const cubeSource =
    theme === "dark"
      ? require("@assets/animations/lumen-cube-dark.json")
      : require("@assets/animations/lumen-cube-light.json");

  const backgroundColor = `rgb(${themeColors["--color-bg"]})`;
  const primaryColor = `rgb(${themeColors["--color-primary"]})`;
  const mutedColor = `rgb(${themeColors["--color-muted"]})`;

  return (
    <View
      className="flex-1 justify-center items-center"
      style={{ backgroundColor }}
    >
      {/* The Lumen cube animation */}
      <LottieView
        source={cubeSource}
        autoPlay
        loop
        style={{ width: 120, height: 120 }}
      />

      {/* The shimmer loading bar */}
      <View
        className="w-32 h-1.5 mt-6 rounded-full overflow-hidden"
        style={{ backgroundColor: `${mutedColor}33` }} // subtle bar background
      >
        <Animated.View
          className="absolute w-1/2 h-full rounded-full"
          style={{
            backgroundColor: primaryColor,
            transform: [{ translateX }],
          }}
        />
      </View>
    </View>
  );
}

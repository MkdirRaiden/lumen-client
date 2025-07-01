import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import dark from "@lib/theme/dark";
import light from "@lib/theme/light";
import { getInitialTheme } from "@utils/theme/themeStorage";

type LoadingScreenProps = {
  small?: boolean;
  message?: string;
};

export default function LoadingScreen({
  small = false,
  message,
}: LoadingScreenProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    getInitialTheme("light").then(setTheme);
  }, []);

  const themeColors = theme === "dark" ? dark : light;
  const loadingSource = require("@assets/animations/loading-animation.json");

  const backgroundColor = `rgb(${themeColors["--color-bg"]})`;
  const textColor = `rgb(${themeColors["--color-text"]})`;

  return (
    <View
      className={`items-center justify-center ${small ? "" : "flex-1"}`}
      style={small ? undefined : { backgroundColor }}
    >
      <LottieView
        source={loadingSource}
        autoPlay
        loop
        style={{ width: small ? 48 : 120, height: small ? 48 : 120 }}
      />

      {!!message && (
        <Text
          className="mt-2 text-sm text-center opacity-70"
          style={{ color: textColor }}
        >
          {message}
        </Text>
      )}
    </View>
  );
}

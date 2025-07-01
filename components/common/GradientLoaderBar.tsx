import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import { ColorValue, StyleSheet } from "react-native";

import { AnimatedView } from "@components/common/AnimatedView";
import { useAnimations } from "@lib/hooks/animation";
import { useThemeColors } from "@lib/hooks/theme";

export default function GradientLoaderBar() {
  const { get } = useThemeColors();

  const colors = useMemo<readonly [ColorValue, ColorValue]>(
    () => [`rgb(${get("--gradient-start")})`, `rgb(${get("--gradient-end")})`],
    [get]
  );

  const { translateX } = useAnimations({
    loopTranslateX: {
      from: -150,
      to: 300,
      duration: 1500,
    },
  });

  // Early return or fallback if translateX is undefined (optional)
  if (!translateX) return null;

  return (
    <AnimatedView
      className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted"
      style={{ overflow: "hidden" }}
    >
      <AnimatedView
        translateX
        style={{
          ...StyleSheet.absoluteFillObject,
          width: 150,
          transform: [{ translateX: translateX ?? 0 }],
        }}
      >
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      </AnimatedView>
    </AnimatedView>
  );
}

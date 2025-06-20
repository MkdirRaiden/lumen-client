import { useEffect, useRef } from "react";
import { Animated, Easing, ViewStyle } from "react-native";
import { Path, Svg } from "react-native-svg";

import { useThemeColors } from "@lib/hooks/useTheme";

export default function Flame() {
  const { get } = useThemeColors();
  const flicker = useRef(new Animated.Value(1)).current;

  // Start flicker animation on mount
  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(flicker, {
          toValue: 1.1,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(flicker, {
          toValue: 0.9,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ])
    );

    animation.start();

    return () => animation.stop(); // Cleanup on unmount
  }, [flicker]);

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    transform: [{ scale: flicker }],
  };

  return (
    <Animated.View style={animatedStyle}>
      <Svg
        height={40}
        width={24}
        viewBox="0 0 24 24"
        fill={`rgb(${get("--color-primary")})`}
      >
        <Path d="M12 2C10 6 7 9 7 13a5 5 0 0010 0c0-4-3-7-5-11z" />
      </Svg>
    </Animated.View>
  );
}

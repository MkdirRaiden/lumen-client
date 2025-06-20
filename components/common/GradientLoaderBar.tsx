import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Easing, View, ViewStyle } from "react-native";

import { useThemeColors } from "@lib/hooks/useTheme";

export default function GradientLoaderBar() {
  const { get } = useThemeColors();
  const translateX = useRef(new Animated.Value(-150)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: 300, // Adjust based on container width
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();
    return () => animation.stop(); // Clean up on unmount
  }, [translateX]);

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    width: 150,
    height: "100%",
    transform: [{ translateX }],
  };

  return (
    <View className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted">
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[
            `rgb(${get("--gradient-start")})`,
            `rgb(${get("--gradient-end")})`,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ flex: 1, borderRadius: 9999 }}
        />
      </Animated.View>
    </View>
  );
}

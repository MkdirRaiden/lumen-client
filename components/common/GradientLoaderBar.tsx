import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View, ViewStyle } from "react-native";

import { useThemeColors } from "@lib/hooks/theme";

export default function GradientLoaderBar() {
  const { get } = useThemeColors();
  const translateX = useRef(new Animated.Value(-150)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: 300, // Adjust if container width changes
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();
    return () => animation.stop(); // Cleanup
  }, [translateX]);

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    ...StyleSheet.absoluteFillObject,
    width: 150,
    transform: [{ translateX }],
  };

  return (
    <View className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted">
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={[get("--gradient-start"), get("--gradient-end")]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
}

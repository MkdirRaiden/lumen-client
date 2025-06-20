import { useThemeColors } from "@lib/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

export default function GradientLoaderBar() {
  const { get } = useThemeColors();
  const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 300, // Width over which it slides
        duration: 1500,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  return (
    <View className="h-2 w-full overflow-hidden rounded-full bg-muted mt-6">
      <Animated.View
        style={{
          width: 150,
          height: "100%",
          transform: [{ translateX }],
        }}
      >
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

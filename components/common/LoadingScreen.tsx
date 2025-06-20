import { useThemeColors } from "@lib/hooks/useTheme";
import { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Easing,
  Platform,
  Text,
  View,
} from "react-native";

export default function LoadingScreen() {
  console.log("⌛ Showing LoadingScreen");
  const { get } = useThemeColors();
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-bg">
      {/* Native spinner */}
      <ActivityIndicator
        size="large"
        color={
          Platform.OS === "web" ? undefined : `rgb(${get("--color-primary")})`
        }
      />

      {/* App tagline */}
      <Text className="mt-4 text-primary text-lg font-semibold tracking-wide">
        Lighting up truth...
      </Text>

      {/* Pulsing light orb */}
      <Animated.View
        className="mt-6"
        style={{
          width: 16,
          height: 16,
          borderRadius: 9999,
          backgroundColor: `rgb(${get("--color-primary")})`,
          shadowColor: `rgba(${get("--color-primary")}, 0.5)`,
          shadowOpacity: 0.6,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 12,
          transform: [{ scale: pulseAnim }],
        }}
      />
    </View>
  );
}

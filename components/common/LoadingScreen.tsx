import { useEffect, useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Easing,
  Platform,
  Text,
  View,
} from "react-native";

import { useThemeColors } from "@lib/hooks/useTheme";

export default function LoadingScreen() {
  const { get } = useThemeColors(); // Get CSS variable values

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
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
    );

    animation.start();
    return () => animation.stop(); // Clean up on unmount
  }, [pulseAnim]);

  const primary = `rgb(${get("--color-primary")})`;
  const background = `rgb(${get("--color-bg")})`;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator
        size="large"
        color={Platform.OS === "web" ? undefined : primary}
      />

      <Text
        style={{
          marginTop: 16,
          color: primary,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Lighting up truth...
      </Text>

      <Animated.View
        style={{
          marginTop: 24,
          width: 16,
          height: 16,
          borderRadius: 9999,
          backgroundColor: primary,
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

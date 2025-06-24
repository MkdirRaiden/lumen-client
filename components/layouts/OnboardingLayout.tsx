import { useThemeColors } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { Animated, PanResponder, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OnboardingLayoutProps {
  animation: any;
  title: string;
  subtitle: string;
  onNext: () => void;
  buttonLabel?: string;
  showSkip?: boolean;
  onSkip?: () => void;
  step?: number;
  totalSteps?: number;
}

export const OnboardingLayout = ({
  animation,
  title,
  subtitle,
  onNext,
  buttonLabel = "Continue",
  showSkip = false,
  onSkip,
  step = 1,
  totalSteps = 4,
}: OnboardingLayoutProps) => {
  const { get } = useThemeColors();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const dotSize = 12;
  const activeWidth = 24;
  const margin = 8;
  const indicatorSpacing = dotSize + margin * 2;

  const translateX = useRef(
    new Animated.Value((step - 1) * indicatorSpacing)
  ).current;
  const [mounted, setMounted] = useState(false);

  const onboardingScreens = [
    routes.stack.onboarding.screen1,
    routes.stack.onboarding.screen2,
    routes.stack.onboarding.screen3,
    routes.stack.onboarding.screen4,
  ];

  // Animate pill on step change
  useEffect(() => {
    const to = (step - 1) * indicatorSpacing;
    Animated.timing(translateX, {
      toValue: to,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [step]);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  // Swipe gesture to switch steps
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 10,
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 20 && step > 1) {
          router.push(onboardingScreens[step - 2]);
        } else if (gesture.dx < -20 && step < totalSteps) {
          router.push(onboardingScreens[step]);
        }
      },
    })
  ).current;

  return (
    <View
      className="flex-1 justify-center gap-6"
      style={{
        backgroundColor: `rgb(${get("--color-bg")})`,
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 24,
      }}
    >
      {/* Lottie Animation */}
      <View className="items-center">
        <LottieView
          source={animation}
          autoPlay
          loop
          style={{ width: 260, height: 260 }}
        />
      </View>

      {/* Text */}
      <View className="px-6">
        <Text
          className="text-2xl font-bold text-center text-text mb-3"
          accessibilityRole="header"
          accessibilityLabel={`Step ${step}: ${title}`}
        >
          {title}
        </Text>
        <Text className="text-base text-center text-text/75 mb-6 w-4/5 mx-auto">
          {subtitle}
        </Text>

        {/* Swipeable Indicators */}
        <View className="items-center mb-6">
          <View
            className="relative"
            {...panResponder.panHandlers}
            style={{
              width: totalSteps * indicatorSpacing,
              height: 30,
              justifyContent: "center",
            }}
          >
            {/* Static Dots */}
            <View className="flex-row justify-between items-center">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <Pressable
                  key={i}
                  onPress={() => router.push(onboardingScreens[i])}
                  className="mx-2"
                >
                  <View
                    className="rounded-full"
                    style={{
                      width: dotSize,
                      height: dotSize,
                      backgroundColor: `rgb(${get("--color-muted")})`,
                    }}
                  />
                </Pressable>
              ))}
            </View>

            {/* Animated Pill */}
            {mounted && (
              <Animated.View
                className="absolute rounded-full"
                style={{
                  width: activeWidth,
                  height: dotSize,
                  top: (30 - dotSize) / 2,
                  left: 0,
                  backgroundColor: `rgb(${get("--color-secondary")})`,
                  transform: [{ translateX }],
                }}
              />
            )}
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View className="px-6 min-h-40">
        <Pressable
          onPress={onNext}
          className="bg-primary py-4 rounded-xl items-center mb-3 w-2/3 mx-auto"
        >
          <Text className="text-white font-semibold text-base">
            {buttonLabel}
          </Text>
        </Pressable>

        {showSkip && onSkip && (
          <Pressable onPress={onSkip} className="py-3 items-center ">
            <Text className="text-muted">Skip</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

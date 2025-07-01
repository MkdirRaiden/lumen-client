import { AnimatedView } from "@components/common/AnimatedView";
import { useSwipeNavigation } from "@lib/hooks/common/useSwipeNavigation";
import { useThemeColors } from "@lib/hooks/theme";
import type { OnboardingRouteStrings } from "@lib/routes";
import { routes } from "@lib/routes";
import type { OnboardingLayoutProps } from "@lib/types";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  const margin = 5;
  const indicatorSpacing = dotSize + margin * 2;

  const onboardingScreens: OnboardingRouteStrings[] = [
    routes.stack.onboarding.screen1,
    routes.stack.onboarding.screen2,
    routes.stack.onboarding.screen3,
    routes.stack.onboarding.screen4,
  ];

  const panResponder = useSwipeNavigation({
    currentIndex: step - 1,
    total: onboardingScreens.length,
    routes: onboardingScreens,
  });

  return (
    <View
      className="flex-1 justify-around gap-6"
      style={{
        backgroundColor: `rgb(${get("--color-bg")})`,
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 24,
      }}
    >
      {/* Step indicators */}
      <AnimatedView fade duration={250}>
        <View
          className="relative items-center mx-auto"
          {...panResponder.panHandlers}
          style={{
            width: totalSteps * indicatorSpacing,
            height: 20,
            justifyContent: "center",
          }}
        >
          <View className="flex-row justify-between items-center w-full">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <Pressable
                key={i}
                onPress={() => router.push(onboardingScreens[i])}
                className="mx-1"
              >
                <View
                  className="rounded-full"
                  style={{
                    width: dotSize,
                    height: dotSize,
                    backgroundColor:
                      step === i + 1
                        ? `rgb(${get("--color-primary")})`
                        : `rgb(${get("--color-muted")})`,
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </AnimatedView>

      <View>
        {/* Animation */}
        <AnimatedView fade scale duration={400}>
          <View className="items-center">
            <LottieView
              source={animation}
              autoPlay
              loop
              style={{ width: 260, height: 260 }}
            />
          </View>
        </AnimatedView>

        {/* Title and subtitle */}
        <AnimatedView fade translateY duration={400}>
          <View className="px-6">
            <Text className="text-2xl font-bold text-center text-text mb-3">
              {title}
            </Text>
            <Text className="text-base text-center text-text/75 mb-3 w-4/5 mx-auto min-h-20">
              {subtitle}
            </Text>
          </View>
        </AnimatedView>
      </View>

      {/* Navigation buttons */}
      <AnimatedView fade translateY duration={300}>
        <View className="px-6 min-h-32">
          <Pressable
            onPress={onNext}
            className="bg-primary py-4 rounded-xl items-center mb-3 w-2/3 mx-auto"
          >
            <Text className="text-white font-semibold text-base">
              {buttonLabel}
            </Text>
          </Pressable>

          {showSkip && onSkip && (
            <Pressable onPress={onSkip} className="py-3 items-center">
              <Text className="text-muted">Skip</Text>
            </Pressable>
          )}
        </View>
      </AnimatedView>
    </View>
  );
};

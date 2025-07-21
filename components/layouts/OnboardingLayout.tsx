import { AnimatedView } from "@components/common/AnimatedView";
import { onboardingScreens } from "@lib/constants/onboardingSteps";
import { routes } from "@lib/constants/routes";
import { useSwipeNavigation } from "@lib/hooks/common/useSwipeNavigation";
import { useThemeColors } from "@lib/hooks/theme";
import { usePathname, useRouter } from "expo-router";
import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface OnboardingLayoutProps {
  children: ReactNode;
  onNext: () => void;
  buttonLabel?: string;
  skip?: boolean;
}

export const OnboardingLayout = ({
  children,
  onNext,
  buttonLabel = "Continue",
  skip = true,
}: OnboardingLayoutProps) => {
  const { get } = useThemeColors();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const router = useRouter();

  // Find current onboarding step by matching the end of the path
  const currentStepIndex = onboardingScreens.findIndex((route) =>
    pathname.endsWith(route.replace("/(stack)", ""))
  );
  const totalSteps = onboardingScreens.length;

  const dotSize = 10;
  const margin = 4;
  const indicatorSpacing = dotSize + margin * 2;

  const panResponder = useSwipeNavigation({
    currentIndex: currentStepIndex,
    total: totalSteps,
    routes: onboardingScreens,
  });

  return (
    <View
      className="flex-1 justify-between"
      style={{
        backgroundColor: `rgb(${get("--color-bg")})`,
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 24,
      }}
    >
      {/* Progress Dots */}
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
            {onboardingScreens.map((route, i) => (
              <Pressable
                key={route}
                onPress={() => router.push(route as any)}
                className="mx-1"
              >
                <View
                  className="rounded-full"
                  style={{
                    width: dotSize,
                    height: dotSize,
                    backgroundColor:
                      i === currentStepIndex
                        ? `rgb(${get("--color-primary")})`
                        : `rgb(${get("--color-muted")})`,
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </AnimatedView>

      {/* Main Content */}
      <AnimatedView fade scale duration={400}>
        <View className="px-6">{children}</View>
      </AnimatedView>

      {/* Bottom Buttons */}
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

          {/* Skip button visible on all but last screen */}
          {skip && currentStepIndex < totalSteps - 1 && (
            <Pressable
              onPress={() => router.replace(routes.tabs.journey as any)}
              className="py-3 items-center"
            >
              <Text className="text-muted">Skip</Text>
            </Pressable>
          )}
        </View>
      </AnimatedView>
    </View>
  );
};

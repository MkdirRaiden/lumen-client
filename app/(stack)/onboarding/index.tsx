import { withFadeScaleTransition } from "@components/common/withFadeScaleTransition";
import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { useTheme } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";

export default function OnboardingScreen1Inner() {
  const router = useRouter();
  const { theme } = useTheme();

  const animation =
    theme === "dark"
      ? require("@assets/animations/onboarding/onboarding-welcome-dark.json")
      : require("@assets/animations/onboarding/onboarding-welcome-light.json");

  return (
    <OnboardingLayout
      animation={animation}
      title="Ignite Your Inner Light"
      subtitle="Welcome to Lumen — where your journey toward truth begins with a spark of curiosity."
      buttonLabel="Begin the Journey →"
      onNext={() => router.push(routes.stack.onboarding.screen2)}
      showSkip
      step={1}
      onSkip={() => {
        router.replace(routes.tabs.home);
      }}
    />
  );
}

export const OnboardingScreen1 = withFadeScaleTransition(
  OnboardingScreen1Inner
);

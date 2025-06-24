import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { useTheme } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";

export default function OnboardingScreen2() {
  const router = useRouter();
  const { theme } = useTheme();

  const animation =
    theme === "dark"
      ? require("@assets/animations/onboarding/onboarding-religion-dark.json")
      : require("@assets/animations/onboarding/onboarding-religion-light.json");

  return (
    <OnboardingLayout
      animation={animation}
      title="Uncover Truths Across Faiths"
      subtitle="Compare beliefs, question traditions, and explore unbiased insights."
      buttonLabel="Continue →"
      onNext={() => router.push(routes.stack.onboarding.screen3)}
      showSkip
      step={2}
      onSkip={() => {
        router.replace(routes.tabs.home);
      }}
    />
  );
}

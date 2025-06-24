import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { useTheme } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";

export default function OnboardingScreen4() {
  const router = useRouter();
  const { theme } = useTheme();

  const animation =
    theme === "dark"
      ? require("@assets/animations/onboarding/onboarding-verify-dark.json")
      : require("@assets/animations/onboarding/onboarding-verify-light.json");

  return (
    <OnboardingLayout
      animation={animation}
      title="Verify, Don’t Just Believe"
      subtitle="Lumen helps you detect misinformation and uncover hidden patterns."
      buttonLabel="Enter Lumen →"
      step={4}
      onNext={() => {
        router.replace(routes.tabs.home);
      }}
    />
  );
}

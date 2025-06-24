import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { useTheme } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";

export default function OnboardingScreen3() {
  const router = useRouter();
  const { theme } = useTheme();

  const animation =
    theme === "dark"
      ? require("@assets/animations/lumen-cube-dark.json")
      : require("@assets/animations/lumen-cube-light.json");

  return (
    <OnboardingLayout
      animation={animation}
      title="Think Critically, See Clearly"
      subtitle="Explore science, history, and truth through the lens of logic and evidence."
      buttonLabel="Continue →"
      onNext={() => router.push(routes.stack.onboarding.screen4)}
      showSkip
      step={3}
      onSkip={() => {
        router.replace(routes.tabs.home);
      }}
    />
  );
}

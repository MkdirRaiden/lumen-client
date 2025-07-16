import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { routes } from "@lib/constants/routes";
import { useTheme } from "@lib/hooks/theme";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { Text, View } from "react-native";

export default function OnboardingSystemScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  const animation =
    theme === "dark"
      ? require("@assets/animations/onboarding/lumen-cube-dark.json")
      : require("@assets/animations/onboarding/lumen-cube-light.json");

  return (
    <OnboardingLayout
      onNext={() => router.push(routes.stack.onboarding.intention as any)}
    >
      <View className="items-center mb-6">
        <LottieView
          source={animation}
          autoPlay
          loop
          style={{ width: 260, height: 260 }}
        />
      </View>

      <Text className="text-2xl font-bold text-center text-text mb-3">
        Enter the Ark of Truth
      </Text>
      <Text className="text-base text-center text-text/75 mb-3 w-4/5 mx-auto min-h-20">
        Lumen’s Ark is a spiritual system that carries you across time,
        civilizations, and divine insight. Each step unlocks deeper layers of
        wisdom and justice.
      </Text>
    </OnboardingLayout>
  );
}

import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { routes } from "@lib/constants/routes";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const soulTypes = [
  {
    label: "Truth-Seeker",
    description: "You question everything and crave divine clarity.",
  },
  {
    label: "Rebel Soul",
    description: "You resist falsehood and seek justice.",
  },
  {
    label: "Rational Mind",
    description: "You value logic, evidence, and understanding.",
  },
  {
    label: "Mystic Heart",
    description: "You feel drawn to the unseen, sacred, and spiritual.",
  },
];

export default function OnboardingPurposeScreen() {
  const router = useRouter();

  return (
    <OnboardingLayout
      onNext={() => router.push(routes.stack.onboarding.geospawn as any)}
    >
      <Text className="text-2xl font-bold text-center text-text mb-3">
        What Kind of Soul Are You?
      </Text>
      <Text className="text-base text-center text-muted mb-6">
        Choose a path that resonates with your nature. This will shape your Ark
        experience.
      </Text>

      <View className="gap-4">
        {soulTypes.map((type) => (
          <Pressable
            key={type.label}
            onPress={() => router.push(routes.stack.onboarding.geospawn as any)}
            className="border border-border rounded-xl px-4 py-3 bg-surface"
          >
            <Text className="text-text font-semibold text-base">
              {type.label}
            </Text>
            <Text className="text-muted text-sm mt-1">{type.description}</Text>
          </Pressable>
        ))}
      </View>
    </OnboardingLayout>
  );
}

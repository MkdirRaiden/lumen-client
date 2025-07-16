import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { routes } from "@lib/constants/routes";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const origins = [
  {
    name: "Indus Valley",
    description: "Rooted in the ancient wisdom of the East.",
  },
  {
    name: "Mesopotamia",
    description: "Birthplace of prophets like Noah and Abraham.",
  },
  {
    name: "Ancient Egypt",
    description: "Land of Moses, Pharaoh, and divine signs.",
  },
  {
    name: "Canaan",
    description: "The prophetic corridor of Isaac, Jacob, David, Jesus.",
  },
  {
    name: "Unknown / Modern",
    description: "Begin from mystery. Let the Ark reveal your origin.",
  },
];

export default function OnboardingGeospawnScreen() {
  const router = useRouter();

  return (
    <OnboardingLayout
      onNext={() => router.push(routes.stack.onboarding.system as any)}
    >
      <Text className="text-2xl font-bold text-center text-text mb-3">
        Where Does Your Journey Begin?
      </Text>
      <Text className="text-base text-center text-muted mb-6">
        Choose your starting point — it could be civilizational, ancestral, or
        symbolic.
      </Text>

      <View className="gap-4">
        {origins.map((origin) => (
          <Pressable
            key={origin.name}
            onPress={() => router.push(routes.stack.onboarding.system as any)}
            className="border border-border rounded-xl px-4 py-3 bg-surface"
          >
            <Text className="text-text font-semibold text-base">
              {origin.name}
            </Text>
            <Text className="text-muted text-sm mt-1">
              {origin.description}
            </Text>
          </Pressable>
        ))}
      </View>
    </OnboardingLayout>
  );
}

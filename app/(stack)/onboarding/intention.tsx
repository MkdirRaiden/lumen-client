import { OnboardingLayout } from "@components/layouts/OnboardingLayout";
import { routes } from "@lib/constants/routes";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const suggestions = [
  "To uncover the truth buried in history",
  "To understand divine justice",
  "To awaken my intellect and soul",
  "To seek what others fear to question",
];

export default function OnboardingIntentionScreen() {
  const router = useRouter();
  const [intention, setIntention] = useState("");

  const handleSetIntent = (text: string) => setIntention(text);
  const handleContinue = () => {
    // 🧠 You can persist the intent to context/storage later
    router.replace(routes.tabs.journey as any); // Start the Ark journey
  };

  return (
    <OnboardingLayout
      onNext={handleContinue}
      buttonLabel="Enter the Ark →"
      skip={false}
    >
      <Text className="text-2xl font-bold text-center text-text mb-3">
        Set Your Intention
      </Text>

      <Text className="text-base text-center text-muted mb-4">
        Why are you boarding this Ark? This will be your anchor on the journey.
      </Text>

      <TextInput
        value={intention}
        onChangeText={handleSetIntent}
        placeholder="Type your intention..."
        className="border border-border rounded-xl px-4 py-3 text-text bg-surface mb-4"
        placeholderTextColor="rgb(107 114 128)"
      />

      <Text className="text-sm text-muted mb-2">Need inspiration?</Text>

      <View className="gap-3">
        {suggestions.map((text) => (
          <Pressable
            key={text}
            onPress={() => setIntention(text)}
            className="px-4 py-3 border border-border rounded-xl bg-surface"
          >
            <Text className="text-text">{text}</Text>
          </Pressable>
        ))}
      </View>
    </OnboardingLayout>
  );
}

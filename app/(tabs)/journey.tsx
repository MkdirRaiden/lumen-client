import { AnimatedView } from "@components/common/AnimatedView";
import PageLayout from "@components/layouts/PageLayout";
import { useThemeColors } from "@lib/hooks/theme";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function JourneyScreen() {
  const { get } = useThemeColors();
  const router = useRouter();

  return (
    <PageLayout scroll padded>
      <AnimatedView fade translateY>
        <View className="mb-6">
          <Text className="text-xl font-bold text-text mb-1">
            🌊 Ark Status
          </Text>
          <Text className="text-muted">
            Level 2 • XP: 148 / 300 • Virtue: Honest Seeker
          </Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={100}>
        <View className="mb-6">
          <Text className="text-xl font-bold text-text mb-2">
            🧭 Current Quest
          </Text>
          <View className="bg-surface p-4 rounded-xl border border-border">
            <Text className="text-text font-semibold text-base mb-1">
              Encounter with Prophet Moses (Mūsā)
            </Text>
            <Text className="text-muted text-sm mb-3">
              Face the tyrant, challenge falsehood, and unlock the Torah.
            </Text>
            <Pressable
              onPress={() => router.push("/(stack)/encounter/moses" as any)}
              className="bg-primary py-2 px-4 rounded-lg self-start"
            >
              <Text className="text-white font-medium">Begin</Text>
            </Pressable>
          </View>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={200}>
        <View>
          <Text className="text-xl font-bold text-text mb-2">🔓 Unlocks</Text>
          <Text className="text-muted mb-2">
            Torah, Pharaoh’s trial, Divine Justice
          </Text>
          <Text className="text-muted">
            Next: Einstein, Hidden Voice from Canaan
          </Text>
        </View>
      </AnimatedView>
    </PageLayout>
  );
}

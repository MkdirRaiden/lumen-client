import { AnimatedView } from "@components/common/AnimatedView";
import PageLayout from "@components/layouts/PageLayout";
import { useThemeColors } from "@lib/hooks/theme";
import { Text, View } from "react-native";

export default function ArkScreen() {
  const { get } = useThemeColors();

  return (
    <PageLayout scroll padded>
      <AnimatedView fade translateY>
        <Text className="text-2xl font-bold text-text mb-4">🛡️ Your Ark</Text>
      </AnimatedView>

      <AnimatedView fade translateY delay={100}>
        <View className="mb-6">
          <Text className="text-base text-muted mb-1">Virtue Title:</Text>
          <Text className="text-lg text-text font-semibold">Honest Seeker</Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={200}>
        <View className="mb-6">
          <Text className="text-base text-muted mb-1">XP Progress</Text>
          <Text className="text-text">Level 2 — 148 / 300 XP</Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={300}>
        <View>
          <Text className="text-base text-muted mb-1">Badges & Milestones</Text>
          <Text className="text-text">
            🧭 Unlocked: Torah, Moses, Divine Justice
          </Text>
        </View>
      </AnimatedView>
    </PageLayout>
  );
}

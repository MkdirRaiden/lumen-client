import { AnimatedView } from "@components/common/AnimatedView";
import PageLayout from "@components/layouts/PageLayout";
import { useThemeColors } from "@lib/hooks/theme";
import { Text, View } from "react-native";

export default function InsightScreen() {
  const { get } = useThemeColors();

  return (
    <PageLayout scroll padded>
      <AnimatedView fade translateY>
        <Text className="text-2xl font-bold text-text mb-4">
          📖 Unlocked Insights
        </Text>
      </AnimatedView>

      <AnimatedView fade translateY delay={100}>
        <View className="mb-4">
          <Text className="text-muted mb-1">Scriptures</Text>
          <Text className="text-text">📜 Torah</Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={200}>
        <View className="mb-4">
          <Text className="text-muted mb-1">Books</Text>
          <Text className="text-text">📘 Einstein's Relativity</Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={300}>
        <View>
          <Text className="text-muted mb-1">Suppressed Voices</Text>
          <Text className="text-text">🎙️ Canaanite Cry for Justice</Text>
        </View>
      </AnimatedView>
    </PageLayout>
  );
}

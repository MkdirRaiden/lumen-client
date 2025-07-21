import { AnimatedView } from "@components/common/AnimatedView";
import PageLayout from "@components/layouts/PageLayout";
import { useThemeColors } from "@lib/hooks/theme";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  const { get } = useThemeColors();

  return (
    <PageLayout scroll padded>
      <AnimatedView fade translateY>
        <Text className="text-2xl font-bold text-text mb-4">
          👤 Your Profile
        </Text>
      </AnimatedView>

      <AnimatedView fade translateY delay={100}>
        <View className="mb-6">
          <Text className="text-muted mb-1">Theme:</Text>
          <Text className="text-text">🌗 Dark</Text>
        </View>
      </AnimatedView>

      <AnimatedView fade translateY delay={200}>
        <View>
          <Text className="text-muted mb-1">Avatar:</Text>
          <Text className="text-text">🧙 The Truth Seeker</Text>
        </View>
      </AnimatedView>
    </PageLayout>
  );
}

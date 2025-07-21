import { AnimatedView } from "@components/common/AnimatedView";
import PageLayout from "@components/layouts/PageLayout";
import { useThemeColors } from "@lib/hooks/theme";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function ExploreScreen() {
  const { get } = useThemeColors();
  const router = useRouter();

  return (
    <PageLayout scroll padded>
      <AnimatedView fade translateY>
        <Text className="text-2xl font-bold text-text mb-4">🔍 Explore</Text>
      </AnimatedView>

      {[
        { title: "Prophets", route: "/(stack)/figures/prophets" },
        { title: "Scientists", route: "/(stack)/figures/scientists" },
        { title: "Rebels", route: "/(stack)/figures/rebels" },
        { title: "Modules", route: "/(stack)/modules/truth" },
        { title: "Injustice", route: "/(stack)/injustice/zionism" },
      ].map(({ title, route }, index) => (
        <AnimatedView key={title} fade translateY delay={100 * (index + 1)}>
          <Pressable
            onPress={() => router.push(route as any)}
            className="bg-surface border border-border rounded-xl p-4 mb-3"
          >
            <Text className="text-text font-medium">{title}</Text>
          </Pressable>
        </AnimatedView>
      ))}
    </PageLayout>
  );
}

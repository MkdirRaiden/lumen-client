import { useThemeColors } from "@lib/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const HeroBanner = () => {
  const router = useRouter();
  const { get } = useThemeColors();

  const gradientColors = [
    `rgb(${get("--gradient-start")})`,
    `rgb(${get("--gradient-end")})`,
  ] as const;

  return (
    <View className="rounded-2xl overflow-hidden my-5">
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ padding: 24 }}
      >
        <Text
          className="text-3xl font-heading font-extrabold uppercase mb-3 tracking-tight text-bg text-center"
          accessibilityRole="header"
        >
          Shine Light on Truth Across Beliefs
        </Text>

        <Text className="text-base leading-6 mb-6 text-bg/85 text-center">
          Explore core teachings, shared values, and honest questions across
          world religions.
        </Text>

        <Pressable
          onPress={() => router.push("/truth")}
          accessibilityRole="button"
          accessibilityLabel="Explore truth across religions"
          className="rounded-xl px-6 py-4 items-center justify-center bg-bg"
        >
          <Text className="text-base font-semibold text-primary">
            Explore Now
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

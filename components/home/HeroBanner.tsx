import { useTheme, useThemeColors } from "@lib/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export const HeroBanner = () => {
  const router = useRouter();
  const { get } = useThemeColors();
  const { theme } = useTheme(); // 👈 ensure reactivity on toggle

  const gradientColors = [
    `rgb(${get("--gradient-start")})`,
    `rgb(${get("--gradient-end")})`,
  ] as const;

  return (
    <LinearGradient
      colors={gradientColors}
      className="p-6 my-6"
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 16 }}
    >
      <Text className="text-3xl font-heading font-extrabold uppercase mb-3 tracking-tight text-bg text-center">
        Shine Light on Truth Across Beliefs
      </Text>

      <Text className="text-base leading-6 mb-6 text-bg/85 text-center">
        Explore core teachings, shared values, and honest questions across world
        religions.
      </Text>

      <Pressable
        onPress={() => router.push("/truth")}
        className="rounded-xl px-6 py-4 items-center justify-center bg-bg"
      >
        <Text className="text-base font-semibold text-primary">
          Explore Now
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

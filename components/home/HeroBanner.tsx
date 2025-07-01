import { useThemeColors } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { ResizeMode, Video } from "expo-av";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const HeroBanner = () => {
  const router = useRouter();
  const { get } = useThemeColors();
  const video = useRef<Video>(null);

  const gradientColors = [
    get("--gradient-start"),
    get("--gradient-end"),
  ] as const;

  return (
    <View
      className="mt-2 rounded-2xl relative overflow-hidden"
      style={{ height: 220 }}
    >
      {/* Centered video background */}
      <Video
        ref={video}
        source={require("@assets/videos/hero.mp4")}
        style={StyleSheet.absoluteFillObject}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />

      {/* Gradient overlay */}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute inset-0 opacity-90"
      />

      {/* Subtle blur overlay */}
      <BlurView intensity={10} tint="dark" className="absolute inset-0" />

      {/* Static foreground content */}
      <View className="flex-1 py-10 px-5 justify-center">
        <View className="flex-row flex-wrap items-baseline justify-center">
          <Text className="text-2xl font-heading font-extrabold uppercase tracking-tight text-bg">
            Shine{" "}
          </Text>
          <Text className="text-2xl font-heading font-extrabold uppercase tracking-tight text-yellow-400">
            Light{" "}
          </Text>
          <Text className="text-2xl font-heading font-extrabold uppercase tracking-tight text-bg">
            on{" "}
          </Text>
          <Text
            className="text-2xl font-heading font-extrabold uppercase tracking-tight"
            style={{
              color: "rgb(120,220,255)",
              textShadowColor: "rgba(120,220,255,0.6)",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 6,
            }}
          >
            Truth
          </Text>
        </View>

        <Text className="text-base text-center w-4/5 mx-auto leading-6 mt-4 mb-6 text-bg/80">
          Explore what’s real and revealed across all beliefs. Uncover shared
          meaning and sacred ideas.
        </Text>

        <Pressable
          onPress={() => router.push(routes.tabs.explore as any)}
          className="rounded-xl px-6 py-4 w-3/4 mx-auto items-center justify-center bg-bg/90"
        >
          <Text className="text-base font-semibold text-primary">
            Explore Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

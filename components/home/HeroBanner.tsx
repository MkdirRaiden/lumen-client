import { useThemeColors } from "@lib/hooks/useTheme";
import { routes } from "@lib/routes";
import { ResizeMode, Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const phrases = ["Truth", "Wisdom", "Clarity"];
const subtitles = {
  Truth:
    "Explore what’s real and revealed across all beliefs. Uncover shared meaning and sacred ideas.",
  Wisdom:
    "Find timeless insights from different traditions. Let ancient wisdom spark new understanding.",
  Clarity:
    "See through confusion and uncover deeper meaning. Illuminate what unites logic and faith.",
};

export const HeroBanner = () => {
  const router = useRouter();
  const { get } = useThemeColors();
  const video = useRef<Video>(null);

  const [index, setIndex] = useState(0);

  // Cycle through phrases every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const gradientColors = [
    `rgb(${get("--gradient-start")})`,
    `rgb(${get("--gradient-end")})`,
  ] as const;

  const activeWord = phrases[index];
  const activeSubtitle = subtitles[activeWord as keyof typeof subtitles];

  return (
    <View
      className="my-4 rounded-2xl overflow-hidden relative"
      style={{ height: 220 }}
    >
      {/* 🔥 Video Background */}
      <Video
        ref={video}
        source={require("@assets/videos/hero.mp4")}
        style={StyleSheet.absoluteFillObject}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
        className="absolute right-[50%]"
      />

      {/* 🎨 Gradient Overlay */}
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute inset-0 opacity-90"
      />

      {/* ⚡ Foreground Content */}
      <View className="flex-1 py-10 px-5 justify-center">
        {/* ✨ Rotating Heading */}
        <Text className="text-2xl font-heading font-extrabold uppercase tracking-tight text-bg">
          Shine <Text style={{ color: "rgb(255,204,0)" }}>Light</Text> on{" "}
          <Text
            style={{
              color: "rgb(120,220,255)",
              textShadowColor: "rgba(120,220,255,0.6)",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 6,
            }}
          >
            {activeWord}
          </Text>
        </Text>

        {/* 📖 Dynamic Subtitle */}
        <Text className="text-base w-4/5 leading-6 mt-4 mb-6 text-bg/80">
          {activeSubtitle}
        </Text>

        {/* 📎 CTA */}
        <Pressable
          onPress={() => router.push(routes.stack.truth as any)}
          accessibilityRole="button"
          accessibilityLabel="Explore truth across religions"
          className="rounded-xl px-6 py-4 w-3/5 items-center justify-center bg-bg/80"
        >
          <Text className="text-base font-semibold text-primary">
            Explore Now
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

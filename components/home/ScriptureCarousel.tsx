import { useThemeColors } from "@lib/hooks/theme";
import type { SemanticColor } from "@ts-types/theme";
import React, { useEffect, useRef, useState } from "react";
import {
  PanResponder,
  Pressable,
  Animated as RNAnimated,
  Text,
  View,
} from "react-native";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";

const quotes = [
  {
    text: "The truth will set you free.",
    source: "John 8:32",
  },
  {
    text: "Knowledge is better than worship.",
    source: "Prophet Muhammad (PBUH)",
  },
  {
    text: "From ignorance, lead me to truth.",
    source: "Upanishads",
  },
  {
    text: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
    source: "Buddhist Teaching",
  },
  {
    text: "The ink of the scholar is more sacred than the blood of the martyr.",
    source: "Hadith",
  },
  {
    text: "Wisdom is supreme—so get wisdom. Though it cost all you have, get understanding.",
    source: "Proverbs 4:7",
  },
];

const DURATION = 7000;

export const ScriptureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = useRef(new RNAnimated.Value(0)).current;
  const progressAnim = useRef(new RNAnimated.Value(0)).current;

  const { get } = useThemeColors();
  const primary = get("--color-secondary" as SemanticColor);
  const muted = get("--color-muted" as SemanticColor);
  const text = get("--color-text" as SemanticColor);

  const triggerAnimation = () => {
    fadeAnim.setValue(0);
    progressAnim.setValue(0);

    RNAnimated.parallel([
      RNAnimated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      RNAnimated.timing(progressAnim, {
        toValue: 1,
        duration: DURATION,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    triggerAnimation();
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, DURATION);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const animatedWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 10,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          setActiveIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
        } else if (gestureState.dx < -50) {
          setActiveIndex((prev) => (prev + 1) % quotes.length);
        }
      },
    })
  ).current;

  return (
    <View className="px-6 py-8 items-center justify-center">
      {/* Indicators with progress bar */}
      <View className="flex-row mb-4">
        {quotes.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <Pressable
              key={i}
              onPress={() => setActiveIndex(i)}
              className={`h-[10px] rounded-full mr-2 ${
                isActive
                  ? "w-12 bg-secondary/30 overflow-hidden"
                  : "w-3 opacity-40"
              }`}
              style={!isActive ? { backgroundColor: muted } : undefined}
            >
              {isActive && (
                <RNAnimated.View
                  style={{
                    backgroundColor: primary,
                    width: animatedWidth,
                    height: 10,
                    borderRadius: 999,
                  }}
                />
              )}
            </Pressable>
          );
        })}
      </View>
      {/* Animated quote with fade+scale */}
      <Animated.View
        key={activeIndex}
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
        {...panResponder.panHandlers}
        style={{ minHeight: 105 }}
      >
        <Text
          className="text-center text-[18px] font-medium px-4 leading-7"
          style={{ color: text }}
        >
          “{quotes[activeIndex].text}”
        </Text>
        <Text
          className="text-center text-sm mt-3 opacity-60"
          style={{ color: text }}
        >
          — {quotes[activeIndex].source}
        </Text>
      </Animated.View>
    </View>
  );
};

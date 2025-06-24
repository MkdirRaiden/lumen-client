import { scriptureQuotes } from "@lib/constants/quotes";
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
      setActiveIndex((prev) => (prev + 1) % scriptureQuotes.length);
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
          setActiveIndex(
            (prev) =>
              (prev - 1 + scriptureQuotes.length) % scriptureQuotes.length
          );
        } else if (gestureState.dx < -50) {
          setActiveIndex((prev) => (prev + 1) % scriptureQuotes.length);
        }
      },
    })
  ).current;

  return (
    <View className="px-6 py-3 items-center justify-center">
      {/* Animated quote with fade+scale */}
      <Animated.View
        key={activeIndex}
        entering={FadeIn.springify()}
        exiting={FadeOut}
        layout={ZoomIn}
        {...panResponder.panHandlers}
        style={{ minHeight: 130, justifyContent: "center" }}
      >
        <Text
          className="text-center text-[18px] font-medium px-4 leading-7"
          style={{ color: text }}
        >
          “{scriptureQuotes[activeIndex].text}”
        </Text>
        <Text
          className="text-center text-sm mt-2 opacity-60"
          style={{ color: text }}
        >
          — {scriptureQuotes[activeIndex].source}
        </Text>
      </Animated.View>

      {/* Indicators with progress bar */}
      <View className="flex-row mb-3">
        {scriptureQuotes.map((_, i) => {
          const isActive = i === activeIndex;
          return (
            <Pressable
              key={i}
              onPress={() => setActiveIndex(i)}
              className={`h-[10px] rounded-full mr-2 ease-in ${
                isActive
                  ? "w-12 bg-secondary/40 overflow-hidden"
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
    </View>
  );
};

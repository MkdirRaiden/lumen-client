import { AnimatedView } from "@components/common/AnimatedView";
import { scriptureQuotes } from "@lib/constants/quotes";
import { useSwipeNavigation } from "@lib/hooks/common/useSwipeNavigation";
import { useThemeColors } from "@lib/hooks/theme";
import type { SemanticColor } from "@lib/types/theme";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const ScriptureCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { get } = useThemeColors();
  const textColor = get("--color-text" as SemanticColor);
  const primary = get("--color-primary" as SemanticColor);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % scriptureQuotes.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + scriptureQuotes.length) % scriptureQuotes.length
    );
  };

  const panResponder = useSwipeNavigation({
    currentIndex: activeIndex,
    total: scriptureQuotes.length,
    onSwipeNext: () =>
      setActiveIndex((prev) => (prev + 1) % scriptureQuotes.length),
    onSwipePrev: () =>
      setActiveIndex(
        (prev) => (prev - 1 + scriptureQuotes.length) % scriptureQuotes.length
      ),
  });

  const quote = scriptureQuotes[activeIndex];

  return (
    <View className="px-6 py-6 items-center justify-center">
      <AnimatedView
        key={activeIndex}
        fade
        scale
        className="px-4"
        style={{
          minHeight: 150,
          justifyContent: "center",
        }}
        {...panResponder.panHandlers}
      >
        <Text
          className="text-center text-[22px] leading-8 italic"
          style={{ color: textColor, fontFamily: "serif" }}
        >
          “{quote.text}”
        </Text>
        <Text
          className="text-center mt-2 text-base opacity-60"
          style={{ color: textColor }}
        >
          — {quote.source}
        </Text>
      </AnimatedView>

      <View className="flex-row mt-4 space-x-6">
        <Pressable onPress={handlePrev}>
          <Text style={{ color: primary }} className="text-base font-semibold">
            ⟵ Prev
          </Text>
        </Pressable>
        <Pressable onPress={handleNext}>
          <Text style={{ color: primary }} className="text-base font-semibold">
            Next ⟶
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

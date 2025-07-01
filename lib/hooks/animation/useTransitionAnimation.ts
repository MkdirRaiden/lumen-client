// hooks/useTransitionAnimation.ts
import { useRef } from "react";
import { Animated } from "react-native";

interface TransitionAnimationOptions {
  fromY?: number;
  toY?: number;
  initialVisible?: boolean;
}

export const useTransitionAnimation = ({
  fromY = 30,
  toY = 0,
  initialVisible = false,
}: TransitionAnimationOptions = {}) => {
  const opacity = useRef(new Animated.Value(initialVisible ? 1 : 0)).current;
  const translateY = useRef(
    new Animated.Value(initialVisible ? toY : fromY)
  ).current;

  const animateIn = (duration = 300) =>
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: toY,
        duration,
        useNativeDriver: true,
      }),
    ]);

  const animateOut = (duration = 200) =>
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: fromY,
        duration,
        useNativeDriver: true,
      }),
    ]);

  return {
    opacity,
    translateY,
    animateIn,
    animateOut,
  };
};

import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export type AnimationType = "fade" | "scale" | "translateY" | "translateX";

interface UseAnimationsConfig {
  types?: AnimationType[];

  // Animation lifecycle
  autoReset?: boolean;
  autoAnimateIn?: boolean;
  visible?: boolean;
  delay?: number;
  duration?: number;
  onEnd?: () => void;

  // Optional infinite translateX loop
  loopTranslateX?: {
    from: number;
    to: number;
    duration?: number;
  };
}

export const useAnimations = ({
  types = [],
  autoReset = false,
  autoAnimateIn = false,
  visible = true,
  delay = 0,
  duration = 300,
  onEnd,
  loopTranslateX,
}: UseAnimationsConfig = {}) => {
  // Refs
  const fade = types.includes("fade")
    ? useRef(new Animated.Value(0)).current
    : undefined;
  const scale = types.includes("scale")
    ? useRef(new Animated.Value(0.95)).current
    : undefined;
  const translateY = types.includes("translateY")
    ? useRef(new Animated.Value(10)).current
    : undefined;
  const translateX =
    types.includes("translateX") || loopTranslateX
      ? useRef(new Animated.Value(loopTranslateX?.from ?? 10)).current
      : undefined;

  // Reset logic
  const reset = () => {
    fade?.setValue(0);
    scale?.setValue(0.9);
    translateY?.setValue(10);
    translateX?.setValue(loopTranslateX?.from ?? 10);
  };

  // Animate In logic
  const animateIn = (opts?: { delay?: number; duration?: number }) => {
    const animDelay = opts?.delay ?? delay;
    const animDuration = opts?.duration ?? duration;

    const animations = [
      fade &&
        Animated.timing(fade, {
          toValue: 1,
          duration: animDuration,
          delay: animDelay,
          useNativeDriver: true,
        }),
      scale &&
        Animated.timing(scale, {
          toValue: 1,
          duration: animDuration,
          delay: animDelay,
          useNativeDriver: true,
        }),
      translateY &&
        Animated.timing(translateY, {
          toValue: 0,
          duration: animDuration,
          delay: animDelay,
          useNativeDriver: true,
        }),
      !loopTranslateX &&
        translateX &&
        Animated.timing(translateX, {
          toValue: 0,
          duration: animDuration,
          delay: animDelay,
          useNativeDriver: true,
        }),
    ].filter(Boolean) as Animated.CompositeAnimation[];

    return Animated.parallel(animations);
  };

  // Looping translateX animation
  useEffect(() => {
    if (!loopTranslateX || !translateX) return;

    translateX.setValue(loopTranslateX.from);

    const loop = Animated.loop(
      Animated.timing(translateX, {
        toValue: loopTranslateX.to,
        duration: loopTranslateX.duration ?? 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    loop.start();
    return () => loop.stop();
  }, [loopTranslateX, translateX]);

  // Auto lifecycle: reset + animateIn
  useEffect(() => {
    if (autoReset) reset();

    if (autoAnimateIn && visible) {
      animateIn().start(() => onEnd?.());
    }

    // Optional future enhancement: animateOut if !visible
  }, [visible]);

  return {
    fade,
    scale,
    translateY,
    translateX,
    animateIn,
    reset,
  };
};

import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

interface UseStaggeredAnimationsOptions {
  delay?: number;
  duration?: number;
  loop?: boolean;
  loopDuration?: number;
}

export const useStaggeredAnimations = (
  count: number,
  options?: UseStaggeredAnimationsOptions
) => {
  const {
    delay = 100,
    duration = 300,
    loop = false,
    loopDuration = 700,
  } = options || {};

  // Stable ref for Animated.Values
  const animationsRef = useRef<Animated.Value[]>(
    Array.from({ length: count }, () => new Animated.Value(0))
  );

  // Adjust length if count changes
  useEffect(() => {
    const anims = animationsRef.current;
    if (count > anims.length) {
      const additional = Array.from(
        { length: count - anims.length },
        () => new Animated.Value(0)
      );
      animationsRef.current = [...anims, ...additional];
    } else if (count < anims.length) {
      animationsRef.current = anims.slice(0, count);
    }
  }, [count]);

  useEffect(() => {
    if (!loop) return;

    const animations = animationsRef.current.map((anim, index) => {
      const singleLoop = Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: loopDuration / 2,
            delay: delay * index,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: loopDuration / 2,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
      return singleLoop;
    });

    animations.forEach((anim) => anim.start());

    return () => animations.forEach((anim) => anim.stop());
  }, [loop, count, delay, loopDuration]);

  const animateIn = () => {
    const sequence = animationsRef.current.map((anim, i) =>
      Animated.timing(anim, {
        toValue: 1,
        duration,
        delay: i * delay,
        useNativeDriver: true,
      })
    );
    return Animated.stagger(delay, sequence);
  };

  const reset = (toValue = 0) => {
    animationsRef.current.forEach((anim) => anim.setValue(toValue));
  };

  return {
    animations: animationsRef.current,
    animateIn,
    reset,
  };
};

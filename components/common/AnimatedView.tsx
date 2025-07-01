import { useAnimations, type AnimationType } from "@lib/hooks/animation";
import type { AnimatedViewProps } from "@lib/types";
import { useMemo } from "react";
import { Animated, View } from "react-native";

const AnimatedViewBase = Animated.createAnimatedComponent(View);

export const AnimatedView = ({
  children,
  style,
  className,
  fade,
  fadeValue, // external opacity animation
  scale,
  scaleValue, // external scale animation
  translateY,
  translateYValue, // external translateY animation
  translateX,
  translateXValue, // external translateX animation
  delay = 0,
  duration = 300,
  onEnd,
  visible = true,
  staggerIndex = 0,
  staggerDelay = 80,
}: AnimatedViewProps) => {
  const types = useMemo(() => {
    const t: AnimationType[] = [];
    if (fade) t.push("fade");
    if (scale) t.push("scale");
    if (translateY) t.push("translateY");
    if (translateX) t.push("translateX");
    return t;
  }, [fade, scale, translateY, translateX]);

  const totalDelay = delay + staggerIndex * staggerDelay;

  const {
    fade: internalFade,
    scale: internalScale,
    translateY: internalTranslateY,
    translateX: internalTranslateX,
  } = useAnimations({
    types,
    delay: totalDelay,
    duration,
    autoReset: true,
    autoAnimateIn: true,
    onEnd,
    visible,
  });

  return (
    <AnimatedViewBase
      className={className}
      style={[
        {
          opacity: fadeValue ?? (fade ? internalFade : undefined),
          transform: [
            ...(scaleValue
              ? [{ scale: scaleValue }]
              : scale
                ? [{ scale: internalScale }]
                : []),
            ...(translateYValue
              ? [{ translateY: translateYValue }]
              : translateY
                ? [{ translateY: internalTranslateY }]
                : []),
            ...(translateXValue
              ? [{ translateX: translateXValue }]
              : translateX
                ? [{ translateX: internalTranslateX }]
                : []),
          ],
        },
        style,
      ]}
    >
      {children}
    </AnimatedViewBase>
  );
};

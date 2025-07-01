import type { ReactNode } from "react";
import type { Animated, StyleProp, ViewStyle } from "react-native";

//animation hooks type defination
export type AnimatedLike =
  | Animated.AnimatedValue
  | Animated.AnimatedInterpolation<number | string>;

export interface AnimatedViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string;
  fade?: boolean;
  fadeValue?: Animated.AnimatedValue | Animated.AnimatedInterpolation;
  scale?: boolean;
  scaleValue?: Animated.AnimatedValue | Animated.AnimatedInterpolation;
  translateY?: boolean;
  translateYValue?: Animated.AnimatedValue | Animated.AnimatedInterpolation;
  translateX?: boolean;
  translateXValue?: Animated.AnimatedValue | Animated.AnimatedInterpolation;
  delay?: number;
  duration?: number;
  onEnd?: () => void;
  visible?: boolean;
  staggerIndex?: number;
  staggerDelay?: number;
}

//modules type defination
export type Module = {
  title: string;
  description: string;
  icon: string;
  route?: string;
  status: "active" | "coming-soon";
  tags: string[];
  featured?: boolean;
};

//onboarding layout type defination
export interface OnboardingLayoutProps {
  animation: any;
  title: string;
  subtitle: string;
  onNext: () => void;
  buttonLabel?: string;
  showSkip?: boolean;
  onSkip?: () => void;
  step?: number;
  totalSteps?: number;
}

//page layout props
export type PageLayoutProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  centered?: boolean;
  className?: string;
};

import { useRouter } from "expo-router";
import { useRef } from "react";
import {
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
} from "react-native";

interface UseSwipeNavigationOptions<RouteType extends string> {
  currentIndex: number;
  total: number;
  routes?: readonly RouteType[]; // optional
  threshold?: number;
  onSwipePrev?: () => void;
  onSwipeNext?: () => void;
}

export function useSwipeNavigation<RouteType extends string>({
  currentIndex,
  total,
  routes,
  threshold = 20,
  onSwipePrev,
  onSwipeNext,
}: UseSwipeNavigationOptions<RouteType>): PanResponderInstance {
  const router = useRouter();

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => Math.abs(gestureState.dx) > 10,

      onPanResponderRelease: (
        _: GestureResponderEvent,
        gestureState: PanResponderGestureState
      ) => {
        const isRight = gestureState.dx > threshold;
        const isLeft = gestureState.dx < -threshold;

        if (isRight && currentIndex > 0) {
          if (onSwipePrev) {
            onSwipePrev();
          } else if (routes) {
            router.push(routes[currentIndex - 1] as any);
          }
        } else if (isLeft && currentIndex < total - 1) {
          if (onSwipeNext) {
            onSwipeNext();
          } else if (routes) {
            router.push(routes[currentIndex + 1] as any);
          }
        }
      },
    })
  ).current;

  return panResponder;
}

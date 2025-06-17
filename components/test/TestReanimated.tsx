import React from "react";
import { Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TestReanimated() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(offset.value * 100) }],
    };
  });

  return (
    <View className="items-center space-y-4">
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "tomato" },
          animatedStyles,
        ]}
      />
      <Button
        title="Move Box"
        onPress={() => {
          offset.value = Math.random();
        }}
      />
    </View>
  );
}

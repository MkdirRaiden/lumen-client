import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

type TabIconProps = {
  name: keyof typeof Feather.glyphMap;
  focused: boolean;
  size: number;
  color: string;
};

export const TabIcon = ({ name, focused, size, color }: TabIconProps) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.1 : 1,
      useNativeDriver: true,
      speed: 12,
      bounciness: 8,
    }).start();
  }, [focused]);

  const iconSize = focused ? size - 1 : size - 2;

  return (
    <View className="w-16 h-16 items-center justify-center">
      <Animated.View
        style={{
          transform: [{ scale }],
          width: 44,
          height: 44,
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name={name} size={iconSize} color={color} />
      </Animated.View>
    </View>
  );
};

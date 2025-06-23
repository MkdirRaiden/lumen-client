import { Feather } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

type TabIconProps = {
  name: keyof typeof Feather.glyphMap;
  focused: boolean;
  size: number;
  color: string;
  backgroundColor: string;
};

export const TabIcon = ({
  name,
  focused,
  size,
  color,
  backgroundColor,
}: TabIconProps) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: focused ? 1.1 : 1,
      useNativeDriver: true,
      speed: 12,
      bounciness: 8,
    }).start();
  }, [focused]);

  return (
    <View className="w-20 h-20 items-center justify-center">
      <Animated.View
        style={{
          transform: [{ scale }],
          width: 38,
          height: 38,
          borderRadius: 19,
          backgroundColor: focused ? backgroundColor : "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name={name} size={size} color={color} />
      </Animated.View>
    </View>
  );
};

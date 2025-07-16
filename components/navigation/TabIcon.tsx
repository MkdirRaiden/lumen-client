import { Feather } from "@expo/vector-icons";
import { useThemeColors } from "@lib/hooks/theme";
import React from "react";
import { Text, View } from "react-native";

type TabIconProps = {
  name: keyof typeof Feather.glyphMap;
  focused: boolean;
  size: number;
  color: string;
  label: string;
};

export const TabIcon = ({
  name,
  focused,
  size,
  color,
  label,
}: TabIconProps) => {
  const { get } = useThemeColors();

  const glowStyle = focused
    ? {
        shadowColor: `rgb(${get("--color-primary")})`,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
      }
    : {};

  return (
    <View
      className={`flex-col items-center justify-center px-3 pt-2 pb-1 rounded-full ${
        focused ? "bg-primary/10" : ""
      }`}
      style={{ minWidth: 64, ...glowStyle }}
    >
      <Feather name={name} size={size} color={color} />
      <Text
        className={`text-[11px] mt-1 text-center ${
          focused ? "text-primary font-semibold" : "text-muted"
        }`}
      >
        {label}
      </Text>
    </View>
  );
};

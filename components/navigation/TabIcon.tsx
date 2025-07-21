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

  return (
    <View
      className="flex-col items-center justify-center"
      style={{ minWidth: 70 }}
    >
      {/* Icon with background when focused */}
      <View
        className={`items-center justify-center rounded-full ${
          focused ? "bg-primary/20" : ""
        }`}
        style={{
          width: size * 2,
          height: size * 1.25,
        }}
      >
        <Feather name={name} size={size} color={color} />
      </View>

      {/* Label (single line, centered) */}
      <Text
        className={`text-[11px] mt-1 text-center ${
          focused ? "text-primary font-semibold" : "text-muted"
        }`}
        numberOfLines={1}
        ellipsizeMode="clip"
      >
        {label}
      </Text>
    </View>
  );
};

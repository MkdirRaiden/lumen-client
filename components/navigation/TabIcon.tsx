import { Feather } from "@expo/vector-icons";
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
  const containerClass = focused
    ? "items-center justify-center bg-primary/10 rounded-full"
    : "items-center justify-center";

  const labelClass = focused
    ? "text-[11px] font-medium text-primary mt-1 text-center"
    : "text-[11px] text-muted mt-1 text-center";

  return (
    <View
      className={`flex-col p-2 ${containerClass}`}
      style={{
        minWidth: 64,
        paddingTop: 8,
        paddingBottom: 4,
        paddingHorizontal: 12,
      }}
    >
      <Feather name={name} size={size} color={color} />
      <Text className={labelClass}>{label}</Text>
    </View>
  );
};

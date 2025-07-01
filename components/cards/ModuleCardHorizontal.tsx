import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/theme";
import type { Module } from "@lib/types";
import { Pressable, Text, View } from "react-native";

type Props = {
  module: Module;
  onPress: () => void;
  disabled?: boolean;
};

export const ModuleCardHorizontal = ({ module, onPress, disabled }: Props) => {
  const { get } = useThemeColors();
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={[
        "p-4 mb-3 rounded-xl bg-bg min-h-24",
        disabled && "opacity-50 bg-screen",
        theme === "light" ? "shadow-sm" : "border border-muted",
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        theme === "light"
          ? { shadowColor: `rgb(${get("--shadow-color")})` }
          : undefined
      }
    >
      <View className="flex-row items-center gap-4">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
          <Feather
            name={module.icon as any}
            size={28}
            color={`rgb(${get("--color-secondary")})`}
          />
        </View>
        <View className="flex-1">
          <Text className="text-lg font-medium text-text">{module.title}</Text>
          <Text className="text-sm text-muted/90">{module.description}</Text>
        </View>
        {module.status === "coming-soon" && (
          <Text className="text-xs font-bold text-muted">Coming Soon</Text>
        )}
      </View>
    </Pressable>
  );
};

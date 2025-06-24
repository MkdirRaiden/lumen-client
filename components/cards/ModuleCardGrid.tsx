import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/theme";
import { Module } from "@ts-types/module";
import { Pressable, Text, View } from "react-native";

type Props = {
  module: Module;
  onPress: () => void;
  disabled?: boolean;
};

export const ModuleCardGrid = ({ module, onPress, disabled }: Props) => {
  const { get } = useThemeColors();
  const { theme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={[
        "mb-4 rounded-xl bg-bg",
        "p-3 min-h-[130px] w-[48%]",
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
      <View className="gap-2 items-start">
        <View className="flex-row items-center gap-x-2">
          <View className="h-8 w-8 items-center justify-center rounded-full bg-secondary/10">
            <Feather
              name={module.icon as any}
              size={20}
              color={`rgb(${get("--color-secondary")})`}
            />
          </View>
          <Text className=" text-sm font-semibold text-text flex-shrink">
            {module.title}
          </Text>
        </View>
        <Text className="text-xs text-muted/80" numberOfLines={3}>
          {module.description}
        </Text>
        {module.status === "coming-soon" && (
          <Text className="text-[10px] font-bold text-muted mt-1">
            Coming Soon
          </Text>
        )}
      </View>
    </Pressable>
  );
};

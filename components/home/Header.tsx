// components/Header.tsx
import { ThemeToggle } from "@components/common/ThemeToggle";
import { Text, View } from "react-native";

export const Header = () => {
  return (
    <View className="flex-row justify-between items-center px-6 pb-2 bg-bg mb-8 border-b border-secondary/50">
      <View>
        <Text className="text-3xl font-extrabold text-primary leading-tight">
          Lumen
        </Text>
        <Text className="text-xs text-text/10 leading-none">
          Illuminate your understanding
        </Text>
      </View>
      <ThemeToggle />
    </View>
  );
};

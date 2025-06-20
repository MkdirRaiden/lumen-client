import Logo from "@components/common/Logo";
import { ThemeToggle } from "@components/common/ThemeToggle";
import { View } from "react-native";

export const Header = () => {
  return (
    <View className="flex-row justify-between items-center pe-4 bg-bg border-b border-muted/30">
      <Logo />
      <ThemeToggle />
    </View>
  );
};

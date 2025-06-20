import Logo from "@components/common/Logo";
import { ThemeToggle } from "@components/common/ThemeToggle";
import { View } from "react-native";

export const Header = () => {
  return (
    <View
      className="flex-row items-center justify-between pe-5 py-1 bg-bg border-b border-muted/30"
      accessible
      accessibilityRole="header"
    >
      <Logo />
      <ThemeToggle />
    </View>
  );
};

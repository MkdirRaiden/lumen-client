import Logo from "@components/common/Logo";
import { ThemeToggle } from "@components/common/ThemeToggle";
import { Text, View } from "react-native";

type Props = {
  title?: string;
};

export const Header = ({ title }: Props) => {
  return (
    <View
      className="flex-row items-center justify-between px-5 py-2 bg-bg border-b border-muted/30 min-h-16"
      accessible
      accessibilityRole="header"
    >
      <View className="flex-row items-center gap-3">
        {title !== "Home" ? (
          <Text className="text-xl font-bold text-text">{title}</Text>
        ) : (
          <View className="justify-center items-center w-12 h-12">
            <Logo />
          </View>
        )}
      </View>

      <ThemeToggle />
    </View>
  );
};

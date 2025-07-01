import { Feather } from "@expo/vector-icons";
import { useThemeColors } from "@lib/hooks/theme";
import { useNavigation, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  showBack?: boolean;
};

export const StackHeader = ({ title, showBack = true }: Props) => {
  const router = useRouter();
  const navigation = useNavigation();
  const { get } = useThemeColors();
  const iconColor = `rgb(${get("--color-text")})`;

  const canGoBack = navigation.canGoBack?.() ?? false;

  return (
    <View
      className={`flex-row items-center justify-between px-4 py-3 bg-screen`}
    >
      {/* Left: Back + Title */}
      <View className="flex-row items-center gap-2">
        {showBack && canGoBack && (
          <TouchableOpacity
            onPress={() => router.back()}
            className="p-2 rounded-full"
          >
            <Feather name="arrow-left" size={20} color={iconColor} />
          </TouchableOpacity>
        )}
        <Text className={`text-text text-lg font-semibold`}>{title}</Text>
      </View>

      {/* Right: Future action (bookmark for now) */}
      <TouchableOpacity className="p-2 opacity-60" disabled>
        <Feather name="bookmark" size={18} color={iconColor} />
      </TouchableOpacity>
    </View>
  );
};

import { Pressable, Text, View } from "react-native";
import { useTheme } from "../lib/context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View className="flex-1 items-center justify-center bg-bg px-4">
      <Text className="text-text text-2xl font-bold mb-4">
        {theme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </Text>

      <Pressable
        className="bg-primary px-6 py-2 rounded-md shadow-md"
        onPress={toggleTheme}
      >
        <Text className="text-white font-semibold">Toggle Theme</Text>
      </Pressable>
    </View>
  );
}

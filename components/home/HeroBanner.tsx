// components/home/HeroBanner.tsx
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const HeroBanner = () => {
  const router = useRouter();

  return (
    <View className="bg-primary/10 rounded-2xl p-6 mb-6">
      <Text className="text-xl font-semibold text-primary mb-2">
        Shine light on truth across beliefs
      </Text>
      <Text className="text-base text-muted mb-4">
        Explore core teachings, shared values, and honest questions across world
        religions.
      </Text>

      <Pressable
        onPress={() => router.push("/truth" as any)}
        className="bg-primary px-4 py-2 rounded-xl"
      >
        <Text className="text-white font-medium text-center">Explore Now</Text>
      </Pressable>
    </View>
  );
};

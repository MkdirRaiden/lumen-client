import { HeroBanner } from "@components/home/HeroBanner";
import { ModulesList } from "@components/home/ModulesList";
import { ScriptureCarousel } from "@components/home/ScriptureCarousel";
import PageLayout from "@components/layouts/PageLayout";
import { routes } from "@lib/constants/routes";
import { useThemeColors } from "@lib/hooks/theme";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const { get } = useThemeColors();

  return (
    <PageLayout scroll>
      <HeroBanner />
      <ScriptureCarousel />

      {/* Enlighten Me section */}
      <Pressable
        className="rounded-xl mt-3 bg-primary/10 border border-primary p-4"
        onPress={() => router.push(routes.stack.askLumen as any)}
        accessibilityLabel="Enlighten Me"
      >
        <Text className="text-center text-lg font-semibold text-primary">
          ✨ Enlighten Me
        </Text>
        <Text className="text-center text-sm text-text/80 mt-1">
          Get a random insight across religions and science
        </Text>
      </Pressable>

      <Text className="text-xl font-semibold text-text mt-8">
        Discover Modules
      </Text>
      <ModulesList />

      {/* Footer */}
      <View className="mt-6 items-center">
        <Text className="text-xs text-muted">
          Lumen v1.0.0 — Built for Light
        </Text>
      </View>
    </PageLayout>
  );
}

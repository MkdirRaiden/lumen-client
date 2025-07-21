// components/layouts/AppLayout.tsx
import SplashScreen from "@components/common/SplashScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { useThemeReady, useThemeVersion } from "@lib/hooks/theme";
import { Slot, useRootNavigationState } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

export default function AppLayout({ fontsLoaded }: { fontsLoaded: boolean }) {
  const isThemeReady = useThemeReady();
  const themeVersion = useThemeVersion();
  const navigationReady = !!useRootNavigationState()?.key;

  const [canShowApp, setCanShowApp] = useState(false);
  const [playLottie, setPlayLottie] = useState(false);
  const [lottieStart, setLottieStart] = useState<number | null>(null);

  const hasSplashPlayed = useRef(false);

  useEffect(() => {
    if (
      hasSplashPlayed.current &&
      fontsLoaded &&
      isThemeReady &&
      navigationReady
    ) {
      setCanShowApp(true);
    }
  }, [fontsLoaded, isThemeReady, navigationReady]);

  const onLottieReady = () => {
    if (!lottieStart) {
      setLottieStart(Date.now());
      setPlayLottie(true);
    }
  };

  const onLottieDone = async () => {
    if (hasSplashPlayed.current) return;

    const elapsed = lottieStart ? Date.now() - lottieStart : 0;
    const wait = Math.max(0, 2000 - elapsed);
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));

    try {
      await ExpoSplashScreen.hideAsync();
    } catch {
      /* ignore */
    }

    hasSplashPlayed.current = true;

    if (fontsLoaded && isThemeReady && navigationReady) {
      setCanShowApp(true);
    }
  };

  if (!canShowApp) {
    return (
      <SplashScreen
        play={playLottie}
        onFinish={onLottieDone}
        onReady={onLottieReady}
      />
    );
  }

  return (
    <View className="flex-1 bg-bg">
      <ThemedStatusBar />
      <Slot key={themeVersion} />
    </View>
  );
}

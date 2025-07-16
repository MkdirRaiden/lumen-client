import { AnimatedView } from "@components/common/AnimatedView";
import SplashScreen from "@components/common/SplashScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { useThemeReady, useThemeVersion } from "@lib/hooks/theme";
import { Slot, useRootNavigationState } from "expo-router";
import * as ExpoSplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

export default function AppLayout({ fontsLoaded }: { fontsLoaded: boolean }) {
  const themeVersion = useThemeVersion();
  const isThemeReady = useThemeReady();
  const navigationReady = !!useRootNavigationState()?.key;

  const hasShownSplash = useRef(false);
  const [playLottie, setPlayLottie] = useState(false);
  const [showAppLayout, setShowAppLayout] = useState(false);
  const [lottieStart, setLottieStart] = useState<number | null>(null);

  const onLottieReady = () => {
    if (!lottieStart) {
      setLottieStart(Date.now());
      setPlayLottie(true);
    }
  };

  const onLottieDone = async () => {
    if (hasShownSplash.current) return;

    const elapsed = lottieStart ? Date.now() - lottieStart : 0;
    const wait = Math.max(0, 2000 - elapsed);
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));

    hasShownSplash.current = true;
    setShowAppLayout(true);

    try {
      await ExpoSplashScreen.hideAsync();
      console.log("Native splash is hidden");
    } catch (e) {
      console.warn("Failed to hide native splash", e);
    }
  };

  useEffect(() => {
    const ready = fontsLoaded && isThemeReady && navigationReady;
    if (hasShownSplash.current && ready) {
      setShowAppLayout(true);
    }
  }, [fontsLoaded, isThemeReady, navigationReady]);

  if (!showAppLayout) {
    return (
      <SplashScreen
        play={playLottie}
        onFinish={onLottieDone}
        onReady={onLottieReady}
      />
    );
  }

  return (
    <View className="flex-1 bg-screen">
      <ThemedStatusBar />
      <AnimatedView fade visible duration={500} className="flex-1">
        <Slot key={themeVersion} />
      </AnimatedView>
    </View>
  );
}

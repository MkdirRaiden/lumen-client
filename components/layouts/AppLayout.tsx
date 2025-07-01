import SplashScreen from "@components/common/SplashScreen";
import { useThemeReady, useThemeVersion } from "@lib/hooks/theme";
import { Slot, useRootNavigationState, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

export default function AppLayout({ fontsLoaded }: { fontsLoaded: boolean }) {
  const themeVersion = useThemeVersion();
  const isThemeReady = useThemeReady();
  const navigationReady = !!useRootNavigationState()?.key;

  const router = useRouter();
  const hasRedirected = useRef(false);

  const [lottieDone, setLottieDone] = useState(false);
  const [lottieStart, setLottieStart] = useState<number | null>(null);
  const [splashDone, setSplashDone] = useState(false);
  const [playLottie, setPlayLottie] = useState(true); // 🔥 Start Lottie immediately

  // ✅ When Lottie finishes, check if 2s passed, and then show app if also ready
  const onLottieDone = async () => {
    setLottieDone(true);
    const elapsed = lottieStart ? Date.now() - lottieStart : 0;
    const wait = Math.max(0, 2000 - elapsed);
    if (wait > 0) {
      console.log(`⏳ Waiting ${wait}ms to complete 2s`);
      await new Promise((r) => setTimeout(r, wait));
    }
    console.log("✅ Lottie + 2s complete");
  };

  // ✅ After everything is ready and lottie done, continue
  useEffect(() => {
    const ready = fontsLoaded && isThemeReady && navigationReady;
    if (!ready || !lottieDone) return;

    console.log("🧠 All ready — show app");
    setSplashDone(true);
  }, [fontsLoaded, isThemeReady, navigationReady, lottieDone]);

  useEffect(() => {
    if (!lottieStart) setLottieStart(Date.now());
  }, []);

  useEffect(() => {
    if (!splashDone || hasRedirected.current) return;
    hasRedirected.current = true;
    console.log("🚀 Redirecting to onboarding...");
    router.replace("/onboarding");
  }, [splashDone]);

  if (!splashDone) {
    return <SplashScreen play={playLottie} onFinish={onLottieDone} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Slot key={themeVersion} />
    </View>
  );
}

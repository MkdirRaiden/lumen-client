import LoadingScreen from "@components/common/LoadingScreen";
import ThemedStatusBar from "@components/common/ThemedStatusBar";
import { useTheme, useThemeReady } from "@lib/hooks/useTheme";
import { routes } from "@lib/routes";
import {
  Slot,
  usePathname,
  useRootNavigationState,
  useRouter,
} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

export default function AppLayout({ fontsLoaded }: { fontsLoaded: boolean }) {
  const isThemeReady = useThemeReady();
  const { themeVersion } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const navigationReady = useRootNavigationState()?.key != null;

  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const [splashHidden, setSplashHidden] = useState(false);
  const [showApp, setShowApp] = useState(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const hasRedirected = useRef(false);

  const isAppReady = fontsLoaded && isThemeReady && navigationReady;
  const canStartFade = isAppReady && minDelayPassed;

  // Wait minimum delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMinDelayPassed(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  // Hide native splash screen
  useEffect(() => {
    if (isAppReady && !splashHidden) {
      SplashScreen.hideAsync().then(() => setSplashHidden(true));
    }
  }, [isAppReady, splashHidden]);

  // Redirect to onboarding ONCE for testing
  useEffect(() => {
    if (!isAppReady || hasRedirected.current) return;

    const isOnboardingPath = pathname.startsWith("/onboarding");

    if (!isOnboardingPath) {
      hasRedirected.current = true;

      // Delay slightly to ensure navigation context settles
      setTimeout(() => {
        router.replace(routes.stack.onboarding.screen1 as any);
      }, 0);
    }
  }, [isAppReady]);

  // Animate out loading
  useEffect(() => {
    if (canStartFade) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        setShowApp(true);
      });
    }
  }, [canStartFade]);

  // Still loading
  if (!showApp) {
    return (
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <LoadingScreen />
      </Animated.View>
    );
  }

  // Final app render with fade transition only
  return (
    <View style={{ flex: 1 }}>
      <ThemedStatusBar />
      <Slot key={themeVersion} />
    </View>
  );
}

import * as SplashScreen from "expo-splash-screen";

declare global {
  var __splash_init_ran__: boolean | undefined;
}

if (!global.__splash_init_ran__) {
  global.__splash_init_ran__ = true;

  (async () => {
    try {
      console.log("🟡 Calling preventAutoHideAsync");
      await SplashScreen.preventAutoHideAsync();
      console.log("🟢 Native splash is locked");
    } catch (e) {
      console.warn("⚠️ Splash prevent failed", e);
    }
  })();
}

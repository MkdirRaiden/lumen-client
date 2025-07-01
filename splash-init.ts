// splash-init.ts
import * as SplashScreen from "expo-splash-screen";

declare global {
  var __splash_init_ran__: boolean | undefined;
}

if (!global.__splash_init_ran__) {
  global.__splash_init_ran__ = true;

  (async () => {
    console.log(
      "🟡 Calling preventAutoHideAsync() before React loads (and awaiting it)"
    );
    try {
      await SplashScreen.preventAutoHideAsync();
      console.log("🟢 preventAutoHideAsync resolved");
    } catch (e) {
      console.warn("⚠️ preventAutoHideAsync failed", e);
    }
  })();
}

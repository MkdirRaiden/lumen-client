import { useTheme } from "@lib/hooks/theme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Image, Pressable } from "react-native";

export default function Logo() {
  const { theme } = useTheme();
  const router = useRouter();

  const logoSource =
    theme === "dark"
      ? require("@assets/logos/lumen-logo-dark.png")
      : require("@assets/logos/lumen-logo-light.png");

  const goHome = useCallback(() => {
    router.push(routes.tabs.home);
  }, [router]);

  return (
    <Pressable
      onPress={goHome}
      accessibilityRole="imagebutton"
      accessibilityLabel="Go to Home"
      className="items-center justify-center"
    >
      <Image
        source={logoSource}
        style={{ width: 160, height: 60, resizeMode: "cover" }}
      />
    </Pressable>
  );
}

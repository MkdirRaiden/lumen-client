import { useTheme } from "@lib/hooks/useTheme";
import { useRouter } from "expo-router";
import { Image, Pressable } from "react-native";

export default function Logo() {
  const { theme } = useTheme();
  const router = useRouter();

  const logoSource =
    theme === "dark"
      ? require("@assets/logos/lumen-logo-dark.png")
      : require("@assets/logos/lumen-logo-light.png");

  return (
    <Pressable
      onPress={() => router.push("/home")}
      className="items-center justify-center"
    >
      <Image
        source={logoSource}
        style={{ width: 160, height: 60, resizeMode: "cover" }}
      />
    </Pressable>
  );
}

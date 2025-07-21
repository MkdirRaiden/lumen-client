import { Image, View } from "react-native";

export default function Logo() {
  const logoSource = require("@assets/logos/adaptive-icon.png");

  return (
    <View>
      <Image
        source={logoSource}
        style={{ width: 65, height: 65, resizeMode: "contain" }}
      />
    </View>
  );
}

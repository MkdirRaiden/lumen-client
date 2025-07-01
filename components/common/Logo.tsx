import { Image, View } from "react-native";

export default function Logo() {
  const logoSource = require("@assets/logos/adaptive-icon.png");

  return (
    <View>
      <Image
        source={logoSource}
        style={{ width: 75, height: 75, resizeMode: "cover" }}
      />
    </View>
  );
}

import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "Lumen",
  slug: "lumen",
  version: "1.0.0",
  orientation: "default",
  scheme: "lumen",
  userInterfaceStyle: "automatic",
  icon: "./assets/logos/icon.png",

  splash: {
    image: "./assets/logos/splash.png",
    resizeMode: "contain",
    backgroundColor: "#FFF6D1",
    statusBar: {
      hidden: true,
    },
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/logos/splash.png",
        resizeMode: "contain",
        backgroundColor: "#FFF6D1",
        statusBar: {
          hidden: true,
        },
      },
    ],
    "expo-video",
  ],

  android: {
    package: "com.truth.lumen.v1",
    adaptiveIcon: {
      foregroundImage: "./assets/logos/adaptive-icon.png",
      backgroundColor: "#FFF6D1",
    },
    edgeToEdgeEnabled: true,
  },

  ios: {
    supportsTablet: true,
  },

  web: {
    favicon: "./assets/logos/favicon.png",
    bundler: "metro",
    output: "static",
  },

  experiments: {
    typedRoutes: true,
  },

  newArchEnabled: true,
  assetBundlePatterns: ["**/*"],
});

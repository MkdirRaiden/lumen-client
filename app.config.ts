import { ConfigContext, ExpoConfig } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "Lumen's Ark",
  slug: "lumens-ark",
  version: "1.0.0",
  orientation: "default",
  scheme: "lumens-ark", // Enables deep linking
  userInterfaceStyle: "automatic",
  icon: "./assets/logos/icon.png",
  description:
    "A spiritual truth-seeking journey through divine revelation, logic, justice, and awakening — powered by Lumen's Ark.",
  owner: "MkdirRaiden", // replace with your Expo or GitHub username if using EAS

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
    bundleIdentifier: "com.truth.lumen.v1",
  },

  web: {
    favicon: "./assets/logos/favicon.png",
    bundler: "metro",
    output: "static",
  },

  experiments: {
    typedRoutes: true, // Helps ensure type-safe routing
  },

  extra: {
    appDisplayName: "Lumen's Ark",
  },
  newArchEnabled: true, // For Fabric renderer + TurboModules
  assetBundlePatterns: ["**/*"],
});

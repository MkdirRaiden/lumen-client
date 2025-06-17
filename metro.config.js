const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Add alias support for cleaner imports
config.resolver.alias = {
    "@": path.resolve(__dirname),
    "@components": path.resolve(__dirname, "components"),
    "@lib": path.resolve(__dirname, "lib"),
    "@utils": path.resolve(__dirname, "utils")
};

module.exports = withNativeWind(config, {
    input: "./global.css", // make sure this file exists at the root
});

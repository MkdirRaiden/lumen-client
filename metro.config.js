const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

config.resolver.extraNodeModules = {
    "@": projectRoot,
    "@components": path.resolve(projectRoot, "components"),
    "@lib": path.resolve(projectRoot, "lib"),
    "@utils": path.resolve(projectRoot, "utils"),
    "@types": path.resolve(projectRoot, "types"),
};

module.exports = withNativeWind(config, {
    input: "./global.css", // Make sure global.css exists at the root
});

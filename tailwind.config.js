const plugin = require("tailwindcss/plugin");
const light = require("./lib/theme/light").default;
const dark = require("./lib/theme/dark").default;
const themeTokens = require("./lib/theme/theme-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // toggle "dark" class at root
  presets: [require("nativewind/preset")],
  theme: themeTokens,
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": light,
        ".dark": dark,
      });
    }),
  ],
};

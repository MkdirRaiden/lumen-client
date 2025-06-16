const plugin = require("tailwindcss/plugin");
const light = require("./lib/theme/light").default;
const dark = require("./lib/theme/dark").default;

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
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(var(--shadow-color))",
        md: "0 4px 6px -1px rgb(var(--shadow-color))",
        lg: "0 10px 15px -3px rgb(var(--shadow-color))",
        glow: "0 0 12px rgba(255, 255, 255, 0.05)", // optional
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        xl: "24px"
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ":root": light,
        ".dark": dark,
      });
    }),
  ],
};

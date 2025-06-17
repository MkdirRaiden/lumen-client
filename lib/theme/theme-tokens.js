module.exports = {
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
    glow: "0 0 12px rgba(255, 255, 255, 0.05)",
  },
  backgroundImage: {
    "gradient-primary":
      "linear-gradient(to right, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
  },
  borderRadius: {
    sm: "6px",
    md: "12px",
    xl: "24px",
  },
};

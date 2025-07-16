module.exports = {
  colors: {
    bg: "rgb(var(--color-bg) / <alpha-value>)",
    screen: "rgb(var(--color-screen) / <alpha-value>)",
    text: "rgb(var(--color-text) / <alpha-value>)",
    primary: "rgb(var(--color-primary) / <alpha-value>)",
    secondary: "rgb(var(--color-secondary) / <alpha-value>)",
    accent: "rgb(var(--color-accent) / <alpha-value>)",
    muted: "rgb(var(--color-muted) / <alpha-value>)",
    border: "rgb(var(--color-border) / <alpha-value>)",
    focus: "rgb(var(--color-focus) / <alpha-value>)",
    danger: "rgb(var(--color-danger) / <alpha-value>)",
    surface: "rgb(var(--color-surface) / <alpha-value>)",

    //  New additions
    "xp-bar": "rgb(var(--color-xp-bar) / <alpha-value>)",
    "avatar-ring": "rgb(var(--color-avatar-ring) / <alpha-value>)",
    "card-bg": "rgb(var(--color-card-bg) / <alpha-value>)",
    "verse-highlight": "rgb(var(--color-verse-highlight) / <alpha-value>)",

    // Ark tier progression
    "tier-bronze": "rgb(var(--color-tier-bronze) / <alpha-value>)",
    "tier-silver": "rgb(var(--color-tier-silver) / <alpha-value>)",
    "tier-gold": "rgb(var(--color-tier-gold) / <alpha-value>)",
    "tier-divine": "rgb(var(--color-tier-divine) / <alpha-value>)",
  },

  boxShadow: {
    sm: "0 1px 2px 0 rgb(var(--shadow-color))",
    md: "0 4px 6px -1px rgb(var(--shadow-color))",
    lg: "0 10px 15px -3px rgb(var(--shadow-color))",
    glow: "0 0 12px rgba(255, 255, 255, 0.05)",
    "glow-primary": "0 0 8px rgb(var(--color-primary) / 0.5)",
    "glow-tier-gold": "0 0 10px rgb(var(--color-tier-gold) / 0.4)",
    "glow-tier-divine": "0 0 14px rgb(var(--color-tier-divine) / 0.5)",
  },

  backgroundImage: {
    "gradient-primary":
      "linear-gradient(to right, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
    "gradient-radial":
      "radial-gradient(circle, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
  },

  borderRadius: {
    sm: "6px",
    md: "12px",
    xl: "24px",
    "2xl": "36px",
  },
};

export const routes = {
  tabs: {
    home: "/(tabs)/home" as const,
    explore: "/(tabs)/explore" as const,
    learn: "/(tabs)/learn" as const,
    settings: "/(tabs)/settings" as const,
  },
  stack: {
    truth: "/(stack)/truth" as const,
    onboarding: {
      screen1: "/(stack)/onboarding" as const,
      screen2: "/(stack)/onboarding/screen2" as const,
      screen3: "/(stack)/onboarding/screen3" as const,
      screen4: "/(stack)/onboarding/screen4" as const,
    },
  },
};

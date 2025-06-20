// lib/routes.ts

export const routes = {
  tabs: {
    home: "/(tabs)/home" as const,
    explore: "/(tabs)/explore" as const,
    learn: "/(tabs)/learn" as const,
    settings: "/(tabs)/settings" as const,
  },
  stack: {
    truth: "/(stack)/truth" as const,
  },
  // You can add more sections later, e.g.:
  // auth: {
  //   login: "/(auth)/login" as const,
  //   register: "/(auth)/register" as const,
  // },
  // modals: {
  //   feedback: "/modal/feedback" as const,
  // },
};

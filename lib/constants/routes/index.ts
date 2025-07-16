export const routes = {
  // MAIN TABS – Ark's Pillars
  tabs: {
    journey: "/(tabs)/journey",
    ark: "/(tabs)/ark",
    insight: "/(tabs)/insight",
    explore: "/(tabs)/explore",
    profile: "/(tabs)/profile",
  },

  // STORY & PROGRESSION ROUTES – Deep stack screens
  stack: {
    // Encounters with prophets, sages, rebels, etc.
    encounter: "/(stack)/encounter/[slug]",

    // Resource detail pages (locked until unlocked in journey)
    scripture: "/(stack)/scripture/[slug]",
    book: "/(stack)/book/[slug]",
    voice: "/(stack)/voice/[slug]",

    // Historical / divine figures
    figures: {
      list: "/(stack)/figures/[category]",
      detail: "/(stack)/figures/[category]/[slug]",
    },

    // Structured awakening modules
    modules: {
      truth: "/(stack)/modules/truth",
      rhetoric: "/(stack)/modules/rhetoric",
      myths: "/(stack)/modules/myths",
      awakening: "/(stack)/modules/awakening",
    },

    // AI-powered spiritual guide
    askLumen: "/(stack)/ask-lumen",

    // Hidden truths from history
    injustice: "/(stack)/injustice/[slug]",

    // Lumen's divine vision
    vision: "/(stack)/vision",

    // The Hall of Awakened Ones (XP level, virtue log, etc.)
    hall: "/(stack)/awakened",

    // First-time experience
    onboarding: {
      intro: "/(stack)/onboarding",
      purpose: "/(stack)/onboarding/purpose",
      geospawn: "/(stack)/onboarding/geospawn",
      system: "/(stack)/onboarding/system",
      intention: "/(stack)/onboarding/intention",
    },
  },

  // OPTIONAL MODALS – Small overlays like popups or focused actions
  modals: {
    chooseAvatar: "/(modals)/avatar",
    claimReward: "/(modals)/reward",
    confirmAwakening: "/(modals)/awakening",
    zoomPDF: "/(modals)/zoom-pdf/[file]",
  },
} as const; // <== here

export type TabRoute = keyof typeof routes.tabs;
export type ModuleRoute = keyof typeof routes.stack.modules;
// Keys of onboarding routes (e.g., 'intro', 'purpose', ...)
export type OnboardingRouteKey = keyof typeof routes.stack.onboarding;
// Values of onboarding paths (e.g., '/(stack)/onboarding/purpose')
export type OnboardingRoutePath =
  (typeof routes.stack.onboarding)[OnboardingRouteKey];
export type ModalRoute = keyof typeof routes.modals;

export type FigureCategory =
  | "prophets"
  | "sages"
  | "scientists"
  | "mythological"
  | "rebels"
  | "leaders"
  | "suppressed-voices";

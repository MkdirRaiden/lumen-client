export const routeNames = {
  // Onboarding flow
  "onboarding.intro": "onboarding/index",
  "onboarding.purpose": "onboarding/purpose",
  "onboarding.geospawn": "onboarding/geospawn",
  "onboarding.system": "onboarding/system",
  "onboarding.intention": "onboarding/intention",

  // Core modules
  "modules.truth": "modules/truth",
  "modules.rhetoric": "modules/rhetoric",
  "modules.myths": "modules/myths",
  "modules.awakening": "modules/awakening",

  // Key stack pages
  askLumen: "ask-lumen/index",
  awakened: "awakened/index",
  vision: "vision/index",

  // Dynamic paths (these can't be statically imported but added for type safety)
  encounter: "encounter/[slug]",
  "figures.list": "figures/[category]",
  "figures.detail": "figures/[category]/[slug]",
  scripture: "scripture/[slug]",
  book: "book/[slug]",
  voice: "voice/[slug]",
  injustice: "injustice/[slug]",
} as const;

export type RouteNameKey = keyof typeof routeNames;
export type RouteNameValue = (typeof routeNames)[RouteNameKey];

export function getRouteName(key: RouteNameKey): RouteNameValue {
  return routeNames[key];
}

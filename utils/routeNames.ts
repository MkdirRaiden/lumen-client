export const routeNames = {
  onboarding1: "onboarding/index",
  onboarding2: "onboarding/screen2",
  onboarding3: "onboarding/screen3",
  onboarding4: "onboarding/screen4",
  truth: "truth/index",
} as const;

export type RouteNameKey = keyof typeof routeNames;

export function getRouteName(key: RouteNameKey) {
  return routeNames[key];
}

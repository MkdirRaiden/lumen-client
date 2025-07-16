import { routes, type OnboardingRoutePath } from "@lib/constants/routes";

// Ordered list of all onboarding steps
export const onboardingScreens: OnboardingRoutePath[] = [
  routes.stack.onboarding.intro,
  routes.stack.onboarding.purpose,
  routes.stack.onboarding.geospawn,
  routes.stack.onboarding.system,
  routes.stack.onboarding.intention,
];

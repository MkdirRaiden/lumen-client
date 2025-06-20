import ScreenWrapper from "@components/common/ScreenWrapper";
import { HeroBanner } from "@components/home/HeroBanner";
import { ModulesList } from "@components/home/ModulesList";

export default function HomeScreen() {
  return (
    <ScreenWrapper scroll>
      <HeroBanner />
      <ModulesList />
    </ScreenWrapper>
  );
}

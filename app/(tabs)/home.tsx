import { HeroBanner } from "@components/home/HeroBanner";
import { ModulesList } from "@components/home/ModulesList";
import PageLayout from "@components/layouts/PageLayout";

export default function HomeScreen() {
  return (
    <PageLayout scroll>
      <HeroBanner />
      <ModulesList />
    </PageLayout>
  );
}

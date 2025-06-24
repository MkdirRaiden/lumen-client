import { ModulesList } from "@components/home/ModulesList";
import PageLayout from "@components/layouts/PageLayout";

export default function ExploreScreen() {
  return (
    <PageLayout scroll padded>
      <ModulesList showAll />
    </PageLayout>
  );
}

import { Header } from "@components/home/Header";
import { HeroBanner } from "@components/home/HeroBanner";
import { ModulesList } from "@components/home/ModulesList";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-bg">
      <Header />
      <HeroBanner />
      <ModulesList />
    </ScrollView>
  );
}

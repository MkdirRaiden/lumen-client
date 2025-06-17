// components/home/ModulesList.tsx
import { useRouter } from "expo-router";
import { Book, LucideIcon, ShieldAlert } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

// Define icon map
const iconMap: Record<string, LucideIcon> = {
  book: Book,
  "shield-alert": ShieldAlert,
};

// Define module type
type Module = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  route?: string;
  status: "active" | "coming-soon";
};

// Module list
const modules: Module[] = [
  {
    title: "Truth Across Religions",
    description: "Explore essence and contrasts of world religions.",
    icon: "book",
    route: "/truth",
    status: "active",
  },
  {
    title: "Fight Misinformation",
    description: "Verify claims with ethical tools.",
    icon: "shield-alert",
    status: "coming-soon",
  },
];

// Component
export const ModulesList = () => {
  const router = useRouter();

  return (
    <View className="space-y-4">
      {modules.map((module, idx) => {
        const Icon = iconMap[module.icon];
        const isComingSoon = module.status === "coming-soon";

        return (
          <Pressable
            key={idx}
            onPress={
              module.route
                ? () => {
                    router.push(module.route as any);
                  }
                : undefined
            }
            className={`p-4 mb-4 rounded-xl border ${
              isComingSoon ? "opacity-50 bg-muted/20" : "bg-card"
            }`}
            disabled={isComingSoon}
          >
            <View className="flex-row items-center space-x-3">
              <Icon size={24} className="text-primary" />
              <View className="flex-1">
                <Text className="text-lg font-medium">{module.title}</Text>
                <Text className="text-sm text-muted">{module.description}</Text>
              </View>
              {isComingSoon && (
                <Text className="text-xs text-muted font-medium">
                  Coming Soon
                </Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

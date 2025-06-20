import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/useTheme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type IconName =
  | "book-open-variant"
  | "shield-alert-outline"
  | "history"
  | "atom-variant";

const iconMap: Record<string, IconName> = {
  book: "book-open-variant",
  history: "history",
  science: "atom-variant",
  "shield-alert": "shield-alert-outline",
};

type Module = {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  route?: (typeof routes.stack)[keyof typeof routes.stack];
  status: "active" | "coming-soon";
};

const modules: Module[] = [
  {
    title: "Truth Across Religions",
    description: "Explore essence and contrasts of world religions.",
    icon: "book",
    route: routes.stack.truth,
    status: "active",
  },
  {
    title: "Explore History",
    description: "Understand history from critical and verified sources.",
    icon: "history",
    status: "coming-soon",
  },
  {
    title: "Science & Religion",
    description: "Discover where science and faith align or conflict.",
    icon: "science",
    status: "coming-soon",
  },
  {
    title: "Fight Misinformation",
    description: "Verify claims with ethical tools.",
    icon: "shield-alert",
    status: "coming-soon",
  },
];

export const ModulesList = () => {
  const router = useRouter();
  const { get } = useThemeColors();
  const { theme } = useTheme();

  return (
    <View className="space-y-2">
      {modules.map((module, idx) => {
        const iconName = iconMap[module.icon];
        const isComingSoon = module.status === "coming-soon";

        return (
          <Pressable
            key={String(idx)}
            onPress={() => {
              if (module.route) {
                router.push(module.route);
              }
            }}
            className={`p-4 mb-4 rounded-xl bg-bg ${
              isComingSoon ? "opacity-50 bg-muted/5" : ""
            } ${theme === "light" ? "shadow-sm" : "border border-muted"}`}
            disabled={isComingSoon}
            style={
              theme === "light"
                ? { shadowColor: `rgb(${get("--shadow-color")})` }
                : undefined
            }
          >
            <View className="flex-row items-center gap-4">
              <MaterialCommunityIcons
                name={iconName}
                size={40}
                color={`rgb(${get("--color-secondary")})`}
              />
              <View className="flex-1">
                <Text className="text-lg font-medium text-text">
                  {String(module.title)}
                </Text>
                <Text className="text-sm text-muted">
                  {String(module.description)}
                </Text>
              </View>
              {isComingSoon && (
                <Text
                  className={`text-xs font-medium ${
                    theme === "light" ? "text-accent" : "text-muted"
                  }`}
                >
                  {String("Coming Soon")}
                </Text>
              )}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

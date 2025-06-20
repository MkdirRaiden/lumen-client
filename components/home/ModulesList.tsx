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

const modules = [
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
    <View className="mt-6">
      {modules.map((module, idx) => {
        const iconName = iconMap[module.icon];
        const isComingSoon = module.status === "coming-soon";

        const pressableClasses = [
          "p-4 mb-3 rounded-xl",
          "bg-bg",
          isComingSoon && "opacity-50 bg-screen",
          theme === "light" ? "shadow-sm" : "border border-muted",
        ]
          .filter(Boolean)
          .join(" ");

        const shadowStyle =
          theme === "light"
            ? { shadowColor: `rgb(${get("--shadow-color")})` }
            : undefined;

        return (
          <Pressable
            key={String(idx)}
            onPress={() => {
              if (!isComingSoon && module.route) router.push(module.route);
            }}
            className={pressableClasses}
            style={shadowStyle}
            disabled={isComingSoon}
            accessibilityRole="button"
            accessibilityLabel={module.title}
          >
            <View className="flex-row items-center gap-4">
              <MaterialCommunityIcons
                name={iconName}
                size={40}
                color={`rgb(${get("--color-secondary")})`}
              />
              <View className="flex-1">
                <Text className="text-lg font-medium text-text">
                  {module.title}
                </Text>
                <Text className="text-sm text-muted/90">
                  {module.description}
                </Text>
              </View>
              {isComingSoon && (
                <Text className="text-xs font-bold text-muted">
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

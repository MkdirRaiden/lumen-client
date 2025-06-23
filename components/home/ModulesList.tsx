import { Feather } from "@expo/vector-icons";
import { useTheme, useThemeColors } from "@lib/hooks/useTheme";
import { routes } from "@lib/routes";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Module = {
  title: string;
  description: string;
  icon: keyof typeof Feather.glyphMap;
  route?: string;
  status: "active" | "coming-soon";
};

const modules: Module[] = [
  {
    title: "Truth Across Religions",
    description: "Explore essence and contrasts of world religions.",
    icon: "book-open",
    route: routes.stack.truth,
    status: "active",
  },
  {
    title: "Explore History",
    description: "Understand history from critical and verified sources.",
    icon: "clock",
    status: "coming-soon",
  },
  {
    title: "Science & Religion",
    description: "Discover where science and faith align or conflict.",
    icon: "aperture",
    status: "coming-soon",
  },
  {
    title: "Fight Misinformation",
    description: "Verify claims with ethical tools.",
    icon: "shield",
    status: "coming-soon",
  },
];

export const ModulesList = () => {
  const router = useRouter();
  const { get } = useThemeColors();
  const { theme } = useTheme();

  return (
    <View className="mt-8">
      {modules.map((module, idx) => {
        const isComingSoon = module.status === "coming-soon";

        const pressableClasses = [
          "p-4 mb-3 rounded-xl",
          "bg-bg min-h-24",
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
            key={idx}
            onPress={() => {
              if (!isComingSoon && module.route) {
                router.push(module.route as any);
              }
            }}
            className={pressableClasses}
            style={shadowStyle}
            disabled={isComingSoon}
            accessibilityRole="button"
            accessibilityLabel={module.title}
          >
            <View className="flex-row items-center gap-4">
              <Feather
                name={module.icon}
                size={28}
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

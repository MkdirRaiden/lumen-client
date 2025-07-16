import { ModuleCardGrid } from "@components/cards/ModuleCardGrid";
import { ModuleCardHorizontal } from "@components/cards/ModuleCardHorizontal";
import { modulesList } from "@lib/constants/modules";
import { routes } from "@lib/constants/routes";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  showAll?: boolean;
};

const allTags = [
  "religion",
  "history",
  "science",
  "philosophy",
  "AI",
  "scripture",
];

export const ModulesList = ({ showAll = false }: Props) => {
  const router = useRouter();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredModules = useMemo(() => {
    let list = showAll ? modulesList : modulesList.filter((m) => m.featured);
    if (activeTag) {
      list = list.filter((m) => m.tags.includes(activeTag));
    }
    return list;
  }, [showAll, activeTag]);

  return (
    <View className="mt-4">
      {showAll && (
        <View className="flex-row flex-wrap gap-2 px-1 mb-6">
          <Pressable
            onPress={() => setActiveTag(null)}
            className={`px-4 py-1 rounded-full border ${
              activeTag === null
                ? "bg-secondary/20 border-secondary"
                : "border-muted"
            }`}
          >
            <Text
              className={`text-sm ${activeTag === null ? "text-secondary font-semibold" : "text-muted"}`}
            >
              All
            </Text>
          </Pressable>
          {allTags.map((tag) => (
            <Pressable
              key={tag}
              onPress={() => setActiveTag(tag)}
              className={`px-4 py-1 rounded-full border ${
                activeTag === tag
                  ? "bg-secondary/20 border-secondary"
                  : "border-muted"
              }`}
            >
              <Text
                className={`text-sm ${activeTag === tag ? "text-secondary font-semibold" : "text-muted"}`}
              >
                {tag}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      <View className={showAll ? "flex-row flex-wrap justify-between" : ""}>
        {filteredModules.map((module, idx) => {
          const onPress = () => {
            if (!module.route || module.status === "coming-soon") return;
            router.push(module.route as any);
          };

          return showAll ? (
            <ModuleCardGrid
              key={idx}
              module={module}
              onPress={onPress}
              disabled={module.status === "coming-soon"}
            />
          ) : (
            <ModuleCardHorizontal
              key={idx}
              module={module}
              onPress={onPress}
              disabled={module.status === "coming-soon"}
            />
          );
        })}
      </View>

      {!showAll && (
        <Pressable
          onPress={() => router.push(routes.tabs.explore)}
          className="mt-2 self-center bg-primary/10 px-5 py-2 rounded-full"
        >
          <Text className="text-primary font-medium text-sm">
            See All Modules
          </Text>
        </Pressable>
      )}
    </View>
  );
};

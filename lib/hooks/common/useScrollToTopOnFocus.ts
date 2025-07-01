import { useFocusEffect, useNavigation } from "@react-navigation/native";
import type { RefObject } from "react";
import { useCallback, useEffect } from "react";
import type { FlatList, ScrollView, SectionList } from "react-native";

type Scrollable = ScrollView | FlatList<any> | SectionList<any>;

export function useScrollToTopOnFocus(ref: RefObject<Scrollable>) {
  const navigation = useNavigation<any>(); // ← Safely cast as `any` to handle mixed nav

  const scrollToTop = () => {
    const node = ref.current;
    if (!node) return;

    if ("scrollTo" in node) {
      node.scrollTo({ y: 0, animated: false });
    } else if ("scrollToOffset" in node) {
      node.scrollToOffset({ offset: 0, animated: false });
    }
  };

  useFocusEffect(
    useCallback(() => {
      scrollToTop();
    }, [])
  );

  useEffect(() => {
    // Only attach tabPress if the navigator supports it
    const maybeAddTabPressListener = navigation?.addListener?.(
      "tabPress",
      () => {
        scrollToTop();
      }
    );

    return () => {
      maybeAddTabPressListener?.();
    };
  }, [navigation]);
}

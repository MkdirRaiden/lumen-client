import { useScrollToTopOnFocus } from "@lib/hooks/common/useScrollToTopOnFocus";
import type { PageLayoutProps } from "@lib/types";
import { RefObject, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";

export default function PageLayout({
  children,
  scroll = false,
  padded = true,
  centered = false,
  className = "",
}: PageLayoutProps) {
  const scrollRef = useRef<ScrollView | null>(null) as RefObject<ScrollView>;

  if (scroll) {
    useScrollToTopOnFocus(scrollRef);
  }

  const containerClassName = `flex-1 bg-screen ${padded ? "px-4" : ""} ${className}`;

  const contentContainerStyle: ViewStyle | undefined = scroll
    ? {
        paddingBottom: 24,
        ...(centered && {
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }),
      }
    : centered
      ? {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }
      : undefined;

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // tweak if header present
    >
      <SafeAreaView className="flex-1">
        {scroll ? (
          <ScrollView
            ref={scrollRef}
            className={containerClassName}
            contentContainerStyle={contentContainerStyle}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View className={containerClassName} style={contentContainerStyle}>
            {children}
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

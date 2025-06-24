import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";

type PageLayoutProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  centered?: boolean;
};

export default function PageLayout({
  children,
  scroll = false,
  padded = true,
  centered = false,
}: PageLayoutProps) {
  const Container = scroll ? ScrollView : View;

  const containerClassName = `flex-1 bg-screen ${padded ? "px-4" : ""}`;
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

  const containerProps = scroll
    ? {
        contentContainerStyle,
        keyboardShouldPersistTaps: "handled" as const,
      }
    : {};

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Container className={containerClassName} {...containerProps}>
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

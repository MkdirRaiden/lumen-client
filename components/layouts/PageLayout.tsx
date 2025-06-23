import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  ViewStyle,
} from "react-native";

type ScreenWrapperProps = {
  children: ReactNode;
  scroll?: boolean;
  padded?: boolean;
  centered?: boolean;
};

export default function ScreenWrapper({
  children,
  scroll = false,
  padded = true,
  centered = false,
}: ScreenWrapperProps) {
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

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Container
          className={containerClassName}
          contentContainerStyle={contentContainerStyle}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

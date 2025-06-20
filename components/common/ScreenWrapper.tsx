import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
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

  const outerClass = `flex-1 bg-screen ${padded ? "px-4" : ""}`;

  const contentStyle: ViewStyle | undefined = scroll
    ? {
        paddingBottom: 24,
        ...(centered && {
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }),
      }
    : undefined;

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView className="flex-1">
        <Container
          className={outerClass}
          contentContainerStyle={contentStyle}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </Container>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

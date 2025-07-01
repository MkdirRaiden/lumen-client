import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Message = {
  type: "user" | "lumen";
  text: string;
};

export default function AskLumenScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const handleSubmit = (value?: string) => {
    const question = value ?? input;
    if (!question.trim()) return;
    Keyboard.dismiss();
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "lumen",
          text: `Great question: "${question}" – here's a thoughtful answer...`,
        },
      ]);
      setLoading(false);
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Try 120 if header exists
    >
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: item.type === "user" ? "#fee" : "#eef",
                alignSelf: item.type === "user" ? "flex-end" : "flex-start",
                margin: 8,
                padding: 10,
                borderRadius: 12,
              }}
            >
              <Text>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        />

        {/* Input */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 12,
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderRadius: 999,
              backgroundColor: "#f0f0f0",
              paddingHorizontal: 16,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Ask Lumen..."
              style={{ flex: 1, fontSize: 16 }}
              onSubmitEditing={() => handleSubmit()}
            />
            <TouchableOpacity onPress={() => handleSubmit()}>
              <Feather name="send" size={20} color="#555" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

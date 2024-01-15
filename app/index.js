import React from "react";
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View>
      <Text>Login</Text>
      <Button onPress={() => router.replace("(main)/home")} title="login" />
    </View>
  );
}

import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => router.push("(home-details)/details")}
        title="details"
      />
      <Button
        onPress={() =>
          router.push({
            pathname: "/setting",
            params: { name: "raya", password: "123" },
          })
        }
        title="setting"
      />
      <Button onPress={() => router.replace("/")} title="logout" />
    </View>
  );
}

import React from "react";
import { Tabs } from "expo-router";

export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home-details)"
        options={{ tabBarLabel: "home", headerShown: false }}
      />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

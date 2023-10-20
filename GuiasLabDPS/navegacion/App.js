import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import NavigationTab from "./src/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab></NavigationTab>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

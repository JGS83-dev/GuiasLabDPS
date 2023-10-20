import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ContactStack from "./ContactStack";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="aboutStack"
        component={AboutStack}
        options={{ title: "About" }}
      />
      <Tab.Screen
        name="contactStack"
        component={ContactStack}
        options={{ title: "Contact" }}
      />
    </Tab.Navigator>
  );
}

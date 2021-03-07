import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import FriendsScreen from "../screens/FriendsScreen/FriendsScreen";
import React from "react";

export const Tab = createBottomTabNavigator();

export default function AppNavigator({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

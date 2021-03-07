import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FloorScreen from "../screens/FloorScreen/FloorScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import FriendsScreen from "../screens/FriendsScreen/FriendsScreen";
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen'
import React from "react";

export const Tab = createBottomTabNavigator();

export default function AppNavigator({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Floor" component={FloorScreen} />
            <Tab.Screen name="Friends" component={FriendsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
        </Tab.Navigator>
    );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import FloorScreen from "../screens/FloorScreen/FloorScreen";
import FriendsScreen from "../screens/FriendsScreen/FriendsScreen";
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen'
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";

export const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
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

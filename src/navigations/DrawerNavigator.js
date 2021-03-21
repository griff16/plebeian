import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="Tabs" component={TabNavigator} />
        </Drawer.Navigator>
    );
}

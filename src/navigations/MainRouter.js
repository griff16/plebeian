import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignupScreen from "../screens/SignupScreen/SignupScreen";
import { persistentLogin } from "../utilities/authUtls";
import TabNavigator from "./TabNavigator";

export default function MainRouter() {
    const Stack = createStackNavigator();
    const user = useSelector((state) => state.user.val);
    const dispatch = useDispatch();
    console.log("Mainrouter.js/  router user:", user);

    // check persisten login
    useEffect(() => {
        persistentLogin(dispatch);
    }, []);

    return (
        <Stack.Navigator>
            {user ? (
                <Stack.Screen name="AppHome" component={TabNavigator} />
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignupScreen} />
                </>
            )}
        </Stack.Navigator>
    );
}

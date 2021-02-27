import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";

const Stack = createStackNavigator();
export const AuthContext = React.createContext(null);

export default function App() {
    // user data
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user ? (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    ) : (
                        <>
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                            />
                            <Stack.Screen
                                name="Signup"
                                component={SignupScreen}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

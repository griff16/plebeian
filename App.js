import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
    
    // user data
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user ? (
                        <Stack.Screen name="Home" component={HomeScreen} />
                    ) : (
                        <Stack.Screen name="Login" component={LoginScreen} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
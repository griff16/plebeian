import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "./src/firebase/config";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";
import AppNavigator, { Tab } from './src/navigations/AppNavigator'

const Stack = createStackNavigator();
export const AuthContext = React.createContext(null);

export default function App() {
    // user data
    const [user, setUser] = useState(null);


    useEffect(() => {
        const usersRef = firebase.firestore().collection("users");
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data();
                        setUser(userData);
                    })
                    .catch((error) => {
                        alert(error);
                    });
            } else {
                console.log('not logged into any user');
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <Stack.Navigator>
                    {user ? (
                        <Stack.Screen name="AppHome" component={AppNavigator} />
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

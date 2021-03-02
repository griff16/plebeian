import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { firebase } from "./src/firebase/config";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen/SignupScreen";
// import LoadingScreen from "./src/screens/LoadingScreen/LoadingScreen";

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
                console.log('no user');
            }
        });
    }, []);

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

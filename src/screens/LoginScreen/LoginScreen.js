import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";

import { firebase } from "../../firebase/config";
import { login, logout } from "../../redux/slices/authSlice";
import { loginPress } from "../../utilities/authUtls";
import styles from "./styles";

export default function LoginScreen({ navigation }) {
    // preset fields to login
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("qwerty1!");
    ///////////////////////////////////
    const user = useSelector((state) => state.user.val);
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%" }}
                keyboardShouldPersistTaps="always"
            >
                <Image
                    style={styles.logo}
                    source={require("../../../assets/icon.png")} // add icon
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => loginPress(navigation, dispatch, email, password)}
                >
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Don't have an account?{" "}
                        <Text
                            onPress={() => {
                                navigation.navigate("Signup");
                            }}
                            style={styles.footerLink}
                        >
                            Sign up
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

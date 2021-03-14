import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";

import { firebase } from "../../firebase/config";
import { signupPress } from "../../utilities/authUtls";
import styles from "./styles";

export default function SignupScreen({ navigation }) {
    const [fullName, setFullName] = useState("jane");
    const [email, setEmail] = useState("jane@email.com");
    const [password, setPassword] = useState("123456");
    const [confirmPassword, setConfirmPassword] = useState("123456");
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%" }}
                keyboardShouldPersistTaps="always"
            >
                <Image
                    style={styles.logo}
                    source={require("../../../assets/icon.png")}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
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

                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        signupPress(
                            navigation,
                            dispatch,
                            email,
                            password,
                            confirmPassword,
                            fullName
                        )
                    }
                >
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Already got an account?{" "}
                        <Text
                            onPress={() => {
                                navigation.navigate("Login");
                            }}
                            style={styles.footerLink}
                        >
                            Log in
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

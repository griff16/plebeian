import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../../App";
import styles from "./styles";

export default function HomeScreen(props) {
    // fields
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(AuthContext);

    return (
        <View style={styles}>
            <Text>This is Home Screen!</Text>
            <View>
                {user && (
                    <Text>Is Logged IN as {user.email}</Text>
                )}  
            </View>
        </View>
    );
}


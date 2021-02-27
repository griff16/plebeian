import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../App";


export default function HomeScreen(props) {

    // fields
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const { promiseInProgress } = usePromiseTracker();
    const {user, setUser} = useContext(AuthContext);

    return (
        <View>
            <Text>This is Home Screen!</Text>
            <View>
                <Text>Is Logged IN as {user.email}</Text>
            </View>
        </View>
    );
}

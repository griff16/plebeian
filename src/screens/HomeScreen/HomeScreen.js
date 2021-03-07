import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../App";
import { firebase } from "../../firebase/config";
import styles from "./styles";

export default function HomeScreen(props) {
    // fields
    // const [isLoggedin, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(AuthContext);

    const onSignoutPress = () => {  // sign out feature
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("user is signed out successfully");
                setUser(null);
                props.navigation.navigate("Login");
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <View style={styles}>
            <Text>This is Home Screen!</Text>
            <View>{user && <Text>Is Logged IN as {user.email}</Text>}</View>

            {/* <Text style={styles.buttonTitle}>{console.log(props)}</Text> */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => onSignoutPress()}
            >
                <Text style={styles.buttonTitle}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

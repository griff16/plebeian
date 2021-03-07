import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../App";
import { firebase } from "../../firebase/config";
import utlSignout from '../../utilities/utlSignout'
import styles from "./styles";

export default function FloorScreen(props) {
    // fields
    // const [isLoggedin, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    
    return (
        <View style={styles}>
            <Text>This is Floor Screen!</Text>
            <View>{user && <Text>Is Logged IN as {user.email}</Text>}</View>


            {/* this is sign out feature for debug purpose */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => utlSignout(props.navigation, setUser)}
            >
                <Text style={styles.buttonTitle}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

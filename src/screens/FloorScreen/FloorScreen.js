import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { firebase } from "../../firebase/config";
import { login, logout } from '../../redux/slices/authSlice';
import { signoutPress } from "../../utilities/authUtls";
import styles from "./styles";

export default function FloorScreen({ navigation }) {
    // fields
    const user = useSelector((state) => state.user.val);
    const dispatch = useDispatch();

    return (
        <View style={styles}>
            <Text>This is Floor Screen!</Text>
            <View>{user && <Text>Is Logged IN as: {user.email}</Text>}</View>

            


            {/* this is sign out feature for debug purpose */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => signoutPress(navigation, dispatch)}
            >
                <Text style={styles.buttonTitle}>Sign Out</Text>
            </TouchableOpacity>
            {/* end of the button */}
        </View>
    );
}

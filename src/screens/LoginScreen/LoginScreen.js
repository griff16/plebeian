import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { trackPromise } from "react-promise-tracker";
import { firebase } from "../firebase/Firebase";
// import { usePromiseTracker } from "react-promise-tracker";
// import { BeatLoader } from "react-spinners";
import { AuthContext } from "../../App";

export default function LoginScreen(props) {
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("qwerty1!");
    const [isLoggedin, setIsLoggedIn] = useState(false);
    // const { promiseInProgress } = usePromiseTracker();
    let [color, setColor] = useState("#F5A623");
    const { user, setUser } = useContext(AuthContext);

    console.log("props", props);
    // const onFooterLinkPress = () => {
    //     navigation.navigate("Registration");
    // };

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection("users");

                usersRef
                    .doc(uid)
                    .get()
                    .then((firestoreDocument) => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.");
                            return;
                        }
                        const user = firestoreDocument.data();
                        setUser(user);
                        setIsLoggedIn(true);
                        props.navigation.navigate("Home", { user });
                    })
                    .catch((error) => {
                        alert(error);
                    });
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text>
                This is <b>LOGIN</b> Screen!
            </Text>
            <TouchableOpacity onPress={onLoginPress}>
                <Text style={{ color: "red" }}>Login</Text>
            </TouchableOpacity>

            {isLoggedin && (
                <View>
                    <Text>Is Logged IN {user.email}</Text>
                    {console.log(user)}
                </View>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


import { firebase } from "../firebase/config";
// { navigation, setUser }

export default function utlSignout(navigation, setUser) {

    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("user is signed out successfully");
            setUser(null);
            navigation.navigate("Login");
        })
        .catch((error) => {
            alert(error);
        });
}

import { firebase } from "../firebase/config";
import { login, logout } from "../redux/slices/authSlice";

function signoutPress(navigation, dispatch) {
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(logout());
            navigation.navigate("Login");
            console.log("utlSignout: user is signed out successfully");
        })
        .catch((error) => {
            alert(error);
        });
}

function persistentLogin(dispatch) {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            usersRef
                .doc(user.uid)
                .get()
                .then((document) => {
                    const userData = document.data();
                    dispatch(login(userData));
                })
                .catch((error) => {
                    alert("MainRouter\n" + error);
                });
        } else {
            console.log("MainRouter: not logged into any user");
        }
    });
}

function loginPress(navigation, dispatch, email, password) {
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
                    const userData = firestoreDocument.data();
                    dispatch(login(userData)); // update redux state
                    navigation.navigate("AppHome");
                })
                .catch((error) => {
                    alert("LoginScreen: ", error);
                });
        })
        .catch((error) => {
            alert(error);
        });
}

function signupPress(
    navigation,
    dispatch,
    email,
    password,
    confirmPassword,
    fullName
) {
    if (password !== confirmPassword) {
        alert("Passwords don't match.");
        return;
    }

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid;
            const data = {
                id: uid,
                email,
                fullName,
            };

            const usersRef = firebase.firestore().collection("users");
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    dispatch(login(data)); // set up the user data
                    navigation.navigate("AppHome");
                })
                .catch((error) => {
                    alert(error);
                });
        })
        .catch((error) => {
            // handle error
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/weak-password") {
                alert("The password is too weak.");
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}

export { signoutPress, persistentLogin, loginPress, signupPress };

import { firebase } from "../firebase/config";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";

export default function onSignoutPress(props) {

    const { user, setUser } = useContext(AuthContext);

    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('signout press', props);
            console.log('user is signed out successfully');
            // setUser(null);
            props.navigate('Home');
        })
        .catch((error) => {
            alert(error);
        });
}

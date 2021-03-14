import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";

import MainRouter from "./src/navigations/MainRouter";
import store from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainRouter />
            </NavigationContainer>
        </Provider>
    );
}

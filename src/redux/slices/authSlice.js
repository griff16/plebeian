import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "user",
    initialState: {
        val: null,
    },
    reducers: {
        // login feature
        login: (state, userData) => {
            state.val = userData.payload;
        },

        // logout feature
        logout: (state) => {
            state.val = null;
        },
    }
});

// Action creators are generated for each case reducer function
export const { login, logout} = authSlice.actions;

export default authSlice.reducer;

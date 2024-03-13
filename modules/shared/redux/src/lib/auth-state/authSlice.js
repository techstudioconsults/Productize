import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    forgotPasswordEmailConfirmation: {
        emailSent: false,
        email: null,
    },
};

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload;
            state.token = accessToken;
        },
        setFPEmailConfirmation: (state, action) => {
            // FP - Forgot Password
            state.forgotPasswordEmailConfirmation = action.payload;
        },
        logOut: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setCredentials, logOut, setFPEmailConfirmation } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.Auth.token;
export const selectEmailConfirmation = (state) => state.Auth.forgotPasswordEmailConfirmation;

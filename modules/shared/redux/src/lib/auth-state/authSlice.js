import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    forgotPasswordEmailConfirmation: {
        emailSent: false,
        email: null,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.accessToken;
        },
        setFPEmailConfirmation: (state, action) => {
            state.forgotPasswordEmailConfirmation = action.payload;
        },
        logOut: () => initialState,
    },
});

export const { setCredentials, logOut, setFPEmailConfirmation } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.Auth.token;
export const selectEmailConfirmation = (state) => state.Auth.forgotPasswordEmailConfirmation;

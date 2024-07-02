import { createSlice } from '@reduxjs/toolkit';
 // adjust the path as necessary
import { persistor } from '../store'; // adjust the path as necessary

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
        logout: () => initialState,
    },
});

export const { setCredentials, logout, setFPEmailConfirmation } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.Auth.token;
export const selectEmailConfirmation = (state) => state.Auth.forgotPasswordEmailConfirmation;

// log out middle ware
export const logoutMiddleware = (store) => (next) => (action) => {
    if (action.type === logout.type) {
        persistor.purge().then(() => {
            window.location.href = `/auth/login`;
        });
    }
    return next(action);
};

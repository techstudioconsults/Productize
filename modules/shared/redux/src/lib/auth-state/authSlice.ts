import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  forgotPasswordEmailConfirmation: object | null;
}

const initialState: AuthState = {
  token: null,
  forgotPasswordEmailConfirmation: {
    emailSent: false,
    email: null,
  },
};

const authSlice = createSlice({
  name: 'Auth',
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

export const { setCredentials, logOut, setFPEmailConfirmation } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: any) => state.Auth.token;
export const selectEmailConfirmation = (state: any) =>
  state.Auth.forgotPasswordEmailConfirmation;

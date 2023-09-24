import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  user: object | null;
  forgotPasswordEmailConfirmation: object | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  forgotPasswordEmailConfirmation: {
    emailSent: false,
    email: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; user: object }>
    ) => {
      const { accessToken, user } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
    setFPEmailConfirmation: (state, action) => {
      // FP - Forgot Password
      state.forgotPasswordEmailConfirmation = action.payload;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.forgotPasswordEmailConfirmation = {
        emailSent: false,
        email: null,
      };
    },
  },
});

export const { setCredentials, logOut, setFPEmailConfirmation } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: any) => state.auth.token;
export const selectCurrentuser = (state: any) => state.auth.user;
export const selectEmailConfirmation = (state: any) =>
  state.auth.forgotPasswordEmailConfirmation;

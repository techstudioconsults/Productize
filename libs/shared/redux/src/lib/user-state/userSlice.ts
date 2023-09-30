import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: object | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: any) => state.User.user;

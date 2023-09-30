import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  profile: object | null;
}

const initialState: UserState = {
  profile: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.profile = user;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: any) => state.User.profile;

import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  profile: object | null;
  guideTaskCompleted: number | 0;
}

const initialState: UserState = {
  profile: null,
  guideTaskCompleted: 3,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      state.profile = user;
    },
    setTaskCount: (state) => {
      if (state.guideTaskCompleted !== 5) {
        ++state.guideTaskCompleted;
      }
    },
  },
});

export const { setUser, setTaskCount } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: any) => state.User.profile;
export const selectTaskCompletedCount = (state: any) =>
  state.User.guideTaskCompleted;

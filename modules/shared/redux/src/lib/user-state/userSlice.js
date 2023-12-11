import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    guideTaskCompleted: 0,
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload;
            state.profile = user;
        },
        setTaskCount: (state, action) => {
            if (action.payload) {
                if (state.guideTaskCompleted !== 5) {
                    state.guideTaskCompleted = 4;
                }
            } else {
                state.guideTaskCompleted = 0;
            }
        },

        resetUserStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setUser, setTaskCount, resetUserStore } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.User.profile;
export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

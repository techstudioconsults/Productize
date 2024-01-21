import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    billingHistory: null,
    // guideTaskCompleted: 0,
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload;
            state.profile = user;
        },

        setBillingHistory: (state, action) => {
            const { billingHistory } = action.payload;
            state.billingHistory = billingHistory;
        },

        resetUserStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setUser, setBillingHistory, resetUserStore } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.User.profile;
export const selectBillingHistory = (state) => state.User.billingHistory;
// export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

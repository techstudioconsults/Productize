import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: null,
    billingHistory: null,
    accountList: [],
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

        setAccountList: (state, action) => {
            const { accounts } = action.payload;
            state.accountList = accounts;
        },

        resetUserStore: (state) => {
            Object.assign(state, initialState);
        },
    },
});

export const { setUser, setBillingHistory, setAccountList, resetUserStore } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.User.profile;
export const selectBillingHistory = (state) => state.User.billingHistory;
export const selectAccountList = (state) => state.User.accountList;
// export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

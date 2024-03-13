import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
    billingHistory: null,
    accountList: [],
    payouts: [],
    payoutMetaData: {},
    payoutStats: [],
    planStatus: {
        isPlanExpired: false,
        apiDetails: null,
    },
};

const userSlice = createSlice({
    name: 'User',
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

        setPayouts: (state, action) => {
            const { payouts, payoutsMetaData } = action.payload;
            state.payouts = payouts;
            state.payoutMetaData = payoutsMetaData;
        },

        setPayoutStats: (state, action) => {
            const { payoutStats } = action.payload;
            state.payoutStats = payoutStats;
        },

        setAccountList: (state, action) => {
            const { accounts } = action.payload;
            state.accountList = accounts;
        },

        resetUserStore: (state) => {
            Object.assign(state, initialState);
        },

        FREE_PLAN_OVER_RESPONSE: (state, action) => {
            const { isPlanExpired, apiDetails } = action.payload.planStatus;
            state.planStatus.isPlanExpired = isPlanExpired;
            state.planStatus.apiDetails = apiDetails;
        },
    },
});

export const { setUser, setBillingHistory, setPayouts, setAccountList, resetUserStore, setPayoutStats } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.User.profile;
export const selectBillingHistory = (state) => state.User.billingHistory;
export const selectAccountList = (state) => state.User.accountList;
export const selectPayouts = (state) => state.User.payouts;
export const selectPayoutStats = (state) => state.User.payoutStats;
export const selectPlanStatus = (state) => state.User.planStatus;
// export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

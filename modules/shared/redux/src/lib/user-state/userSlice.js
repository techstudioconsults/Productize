import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
    analyticsGraphData: null,
    billingHistory: null,
    accountList: [],
    payouts: [],
    payoutMetaData: {},
    payoutStats: [],
    planStatus: {
        isPlanExpired: false,
        apiDetails: null,
    },
    userAnalytics: {},
    allUsers: {},
    userPaginationMetaData: null,
    payoutHistory: null,
    payoutPaginationMetaData: null,
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAllUser: (state, action) => {
            const { user, userPaginationMetaData, isFilter } = action.payload;
            state.allUsers = user;
            state.userPaginationMetaData = userPaginationMetaData;
            state.isFilter = isFilter;
        },
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
        setPayoutHistory: (state, action) => {
            const { payoutHistory, payoutPaginationMetaData } = action.payload;
            state.payoutHistory = payoutHistory;
            state.payoutPaginationMetaData = payoutPaginationMetaData;
        },
        setPayoutStats: (state, action) => {
            const { payoutStats } = action.payload;
            state.payoutStats = payoutStats;
        },

        setAccountList: (state, action) => {
            const { accounts } = action.payload;
            state.accountList = accounts;
        },

        setAnalyticsGraphData: (state, action) => {
            const { data } = action.payload;
            state.analyticsGraphData = data;
        },

        resetUserStore: (state) => {
            Object.assign(state, initialState);
        },
        setUserAnalytics: (state, action) => {
            const { userAnalytics } = action.payload;
            state.userAnalytics = userAnalytics;
        },

        FREE_PLAN_OVER_RESPONSE: (state, action) => {
            const { isPlanExpired, apiDetails } = action.payload.planStatus;
            state.planStatus.isPlanExpired = isPlanExpired;
            state.planStatus.apiDetails = apiDetails;
        },
    },
});

export const {
    setUser,
    setBillingHistory,
    setPayouts,
    setAccountList,
    resetUserStore,
    setPayoutStats,
    setAnalyticsGraphData,
    setUserAnalytics,
    setAllUser,
    setPayoutHistory
} = userSlice.actions;

export default userSlice.reducer;

export const selectAllUsers = (state) => state.User.allUsers;
export const selectCurrentUser = (state) => state.User.profile;
export const selectBillingHistory = (state) => state.User.billingHistory;
export const selectUserPaginationMetaData = (state) => state.User.userPaginationMetaData;
export const selectAccountList = (state) => state.User.accountList;
export const selectPayouts = (state) => state.User.payouts;
export const selectPayoutStats = (state) => state.User.payoutStats;
export const selectPlanStatus = (state) => state.User.planStatus;
export const selectAnalyticsGraphData = (state) => state.User.analyticsGraphData;
export const selectUserAnalytics = (state) => state.User.userAnalytics;
export const selectPayoutHistory = (state) => state.User.payoutHistory;
export const selectpayoutPaginationMetaData = (state) => state.User.payoutPaginationMetaData;
// export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

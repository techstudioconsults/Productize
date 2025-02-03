import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: null,
    analyticsGraphData: null,
    dailyAnalyticsGraphData: null,
    billingHistory: null,
    accountList: [],
    payouts: [],
    payoutMetaData: {},
    payoutStats: [],
    notifications: [],
    planStatus: {
        isPlanExpired: false,
        apiDetails: null,
    },
    userAnalytics: {},
    allUsers: {},
    allAdminUsers: {},
    userPaginationMetaData: null,
    payoutHistory: null,
    payoutPaginationMetaData: null,
    adminPaginationMetaData:null
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

        setAllAdminUser: (state, action) =>{
            const { adminUsers, adminPaginationMetaData, isFilter } = action.payload;
            state.allAdminUsers = adminUsers;
            state.adminPaginationMetaData = adminPaginationMetaData;
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
        setDailyAnalyticsGraphData: (state, action) => {
            const { data } = action.payload;
            state.dailyAnalyticsGraphData = data;
        },

        setNotifications: (state, action) => {
            const { data } = action.payload;
            state.notifications = data;
        },
        clearNotifications: (state, action) => {
            state.notifications = [];
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
    setAllAdminUser,
    setBillingHistory,
    setPayouts,
    setAccountList,
    resetUserStore,
    setPayoutStats,
    setAnalyticsGraphData,
    setAllUser,
    setNotifications,
    setPayoutHistory,
    setUserAnalytics,
    setDailyAnalyticsGraphData,
} = userSlice.actions;

export default userSlice.reducer;

export const selectAllUsers = (state) => state.User.allUsers;
export const selectAllAdminUsers = (state) => state.User.allAdminUsers;
export const selectCurrentUser = (state) => state.User.profile;
export const selectBillingHistory = (state) => state.User.billingHistory;
export const selectUserPaginationMetaData = (state) => state.User.userPaginationMetaData;
export const selectAdminUserPaginationMetaData = (state) =>state.User.adminPaginationMetaData;
export const selectAccountList = (state) => state.User.accountList;
export const selectPayouts = (state) => state.User.payouts;
export const selectPayoutStats = (state) => state.User.payoutStats;
export const selectPlanStatus = (state) => state.User.planStatus;
export const selectAnalyticsGraphData = (state) => state.User.analyticsGraphData;
export const selectUserAnalytics = (state) => state.User.userAnalytics;
export const selectPayoutHistory = (state) => state.User.payoutHistory;
export const selectpayoutPaginationMetaData = (state) => state.User.payoutPaginationMetaData;
export const selectDailyAnalyticsGraphData = (state) => state.User.dailyAnalyticsGraphData;
export const selectNotifications = (state) => state.User.notifications;
// export const selectTaskCompletedCount = (state) => state.User.guideTaskCompleted;

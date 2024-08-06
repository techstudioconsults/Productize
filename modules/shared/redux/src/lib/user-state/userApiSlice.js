import { apiSlice } from '../apiSlice';
import {
    setAccountList,
    setAnalyticsGraphData,
    setBillingHistory,
    setPayoutStats,
    setPayouts,
    setUser,
    setUserAnalytics,
    setAllUser,
    setPayoutHistory,
} from './userSlice';

const constructURL = (credentials, filteredLink) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/payouts/user`;
    }
};

const constructURL1 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/users?status=${status}`;
    }
};
const constructURL2 = (credentials, filteredLink, status) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/payouts?status=${status}`;
    }
};

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.mutation({
            query: (credentials) => ({
                url: constructURL1(
                    credentials,
                    `/users?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status ? credentials?.status : ''
                    }`,
                    credentials?.status
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAllUser({
                            isFilter: arg?.isFilter || false,
                            user: data.data,
                            userPaginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        getAllPayoutHistory: builder.mutation({
            query: (credentials) => ({
                url: constructURL2(
                    credentials,
                    `/payouts?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}&status=${
                        credentials?.status || ''
                    }`,
                    credentials?.status
                ),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log('API Data:', data);
                    dispatch(
                        setPayoutHistory({
                            payoutHistory: data.data,
                            payoutPaginationMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (err) {
                    console.error(err);
                }
            },
        }),
        getUser: builder.mutation({
            query: () => ({
                url: `/users/me`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setUser({
                            user: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        getUserAnalytics: builder.mutation({
            query: () => ({
                url: `/users/stats/admin`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        setUserAnalytics({
                            userAnalytics: res.data.data,
                        })
                    );
                } catch (error) {
                    return;
                }
            },
        }),
        verifyEmail: builder.mutation({
            query: () => ({
                url: `/auth/email/resend`,
                method: 'GET',
            }),
        }),
        upgradePlan: builder.mutation({
            query: () => ({
                url: `/subscriptions`,
                method: 'POST',
            }),
        }),
        enableSubscription: builder.mutation({
            query: () => ({
                url: `/subscriptions/enable`,
                method: 'GET',
            }),
        }),
        manageSubscription: builder.mutation({
            query: (credentials) => ({
                url: `/subscriptions/${credentials.subID}/manage`,
                method: 'GET',
            }),
        }),
        billingHistory: builder.mutation({
            query: (credentials) => ({
                url: `/subscriptions/billing`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setBillingHistory({
                            billingHistory: data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        getPayoutStats: builder.mutation({
            query: (credentials) => ({
                url: `/earnings`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setPayoutStats({
                            payoutStats: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        getPayouts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(credentials, `/payouts/user?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}`),
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setPayouts({
                            payouts: data.data,
                            payoutsMetaData: { links: data.links, meta: data.meta },
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        updateProfile: builder.mutation({
            query: (credentials) => ({
                url: `/users/me`,
                method: 'POST',
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setUser({
                            user: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        setupPaymentAccount: builder.mutation({
            query: (credentials) => ({
                url: `/accounts`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        initiateWithdrawal: builder.mutation({
            query: (credentials) => ({
                url: `/earnings/withdraw`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        getBankList: builder.mutation({
            query: () => ({
                url: `/accounts/bank-list`,
                method: 'GET',
            }),
        }),
        changePassword: builder.mutation({
            query: (credentials) => ({
                url: `/users/change-password`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        sendHelpMessage: builder.mutation({
            query: (credentials) => ({
                url: `/complaints`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        retrieveAllPayoutAccount: builder.mutation({
            query: (credentials) => ({
                url: `/accounts`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAccountList({
                            accounts: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        showAnalyticsChartData: builder.mutation({
            query: (credentials) => ({
                url: `/products/revenues`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setAnalyticsGraphData({
                            data: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        togglePaystackAccountActivation: builder.mutation({
            query: (credentials) => ({
                url: `/accounts/${credentials.accountID}`,
                method: 'PATCH',
                body: { ...credentials.body },
            }),
        }),
    }),
});

export const {
    useGetAllUserMutation,
    useGetUserAnalyticsMutation,
    useGetUserMutation,
    useUpgradePlanMutation,
    useVerifyEmailMutation,
    useUpdateProfileMutation,
    useSetupPaymentAccountMutation,
    useGetBankListMutation,
    useChangePasswordMutation,
    useSendHelpMessageMutation,
    useRetrieveAllPayoutAccountMutation,
    useEnableSubscriptionMutation,
    useManageSubscriptionMutation,
    useBillingHistoryMutation,
    useGetPayoutsMutation,
    useInitiateWithdrawalMutation,
    useGetPayoutStatsMutation,
    useTogglePaystackAccountActivationMutation,
    useShowAnalyticsChartDataMutation,
    useGetAllPayoutHistoryMutation,
} = userApiSlice;

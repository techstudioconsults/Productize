import { apiSlice } from '../apiSlice';
import { setAccountList, setAnalyticsGraphData, setBillingHistory, setDailyAnalyticsGraphData, setNotifications, setPayoutStats, setPayouts, setUser } from './userSlice';

const constructURL = (credentials, filteredLink) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/payouts/user`;
    }
};

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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

        // cancelSubscription: builder.mutation({
        //     query: (credentials) => ({
        //         url: `/subscriptions/${credentials.subID}/cancel`,
        //         method: 'GET',
        //     }),
        // }),

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

        showDailyAnalyticsChartData: builder.mutation({
            query: (credentials) => ({
                url: `/revenues/daily`,
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setDailyAnalyticsGraphData({
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

        notification: builder.mutation({
            query: (credentials) => ({
                url: `/users/notifications`,
                method: 'GET',
                // body: { ...credentials.body },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setNotifications({
                            data: data.data,
                        })
                    );
                } catch (err) {
                    return;
                }
            },
        }),
        readAllNotification: builder.mutation({
            query: (credentials) => ({
                url: `/users/notifications`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        contactUs: builder.mutation({
            query: (credentials) => ({
                url: `/complaints/contact-us`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const {
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
    useShowDailyAnalyticsChartDataMutation,
    useCancelSubscriptionMutation,
    useNotificationMutation,
    useReadAllNotificationMutation,
    useContactUsMutation,
} = userApiSlice;

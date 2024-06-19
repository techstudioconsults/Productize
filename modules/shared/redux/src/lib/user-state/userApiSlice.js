import { apiSlice } from '../apiSlice';
import { setAccountList, setAnalyticsGraphData, setBillingHistory, setPayoutStats, setPayouts, setUser } from './userSlice';

const constructURL = (credentials, filteredLink) => {
    if (credentials && !credentials?.link) {
        return filteredLink;
    } else if (credentials?.link) {
        return credentials?.link;
    } else {
        return `/payments/payouts`;
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
                    console.error(err);
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
                url: `/subscriptions/manage`,
                method: 'GET',
            }),
        }),
        billingHistory: builder.mutation({
            query: (credentials) => ({
                url: `/subscriptions`,
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
                    console.error(err);
                }
            },
        }),

        getPayoutStats: builder.mutation({
            query: (credentials) => ({
                url: `/payments`,
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
                    console.error(err);
                }
            },
        }),

        getPayouts: builder.mutation({
            query: (credentials) => ({
                url: constructURL(
                    credentials,
                    `/payments/payouts?page=${credentials?.page}&start_date=${credentials?.startDate}&end_date=${credentials?.endDate}`
                ),
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
                    console.error(err);
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
                    console.error(err);
                }
            },
        }),

        setupPaymentAccount: builder.mutation({
            query: (credentials) => ({
                url: `/payments/accounts`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        initiateWithdrawal: builder.mutation({
            query: (credentials) => ({
                url: `/payments/payouts`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        getBankList: builder.mutation({
            query: () => ({
                url: `/payments/bank-list`,
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
                url: `/users/request-help`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),

        retrieveAllPayoutAccount: builder.mutation({
            query: (credentials) => ({
                url: `/payments/accounts`,
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
                    console.error(err);
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
                    console.error(err);
                }
            },
        }),

        togglePaystackAccountActivation: builder.mutation({
            query: (credentials) => ({
                url: `/payments/accounts/${credentials.accountID}`,
                method: 'PATCH',
                body: { ...credentials.body },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    // dispatch(
                    //     setAccountList({
                    //         accounts: data.data,
                    //     })
                    // );
                } catch (err) {
                    console.error(err);
                }
            },
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
} = userApiSlice;

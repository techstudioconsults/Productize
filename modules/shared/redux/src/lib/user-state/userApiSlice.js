import { apiSlice } from "../apiSlice";
import { setUser } from "./userSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: () => ({
                url: `/users/me`,
                method: "GET",
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
                    console.log(err);
                }
            },
        }),

        verifyEmail: builder.mutation({
            query: () => ({
                url: `/auth/email/resend`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        upgradePlan: builder.mutation({
            query: () => ({
                url: `/payments/subscription`,
                method: "POST",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        updateProfile: builder.mutation({
            query: (credentials) => ({
                url: `/users/me`,
                method: "POST",
                body: { ...credentials },
                // headers: {
                //   'Content-Type': 'multipart/form-data',
                // },
            }),

            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                console.log(arg);
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        setUser({
                            user: data.data,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        setupPaymentAccount: builder.mutation({
            query: (credentials) => ({
                url: `/payments/accounts`,
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        getBankList: builder.mutation({
            query: () => ({
                url: `/payments/bank-list`,
                method: "GET",
            }),
            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //     } catch (err) {
            //         console.log(err);
            //     }
            // },
        }),

        changePassword: builder.mutation({
            query: (credentials) => ({
                url: `/users/change-password`,
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        sendHelpMessage: builder.mutation({
            query: (credentials) => ({
                url: `/users/request-help`,
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        retrieveAllPayoutAccount: builder.mutation({
            query: (credentials) => ({
                url: `/payments/accounts`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                } catch (err) {
                    console.log(err);
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
} = userApiSlice;

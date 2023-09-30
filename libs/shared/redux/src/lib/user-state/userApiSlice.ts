import { apiSlice } from '../apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyEmail: builder.mutation({
      query: () => ({
        url: `/auth/email/resend`,
        method: 'GET',
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
        method: 'POST',
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

export const { useUpgradePlanMutation, useVerifyEmailMutation } = userApiSlice;

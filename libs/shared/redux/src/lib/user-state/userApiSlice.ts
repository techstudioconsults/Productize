import { apiSlice } from '../apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    upgradePlan: builder.mutation({
      query: () => ({
        url: `/payments/subscription`,
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);

          // dispatch(
          //   setCredentials({
          //     accessToken: data.token,
          //     user: data.user,
          //   })
          // );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useUpgradePlanMutation } = userApiSlice;

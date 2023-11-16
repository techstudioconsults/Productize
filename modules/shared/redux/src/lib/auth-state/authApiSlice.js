import { apiSlice } from "../apiSlice";
import { resetProductStore } from "../products-state/productsSlice";
import { resetUserStore, setUser } from "../user-state/userSlice";
import { logOut, setCredentials, setFPEmailConfirmation } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            accessToken: data.token,
                        })
                    );
                    dispatch(
                        setUser({
                            user: data.user,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        signup: builder.mutation({
            query: (credentials) => ({
                url: "/auth/register",
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            accessToken: data.token,
                        })
                    );
                    dispatch(
                        setUser({
                            user: data.user,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        googleAuth: builder.mutation({
            query: () => ({
                url: `/auth/oauth/redirect?provider=google`,
                method: "GET",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data.redirect_url) {
                        // Redirect the user to the obtained OAuth provider URL
                        window.location.href = data.redirect_url;
                    } else {
                        // Handle error or unsupported provider
                        console.error(`Failed to obtain redirect URL for google`);
                    }
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        googleAuthCallback: builder.mutation({
            query: (credentials) => ({
                url: `/auth/oauth/callback`,
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            accessToken: data.token,
                        })
                    );
                    dispatch(
                        setUser({
                            user: data.user,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        forgotPassword: builder.mutation({
            query: (credentials) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        setFPEmailConfirmation({
                            emailSent: true,
                            // emailSent: false,
                            email: arg.email,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        resetPassword: builder.mutation({
            query: (credentials) => ({
                url: "/auth/reset-password",
                method: "POST",
                body: { ...credentials },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(
                        setFPEmailConfirmation({
                            emailSent: false,
                            email: null,
                        })
                    );
                } catch (err) {
                    console.log(err);
                }
            },
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log(data);
                    dispatch(logOut());
                    dispatch(resetUserStore());
                    dispatch(resetProductStore());
                } catch (err) {
                    console.log(err);
                }
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useGoogleAuthMutation,
    useGoogleAuthCallbackMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
} = authApiSlice;

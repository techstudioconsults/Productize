import { apiSlice, cleanUrl } from '../apiSlice';
import { setUser } from '../user-state/userSlice';
import { logout, setCredentials, setFPEmailConfirmation } from './authSlice';

const endpointWithoutApiPostfix = cleanUrl();

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        initCsrf: builder.query({
            query: () => ({
                url: `${endpointWithoutApiPostfix}/sanctum/csrf-cookie`,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials({ accessToken: data.token }));
                    dispatch(setUser({ user: data.user }));
                } catch (err) {
                    return;
                }
            },
        }),

        signup: builder.mutation({
            query: (credentials) => ({
                url: '/auth/register',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials({ accessToken: data.token }));
                    dispatch(setUser({ user: data.user }));
                } catch (err) {
                    return;
                }
            },
        }),

        createAdmin: builder.mutation({
            query: ({ credentials, token }) => ({
                url: '/users',
                method: 'POST',
                body: credentials,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //         dispatch(setCredentials({ accessToken: data.token }));
            //         dispatch(setUser({ user: data.user }));
            //     } catch (err) {
            //         return;
            //     }
            // },
        }),

        updateAdmin: builder.mutation({
            query: ({ credentials, userID, token }) => ({
                url: `/users/update/${userID}`,
                method: 'PUT',
                body: credentials,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),

        googleAuth: builder.mutation({
            query: () => ({
                url: '/auth/oauth/redirect?provider=google',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data.redirect_url) {
                        window.location.href = data.redirect_url;
                    } else {
                        console.error('Failed to obtain redirect URL for Google');
                    }
                } catch (err) {
                    return;
                }
            },
        }),

        googleAuthCallback: builder.mutation({
            query: (credentials) => ({
                url: '/auth/oauth/callback',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials({ accessToken: data.token }));
                    dispatch(setUser({ user: data.user }));
                } catch (err) {
                    return;
                }
            },
        }),

        forgotPassword: builder.mutation({
            query: (credentials) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    // const { data } = await queryFulfilled;
                    dispatch(setFPEmailConfirmation({ emailSent: true, email: arg.email }));
                } catch (err) {
                    return;
                }
            },
        }),

        resetPassword: builder.mutation({
            query: (credentials) => ({
                url: '/auth/reset-password',
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    // const { data } = await queryFulfilled;
                    dispatch(setFPEmailConfirmation({ emailSent: false, email: null }));
                } catch (err) {
                    return;
                }
            },
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    if (res.meta.response.status === 200) {
                        dispatch(logout());
                    }
                } catch (err) {
                    return;
                }
            },
        }),
    }),
});

export const {
    useInitCsrfQuery,
    useLoginMutation,
    useSignupMutation,
    useCreateAdminMutation,
    useUpdateAdminMutation,
    useGoogleAuthMutation,
    useGoogleAuthCallbackMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useLogoutMutation,
} = authApiSlice;

export async function fetchCsrfToken() {
    const endpoint = cleanUrl();

    const response = await fetch(`${endpoint}/sanctum/csrf-cookie`, {
        credentials: 'include', // Important if you're working with cookies
    });

    if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
    }
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from './store';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().Auth.token;
        // if we have a token, set the auth header value
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
            // headers.set('Content-Type', `multipart/form-data`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        window.location.href = '/auth/login';
    } else if (result?.error?.status === 403 || result?.error?.data?.message === `User is not subscribed`) {
        store.dispatch({
            type: 'User/FREE_PLAN_OVER_RESPONSE',
            payload: {
                planStatus: {
                    isPlanExpired: true,
                    apiDetails: { endpoint: api.endpoint, ...result?.error },
                },
            },
        });
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['', ''],
    endpoints: () => ({}),
});

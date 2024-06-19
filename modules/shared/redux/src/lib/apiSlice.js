import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from './store';

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().Auth.token;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
    // credentials: 'include',
});

const handleUnauthorized = (result, api) => {
    if (result?.error?.status === 401 && result.meta.request.url !== `https://productize-api.techstudio.academy/api/carts`) {
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
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    handleUnauthorized(result, api);
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['', ''],
    endpoints: () => ({}),
});

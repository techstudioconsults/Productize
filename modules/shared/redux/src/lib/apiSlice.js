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
    if (result?.error) {
        const { status, data } = result.error;

        if (status === 401) {
            store.dispatch({
                type: 'auth/logout',
            });
        } else if (status === 403 && data?.message === 'User is not subscribed') {
            store.dispatch({
                type: 'User/FREE_PLAN_OVER_RESPONSE',
                payload: {
                    planStatus: {
                        isPlanExpired: true,
                        apiDetails: { endpoint: api.endpoint, ...result?.error },
                    },
                },
            });
        } else {
            store.dispatch({
                type: 'App/setAppError',
                payload: {
                    appError: result.error,
                },
            });
        }
    }
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    handleUnauthorized(result, api);
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: [],
    endpoints: () => ({}),
});

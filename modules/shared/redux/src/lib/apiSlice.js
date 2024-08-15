import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from './store';

// Function to fetch CSRF token
const fetchCsrfToken = async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/sanctum/csrf-cookie`, {
        credentials: 'include', // Important if you're working with cookies
    });
    console.log(response);

    if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
    }
    // Laravel stores the CSRF token in the cookies, so no need to extract it from the response
};

const baseQueryWithCsrf = async (args, api, extraOptions) => {
    // Fetch CSRF token before making any API request
    await fetchCsrfToken();
    // Proceed with the actual API request
    const result = await baseQuery(args, api, extraOptions);
    // Handle unauthorized cases
    handleUnauthorized(result, api);

    return result;
};

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().Auth.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        // Laravel automatically attaches the CSRF token from the cookies to the headers
        return headers;
    },
    credentials: 'include', // Ensure cookies (including the CSRF token) are included in requests
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
        } else if (status === 403) {
            return;
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

export const apiSlice = createApi({
    baseQuery: baseQueryWithCsrf,
    tagTypes: [],
    endpoints: () => ({}),
});

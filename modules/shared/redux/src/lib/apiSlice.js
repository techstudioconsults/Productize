import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from './store';
import Cookies from 'js-cookie';

function getCookie(name) {
    return Cookies.get(name);
}

// Remove `/api` from the api base url - use it to fetch the xscrf token.
function cleanUrl() {
    const url = `${import.meta.env.VITE_BASE_URL}`;
    return url.replace(/\/api\/?$/, '');
}

// Function to fetch CSRF token
const fetchCsrfToken = async () => {
    // Check for the cookie
    let cookie = getCookie('XSRF-TOKEN');

    // If present, exit the function and return it
    if (cookie) return decodeURIComponent(cookie);

    const endpoint = cleanUrl();

    // Else, request for it
    const response = await fetch(`${endpoint}/sanctum/csrf-cookie`, {
        credentials: 'include', // Important if you're working with cookies
    });

    if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
    }

    cookie = getCookie('XSRF-TOKEN');

    if (!cookie) {
        return '';
    }

    return decodeURIComponent(cookie);
};

const baseQueryWithCsrf = async (args, api, extraOptions) => {
    // Fetch CSRF token before making any API request
    // const xsrfToken = await fetchCsrfToken();
    // extraOptions = { ...extraOptions, xsrfToken };
    // Proceed with the actual API request
    const result = await baseQuery(args, api, extraOptions);
    // Handle unauthorized cases
    handleUnauthorized(result, api);

    return result;
};

const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    prepareHeaders: async (headers, { getState }) => {
        // Fetch CSRF token before making any API request
        const xsrfToken = await fetchCsrfToken();

        const token = getState().Auth.token;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        if (xsrfToken) {
            headers.set('XSRF-TOKEN', xsrfToken);
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

/* eslint-disable @nx/enforce-module-boundaries */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from './store';
import Cookies from 'js-cookie';

function getCookie(name) {
  return Cookies.get(name);
}

// Remove `/api` from the api base url - use it to fetch the xscrf token.
export function cleanUrl() {
  const url = `${import.meta.env.VITE_BASE_URL}`;
  return url.replace(/\/api\/?$/, '');
}

// Function to fetch CSRF token
const getCsrfToken = async () => {
  // Check for the cookie
  let cookie = getCookie('XSRF-TOKEN');
  if (!cookie) return '';

  // If present, exit the function and return it
  return decodeURIComponent(cookie);
};

const baseQueryWithCsrf = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  // Handle unauthorized cases
  handleUnauthorized(result, api);

  return result;
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  prepareHeaders: async (headers, { getState }) => {
    // Fetch CSRF token before making any API request
    const xsrfToken = await getCsrfToken();
    const token = getState().Auth.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    if (xsrfToken) {
      headers.set('X-XSRF-TOKEN', xsrfToken);
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

export { getCsrfToken };

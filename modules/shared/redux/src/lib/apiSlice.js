import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['', ''],
  endpoints: () => ({}),
});

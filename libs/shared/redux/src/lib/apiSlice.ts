import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('test', process.env['NX_BASE_URL']);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env['NX_BASE_URL'],
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().Auth.token;
    // if we have a token, set the auth header value
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['', ''],
  endpoints: () => ({}),
});

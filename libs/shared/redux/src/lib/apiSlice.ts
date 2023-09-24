import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log('test', process.env['NX_BASE_URL']);

const baseQuery = fetchBaseQuery({
  baseUrl: process.env['NX_BASE_URL'],
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().auth.token;
    // if we have a token, set the auth header value
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
//   // console.log(args) // request url, method, body
//   // console.log(api) // signal, dispatch, getState()
//   // console.log(extraOptions) //custom like {shout: true}

//   let result = await baseQuery(args, api, extraOptions);

//   // If you want, handle other status codes, too
//   if (result?.error?.status === 401) {
//     console.log('sending refresh token');

//     // send refresh token to get new access token
//     const refreshResult = await baseQuery('/auth/token', api, extraOptions);

//     if (refreshResult?.data) {
//       // store the new token
//       api.dispatch(setCredentials({ ...refreshResult.data }));

//       // retry original query with new access token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       if (refreshResult?.error?.status === 403) {
//         refreshResult.error.data.message = 'Your login has expired.';
//       }
//       return refreshResult;
//     }
//   }

//   return result;
// };

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['', ''],
  endpoints: () => ({}),
});

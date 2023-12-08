import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = getState().Auth.token;
        // if we have a token, set the auth header value
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
            // headers.set('Content-Type', `multipart/form-data`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // If you want, handle other status codes, too
    if (result?.error?.status === 401) {
        console.log("sending refresh token");
        // if the token has expired, send a refresh token or route back the login page
        window.location.href = "/auth/login";
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["", ""],
    endpoints: () => ({}),
});

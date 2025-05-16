import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    tagTypes: ["rating"],
    endpoints: (build) => ({}),
});

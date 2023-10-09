import { fetchBaseQuery, createApi, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://listbackend-q3wo.onrender.com/api/v1",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ['User'],
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});

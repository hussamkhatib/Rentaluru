import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getGeojson: builder.query<any, any>({
      query: (queryParam) => ({
        url: queryParam ? `geojson?${queryParam}` : "geojson",
      }),
    }),
  }),
});

export const {
  useGetGeojsonQuery,
  util: { getRunningOperationPromises },
} = filterApi;

// export endpoints for use in SSR
export const { getGeojson } = filterApi.endpoints;

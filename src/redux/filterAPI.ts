import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getGeojson: builder.query<any, any>({
      query: (queryParam) => ({
        url: queryParam ? `geojson?${queryParam}` : "geojson",
      }),
    }),
  }),
});
export const { useGetGeojsonQuery } = filterApi;

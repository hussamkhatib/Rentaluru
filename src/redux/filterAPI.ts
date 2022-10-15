import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  tagTypes: ["USERFORMS", "FORM"],
  endpoints: (builder) => ({
    getGeojson: builder.query<any, void>({
      query: () => ({
        url: "geojson",
      }),
    }),
  }),
});
export const { useGetGeojsonQuery } = filterApi;
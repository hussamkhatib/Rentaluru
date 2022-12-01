import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getAreas: builder.query<any, string>({
      query: (query) => (query ? `areas?name=${query}` : "areas"),
    }),
    getAreaDetails: builder.query<any, any>({
      query: ({ area_id, queryParam }) => ({
        url: queryParam
          ? `/areas/${area_id}?${queryParam}`
          : `/areas/${area_id}`,
      }),
    }),
  }),
});
export const { useGetAreasQuery, useGetAreaDetailsQuery } = areaApi;

// /areas/[area_id].tsx

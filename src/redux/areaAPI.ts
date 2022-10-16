import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getAreaDetails: builder.query<any, any>({
      query: ({ area_id, queryParam }) => ({
        url: queryParam ? `/area/${area_id}?${queryParam}` : `/area/${area_id}`,
      }),
    }),
  }),
});
export const { useGetAreaDetailsQuery } = areaApi;

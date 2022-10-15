import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getAreaDetails: builder.query<any, string>({
      query: (area_id) => ({
        url: `/area/${area_id}`,
      }),
    }),
  }),
});
export const { useGetAreaDetailsQuery } = areaApi;

import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const slice = createSlice({
  name: "filterQuery",
  initialState,
  reducers: {
    setFilterQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilterQuery } = slice.actions;

export const selectFilterQuery = (state: any) => state.filterQuery;
export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const selectFilterQuery = (state: RootState) => state.filterQuery;
export default slice.reducer;

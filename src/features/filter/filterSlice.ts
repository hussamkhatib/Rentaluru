import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
// import type { RootState } from "../../app/store";
import { initialState } from "./filter.constant";
import { getQueryParams } from "./filter.helper";
import { BHKType, FilterPayloadAction } from "./filter.types";

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetFilters: () => {
      return initialState;
    },
    setFilter: (state, action: PayloadAction<FilterPayloadAction>) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    setBHK: (state, action: PayloadAction<BHKType>) => {
      const { type, selected } = action.payload;
      const index = state.bhk.findIndex((item) => item.type === type);
      state.bhk[index].selected = !selected;
    },
  },
});

export default slice.reducer;

export const { resetFilters, setFilter, setBHK } = slice.actions;

export const selectFilterQueryParams = (state: RootState) =>
  getQueryParams(state.filter);

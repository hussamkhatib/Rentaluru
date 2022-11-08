import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = false;

export const slice = createSlice({
  name: "filterPanel",
  initialState,
  reducers: {
    toggleFilterPanel: (state) => {
      return !state;
    },
  },
});

export const { toggleFilterPanel } = slice.actions;

export const selectFilterPanel = (state: RootState) => state.filterPanel;
export default slice.reducer;

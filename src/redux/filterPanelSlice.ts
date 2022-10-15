import { createSlice } from "@reduxjs/toolkit";

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

export const selectFilterPanel = (state: any) => state.filterPanel;
export default slice.reducer;

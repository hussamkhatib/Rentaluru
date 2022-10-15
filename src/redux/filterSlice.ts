import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rent: {},
};

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRent: (state, action) => {
      state.rent = action.payload;
    },
  },
});

export const { setRent } = slice.actions;

export const selectFilter = (state: any) => state.filter;
export default slice.reducer;

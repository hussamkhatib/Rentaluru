import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rent: {},
};

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setRent: (state, action) => {
      if (!action.payload.value)
        state.rent = {
          filter: action.payload.filter,
          // @ts-ignore
          value: { ...state.rent.value },
        };
      else state.rent = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { setRent } = slice.actions;

export const selectFilter = (state: any) => state.filter;
export default slice.reducer;

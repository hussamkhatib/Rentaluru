import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const slice = createSlice({
  name: "activeArea",
  initialState,
  reducers: {
    setActiveArea: (state, action) => {
      return action.payload;
    },
    removeActiveArea: () => {
      return initialState;
    },
  },
});

export const { setActiveArea, removeActiveArea } = slice.actions;

export const selectActiveArea = (state: any) => state.activeArea;
export const selectActiveAreaId = (state: any) => state.activeArea?.area_id;
export const selectIsAreaActive = (state: any) => state.activeArea !== null;

export default slice.reducer;

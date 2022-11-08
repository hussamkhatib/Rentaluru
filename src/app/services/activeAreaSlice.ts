import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const selectActiveArea = (state: RootState) => state.activeArea;
export const selectActiveAreaId = (state: any) => state.activeArea?.area_id;
// TODO: rename the below to something more meaningful
export const selectIsAreaActive = (state: RootState) =>
  state.activeArea !== null;

export default slice.reducer;

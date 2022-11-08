import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ActiveAreaState } from "../types/activeArea";

const initialState: ActiveAreaState | null = null as ActiveAreaState | null;

export const slice = createSlice({
  name: "activeArea",
  initialState,
  reducers: {
    setActiveArea: (_, action: PayloadAction<ActiveAreaState>) => {
      return action.payload;
    },
    removeActiveArea: () => {
      return initialState;
    },
  },
});

export const { setActiveArea, removeActiveArea } = slice.actions;

export const selectActiveArea = (state: RootState) => state.activeArea;

export const selectActiveAreaId = (state: RootState) =>
  state.activeArea ? state.activeArea.area_id : null;
export const selectIsAreaActive = (state: RootState) =>
  state.activeArea !== null;

export default slice.reducer;

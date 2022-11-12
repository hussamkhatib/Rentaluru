import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ActiveAreaState, LeftPanelState } from "./leftPanel.types";

const initialState: LeftPanelState | null = null as LeftPanelState | null;

export const slice = createSlice({
  name: "leftPanel",
  initialState,
  reducers: {
    setActiveArea: (state, action: PayloadAction<ActiveAreaState>) => {
      if (state) state.activeArea = action.payload;
      else return { activeArea: action.payload };
    },
    setActiveHouse: (state, action: PayloadAction<any>) => {
      if (state) state.activeHouse = action.payload;
    },
    hideLeftPanel: () => {
      return initialState;
    },
  },
});

export const { setActiveArea, setActiveHouse, hideLeftPanel } = slice.actions;

export const selectActiveArea = (state: RootState) =>
  state.leftPanel?.activeArea;

export const selectActiveHouse = (state: RootState) =>
  state.leftPanel?.activeHouse;

export const selectActiveAreaId = (state: RootState) =>
  state.leftPanel?.activeArea ? state.leftPanel.activeArea?.area_id : null;
export const selectIsAreaActive = (state: RootState) =>
  state.leftPanel !== null;

export default slice.reducer;

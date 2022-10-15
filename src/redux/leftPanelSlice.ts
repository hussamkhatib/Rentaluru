import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const slice = createSlice({
  name: "leftPanel",
  initialState,
  reducers: {
    closeLeftPanel: () => false,
    openLeftPanel: (state, action) => action.payload,
  },
});

export const { closeLeftPanel, openLeftPanel } = slice.actions;

export const selectLeftPanel = (state: any) => state.leftPanel;
export default slice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import leftPanelReducer from "./leftPanelSlice";

export const store = configureStore({
  reducer: {
    leftPanel: leftPanelReducer,
  },
});

export default store;

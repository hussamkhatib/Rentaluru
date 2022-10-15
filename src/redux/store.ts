import { configureStore } from "@reduxjs/toolkit";
import leftPanelReducer from "./leftPanelSlice";
import { filterApi } from "./filterAPI";

export const store = configureStore({
  reducer: {
    [filterApi.reducerPath]: filterApi.reducer,
    leftPanel: leftPanelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterApi.middleware),
});

export default store;

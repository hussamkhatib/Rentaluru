import { configureStore } from "@reduxjs/toolkit";
import leftPanelReducer from "./leftPanelSlice";
import { filterApi } from "./filterAPI";
import { areaApi } from "./areaAPI";
import activeAreaSlice from "./activeAreaSlice";

export const store = configureStore({
  reducer: {
    [areaApi.reducerPath]: areaApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    leftPanel: leftPanelReducer,
    activeArea: activeAreaSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filterApi.middleware)
      .concat(areaApi.middleware),
});

export default store;

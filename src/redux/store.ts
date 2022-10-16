import { configureStore } from "@reduxjs/toolkit";

import { filterApi } from "./filterAPI";
import { areaApi } from "./areaAPI";

import leftPanelReducer from "./leftPanelSlice";
import activeAreaSlice from "./activeAreaSlice";
import filterPanelSlice from "./filterPanelSlice";
import filterSlice from "./filterSlice";
import filterQuerySlice from "./filterQuerySlice";

export const store = configureStore({
  reducer: {
    [areaApi.reducerPath]: areaApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    filterPanel: filterPanelSlice,
    filter: filterSlice,
    leftPanel: leftPanelReducer,
    activeArea: activeAreaSlice,
    filterQuery: filterQuerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filterApi.middleware)
      .concat(areaApi.middleware),
});

export default store;

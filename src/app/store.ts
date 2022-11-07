import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import activeAreaSlice from "./services/activeAreaSlice";
import { areaApi } from "./services/areaAPI";
import { filterApi } from "./services/filterAPI";
import filterPanelSlice from "./services/filterPanelSlice";
import filterQuerySlice from "./services/filterQuerySlice";
import filterSlice from "./services/filterSlice";

export const store = configureStore({
  reducer: {
    [areaApi.reducerPath]: areaApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    filterPanel: filterPanelSlice,
    filter: filterSlice,
    activeArea: activeAreaSlice,
    filterQuery: filterQuerySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(filterApi.middleware)
      .concat(areaApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import leftPanelSlice from "../features/leftPanel/leftPanelSlice";
import { areaApi } from "./services/areaAPI";
import { filterApi } from "./services/filterAPI";
import filterPanelSlice from "./services/filterPanelSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [areaApi.reducerPath]: areaApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer,
    filterPanel: filterPanelSlice,
    filter: filterSlice,
    leftPanel: leftPanelSlice,
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

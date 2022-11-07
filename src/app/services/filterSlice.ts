import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  filter?: string;
  value?: string | string[];
}

interface State {
  deposit: Filter;
  rent: Filter;
  vehicle: Filter;
}

const initialState: State = {
  rent: {},
  deposit: {},
  vehicle: {},
};

export const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    resetFilters: () => {
      return initialState;
    },
    setRent: (state, action) => {
      if (!action.payload.value)
        state.rent = {
          filter: action.payload.filter,
          value:
            typeof state.rent.value === "object"
              ? { ...state.rent.value }
              : state.rent.value,
        };
      else state.rent = action.payload;
    },
    setDeposit: (state, action) => {
      if (!action.payload.value)
        state.deposit = {
          filter: action.payload.filter,
          value:
            typeof state.deposit.value === "object"
              ? [...state.deposit.value]
              : state.deposit.value,
        };
      else state.deposit = action.payload;
    },
    setVehicle: (state, action) => {
      state.vehicle = action.payload;
    },
  },
});

export const { setRent, setDeposit, resetFilters, setVehicle } = slice.actions;

export const selectFilter = (state: any) => state.filter;
export const selectRentFilter = (state: any) => state.filter.rent;
export const selectVehicleFilter = (state: any) => state.filter.vehicle;
export const selectDepositFilter = (state: any) => state.filter.deposit;

export default slice.reducer;

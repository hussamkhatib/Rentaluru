// TODO: add comments

import { FilterState } from "./filter.types";

// for parking
// const vehicleFilters = ["TWO_WHEELER", "FOUR_WHEELER", "BOTH", "NONE"];

export enum BHK {
  HALF = "1 RK",
  ONE = "1 BHK",
  TWO = "2 BHK",
  THREE = "3 BHK",
  FOUR = "4 BHK",
  FOUR_PLUS = "4+ BHK",
}

// Redux
export const initialState: FilterState = {
  minRent: 0,
  maxRent: null,
  bhk: [
    {
      type: "RK1",
      name: BHK.HALF,
      selected: false,
    },
    {
      type: "BHK1",
      name: BHK.ONE,
      selected: false,
    },
    {
      type: "BHK2",
      name: BHK.TWO,
      selected: false,
    },
    {
      type: "BHK3",
      name: BHK.THREE,
      selected: false,
    },
    {
      type: "BHK4",
      name: BHK.FOUR,
      selected: false,
    },
    {
      type: "BHK4PLUS",
      name: BHK.FOUR_PLUS,
      selected: false,
    },
  ],
  vehicle: [],
};

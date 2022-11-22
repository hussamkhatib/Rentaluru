import { FilterState } from "./filter.types";

export enum BHK {
  HALF = "1 RK",
  ONE = "1 BHK",
  TWO = "2 BHK",
  THREE = "3 BHK",
  FOUR = "4 BHK",
  FOUR_PLUS = "4+ BHK",
}

export enum Vehicle {
  TWO_WHEELER = "2 Wheeler",
  FOUR_WHEELER = "4 Wheeler",
  BOTH = "Both",
  NONE = "None",
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
  vehicle: [
    {
      type: "TWO_WHEELER",
      name: Vehicle.TWO_WHEELER,
      selected: false,
    },
    {
      type: "FOUR_WHEELER",
      name: Vehicle.FOUR_WHEELER,
      selected: false,
    },
    {
      type: "BOTH",
      name: Vehicle.BOTH,
      selected: false,
    },
    {
      type: "NONE",
      name: Vehicle.NONE,
      selected: false,
    },
  ],
};

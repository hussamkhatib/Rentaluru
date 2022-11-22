import { BHK, Vehicle } from "./filter.constant";

export interface ArrayFilter<Type> {
  name: Type;
  type: string;
  selected: boolean;
}

export type FilterState = {
  minRent: number | null;
  maxRent: number | null;
  bhk: ArrayFilter<BHK>[];
  vehicle: ArrayFilter<Vehicle>[];
};

export type FilterKey = keyof FilterState;

export type FilterPayloadAction = {
  key: FilterKey;
  value: any;
};

export type RentFilterPayload = {
  type: "minRent" | "maxRent";
  value: number;
};

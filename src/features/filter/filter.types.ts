import { BHK } from "./filter.constant";

export interface BHKType {
  name: BHK;
  type: string;
  selected: boolean;
}

export type FilterState = {
  minRent: number | null;
  maxRent: number | null;
  bhk: BHKType[];
  vehicle: string[];
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

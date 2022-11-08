import { BHKType, FilterState } from "./filter.types";

export const getQueryParams = (filter: FilterState) => {
  const { minRent, maxRent, bhk, vehicle } = filter;
  const bhkQuery = `type=${bhkToQuery(bhk)}`;
  return bhkQuery;
};

function bhkToQuery(bhk: BHKType[]) {
  return bhk
    .filter((item) => item.selected)
    .map((item) => item.type)
    .join(",");
}

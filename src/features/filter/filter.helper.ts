import { BHKType, FilterState } from "./filter.types";

export const getQueryParams = (filter: FilterState) => {
  const { minRent, maxRent, bhk, vehicle } = filter;
  const bhkQuery = `type=${bhkToQuery(bhk)}`;
  const rentQuery = rentToQuery(minRent, maxRent);

  const queryParams = [bhkQuery, rentQuery].filter(Boolean).join("&");
  return queryParams;
};

function bhkToQuery(bhk: BHKType[]) {
  return bhk
    .filter((item) => item.selected)
    .map((item) => item.type)
    .join(",");
}

function rentToQuery(minRent: number | null, maxRent: number | null) {
  if (minRent && maxRent) return `min_rent=${minRent}&max_rent=${maxRent}`;
  if (minRent) return `min_rent=${minRent}`;
  if (maxRent) return `max_rent=${maxRent}`;
  return false;
}

/**
 * @description: converts Filter Object into query params
 * @example
 * @input : {
    "minRent": 10000,
    "maxRent": 25000,
    "bhk": [
        {
            "type": "RK1",
            "name": "1 RK",
            "selected": false
        },
        {
            "type": "BHK1",
            "name": "1 BHK",
            "selected": true
        },
        {
            "type": "BHK2",
            "name": "2 BHK",
            "selected": true
        },
        {
            "type": "BHK3",
            "name": "3 BHK",
            "selected": true
        },
        {
            "type": "BHK4",
            "name": "4 BHK",
            "selected": true
        },
        {
            "type": "BHK4PLUS",
            "name": "4+ BHK",
            "selected": false
        }
    ],
    "vehicle": [
        {
            "type": "TWO_WHEELER",
            "name": "2 Wheeler",
            "selected": true
        },
        {
            "type": "FOUR_WHEELER",
            "name": "4 Wheeler",
            "selected": false
        },
        {
            "type": "BOTH",
            "name": "Both",
            "selected": false
        },
        {
            "type": "NONE",
            "name": "None",
            "selected": false
        }
    ]
}
 * @output : type=BHK1,BHK2,BHK3,BHK4&min_rent=10000&max_rent=25000&parking=TWO_WHEELER
 */

import { ArrayFilter, FilterState } from "./filter.types";

export const getQueryParams = (filter: FilterState) => {
  const { minRent, maxRent, bhk, vehicle } = filter;
  const bhkQuery = `type=${arrayToQuery(bhk)}`;
  const vehicleQuery = `parking=${arrayToQuery(vehicle)}`;
  const rentQuery = rentToQuery(minRent, maxRent);

  const queryParams = [bhkQuery, rentQuery, vehicleQuery]
    .filter(Boolean)
    .join("&");

  return queryParams;
};

function arrayToQuery<T>(array: ArrayFilter<T>[]) {
  return array
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

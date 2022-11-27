/**
 * @description: Helper function that transforms the query string
 * to a format that mongo uses to filter documents in the $match stage of the aggregation pipeline
 * @link : https://www.mongodb.com/docs/manual/reference/operator/aggregation/match
 * @example
 * @input - query:  {
 *   type: 'BHK1,BHK2,BHK3,BHK4',
 *   min_rent: '10000',
 *   max_rent: '25000',
 *   parking: 'TWO_WHEELER'
 * }
 *
 * @output - {
 *  type: { '$in': [ 'BHK1', 'BHK2', 'BHK3', 'BHK4' ] },
 *  parking: { '$in': [ 'TWO_WHEELER' ] },
 *   rent: { '$gte': 10000, '$lte': 25000 }
 * }
 */

interface Query {
  type?: string;
  min_rent?: number;
  max_rent?: number;
  parking?: string;
}

const APIFilter = (query: Query) => {
  const { type, min_rent, max_rent, parking } = query;
  let match = {};

  type && (match = splitArrayAndMatch(match, type, "type"));
  parking && (match = splitArrayAndMatch(match, parking, "parking"));

  if (min_rent || max_rent) {
    match = {
      ...match,
      rent: {
        ...(min_rent && { $gte: +min_rent }),
        ...(max_rent && { $lte: +max_rent }),
      },
    };
  }

  return { match };
};

export default APIFilter;

function splitArrayAndMatch(match: any, query: string, key: string) {
  const queryArray = query.split(",");

  return {
    ...match,
    [key]: {
      $in: queryArray,
    },
  };
}

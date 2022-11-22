// Helper function to get the query string for the API url

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

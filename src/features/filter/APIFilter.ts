// Helper function to get the query string for the API url

interface Query {
  type?: string;
  min_rent?: number;
  max_rent?: number;
}

const APIFilter = (query: Query) => {
  const { type, min_rent, max_rent } = query;
  let match = {};

  if (type) {
    const bhk = type.split(",");
    match = {
      ...match,
      type: {
        $in: bhk,
      },
    };
  }

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

// Helper function to get the query string for the API url

interface Query {
  type?: string;
}

const APIFilter = (query: Query) => {
  const { type } = query;
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

  return { match };
};

export default APIFilter;

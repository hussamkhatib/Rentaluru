// Helper function to get the query string for the API url

const APIFilter = (query: any) => {
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

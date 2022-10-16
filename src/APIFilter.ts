const APIFilter = (query: any) => {
  const keys = Object.keys(query);

  let match = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const split = key.split("-");
    if (split[1] === "range") {
      // @ts-ignore
      const [min, max] = query[key].split("-");
      match = {
        ...match,
        [split[0]]: {
          $gte: +min,
          $lte: +max,
        },
      };
      // { rent: { '$gte': 42000, '$lte': 50000 } }
    }
  }
  return { match };
};

export default APIFilter;

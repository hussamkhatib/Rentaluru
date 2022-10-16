const APIFilter = (query: any) => {
  console.log(query);
  const keys = Object.keys(query);

  let match = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const split = key?.split("-");

    if (split.length === 2) {
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
      if (split[1] === "exact") {
        match = {
          ...match,
          [split[0]]: {
            $eq: +query[key],
          },
        };
      }
      if (split[1] === "above") {
        match = {
          ...match,
          [split[0]]: {
            $gte: +query[key],
          },
        };
      }
      if (split[1] === "below") {
        match = {
          ...match,
          [split[0]]: {
            $lte: +query[key],
          },
        };
      }
    }
    if (split.length === 1) {
      if (key === "twoW") {
        match = {
          ...match,
          "2wheeler": {
            $eq: true,
          },
        };
      }
      if (key === "fourW") {
        match = {
          ...match,
          "4wheeler": {
            $eq: true,
          },
        };
      }
    }
  }
  return { match };
};

export default APIFilter;

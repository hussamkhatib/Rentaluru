import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../../lib/mongodb";
// import geojson from "../../../components/Map/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { area_id } = req.query;

  const { method, query } = req;
  if (method === "GET") {
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

    const data = await db
      .collection("reviews")
      .aggregate([
        {
          $match: { ...match, area_id: Number(area_id) },
        },
        {
          $group: {
            _id: "$area_id",
            avgRent: {
              $avg: "$rent",
            },
            maxRent: {
              $max: "$rent",
            },
            minRent: {
              $min: "$rent",
            },
          },
        },
      ])
      .toArray();

    return res.status(200).send(data);
  }
}

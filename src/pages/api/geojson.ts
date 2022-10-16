import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/mongodb";
import data from "../../components/Map/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
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

    const result = await db
      .collection("reviews")
      .aggregate([
        {
          $match: match,
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
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ])
      .toArray();

    data["features"].forEach((area, idx) => {
      // @ts-ignore
      if (!result[idx]?.avgRent) return;
      // @ts-ignore
      area.properties["avgRent"] = result[idx].avgRent;
      // @ts-ignore
      area.properties["maxRent"] = result[idx].maxRent;
      // @ts-ignore
      area.properties["minRent"] = result[idx].minRent;
      // @ts-ignore
      area.properties["count"] = result[idx].count;
    });

    const max = Math.max(...result.map((r: any) => r.maxRent));
    const min = Math.min(...result.map((r: any) => r.minRent));
    return res.status(200).send({ data, min, max });
  }
}

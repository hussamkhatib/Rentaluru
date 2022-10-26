import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongodb";
import APIFilter from "../../APIFilter";
import data from "../../components/Map/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { method, query } = req;

  if (method === "GET") {
    const { match } = APIFilter(query);
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

    let idx = 0;
    data["features"].forEach((area) => {
      if (result[idx]?._id === area.properties.area_id) {
        area.properties["avgRent"] = result[idx].avgRent;
        area.properties["maxRent"] = result[idx].maxRent;
        area.properties["minRent"] = result[idx].minRent;
        area.properties["count"] = result[idx].count;
        idx++;
      }
    });

    const max = Math.max(...result.map((r: any) => r.maxRent));
    const min = Math.min(...result.map((r: any) => r.minRent));
    return res.status(200).send({ data, min, max });
  }
}

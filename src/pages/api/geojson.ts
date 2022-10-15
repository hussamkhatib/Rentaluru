import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/mongodb";
import data from "../../data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { method } = req;
  if (method === "GET") {
    const result = await db
      .collection("reviews")
      .aggregate([
        {
          $group: {
            _id: "$area_id",
            avgRent: {
              $avg: "$rent",
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

    const max = await db
      .collection("reviews")
      .find({})
      .project({ _id: 0, rent: 1 })
      .sort({ rent: -1 })
      .limit(1)
      .toArray();
    const min = await db
      .collection("reviews")
      .find({})
      .project({ _id: 0, rent: 1 })
      .sort({ rent: 1 })
      .limit(1)
      .toArray();

    data["features"].forEach((area, idx) => {
      // @ts-ignore
      area.properties["avgRent"] = result[idx].avgRent;
    });

    return res.status(200).send({ data, max: max[0].rent, min: min[0].rent });
  }
}

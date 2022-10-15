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
            maxRent: {
              $max: "$rent",
            },
            minRent: {
              $min: "$rent",
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
      area.properties["avgRent"] = result[idx].avgRent;
      // @ts-ignore
      area.properties["maxRent"] = result[idx].maxRent;
      // @ts-ignore
      area.properties["minRent"] = result[idx].minRent;
    });

    return res.status(200).send({ data });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../../lib/mongodb";
import APIFilter from "../../../APIFilter";
// import geojson from "../../../components/Map/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { area_id } = req.query;

  const { method, query } = req;
  if (method === "GET") {
    const { match } = APIFilter(query);

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

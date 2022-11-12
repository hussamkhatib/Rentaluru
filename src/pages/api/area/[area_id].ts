import type { NextApiRequest, NextApiResponse } from "next";
import APIFilter from "../../../features/filter/APIFilter";
import connectToDatabase from "../../../lib/mongodb";

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
          $match: {
            ...match,
            area_id: Number(area_id),
          },
        },
        {
          $group: {
            _id: "$area_id",
            avgRent: {
              $avg: "$rent",
            },
            avgDeposit: {
              $avg: "$deposit",
            },
            maxRent: {
              $max: "$rent",
            },
            maxDeposit: {
              $max: "$deposit",
            },
            minRent: {
              $min: "$rent",
            },
            minDeposit: {
              $min: "$deposit",
            },
          },
        },
      ])
      .toArray();

    // return only latitude and longitude
    const getPoints = await db
      .collection("reviews")
      .find({
        ...match,
        area_id: Number(area_id),
      })
      .toArray();

    const points = {
      type: "FeatureCollection",
      features: getPoints.map((point: any) => {
        return {
          type: "Feature",
          properties: point,
          geometry: {
            type: "Point",
            coordinates: [point.longitude, point.latitude],
          },
        };
      }),
    };

    return res.status(200).send({ data, points });
  }
}

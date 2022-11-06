import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/mongodb";
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
      .find(
        {
          area_id: Number(area_id),
        },
        {
          projection: {
            _id: 0,
            latitude: 1,
            longitude: 1,
          },
        }
      )
      .toArray();

    const points = {
      type: "FeatureCollection",
      features: getPoints.map((point: any) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [point.longitude, point.latitude],
        },
      })),
    };

    return res.status(200).send({ data, points });
  }
}

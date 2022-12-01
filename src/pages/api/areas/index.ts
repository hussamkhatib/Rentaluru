import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();

  const { method } = req;
  if (method === "GET") {
    const { name } = req.query;

    const options = name
      ? {
          name: {
            $regex: name,
            $options: "i",
          },
        }
      : {};

    const data = await db.collection("coordinates").find(options).toArray();

    return res.status(200).send(data);
  }
}

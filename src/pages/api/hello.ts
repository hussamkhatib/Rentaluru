import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const { method } = req;
  if (method === "GET") {
    const data = await db.collection("brokers").find({}).toArray();
    return res.status(200).send({ data });
  }
}

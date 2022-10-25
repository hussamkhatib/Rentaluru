import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const db = process.env.DB_NAME;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

if (!db) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export default async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(uri, opts).then((client) => ({
      client,
      db: client.db(db),
    }));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

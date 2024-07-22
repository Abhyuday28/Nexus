// Connection URL

import mongoose from "mongoose";

const { MONGODB_URL = "mongodb://localhost:27017/Nexus" } = process.env;

if (!MONGODB_URL) throw new Error("MONGODB_URL is not defined.");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(MONGODB_URL);

  return cached.conn;
};

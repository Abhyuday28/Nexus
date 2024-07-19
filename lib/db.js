import mongoose from "mongoose";

export const connect_db = () => {
  // Connection URL
  const url = process.env.DB_URL;

  if (!url || url === "") throw new Error("DB_URL is not set in .env.local");

  // Check the current connection state
  if (mongoose.connection.readyState === 0) {
    // Connect to MongoDB only if not already connected
    mongoose
      .connect(url)
      .then(() => {
        console.log("Connected to MongoDB successfully");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
      });
  }
};

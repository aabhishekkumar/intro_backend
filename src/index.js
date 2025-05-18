// Load environment variables
import dotenv from "dotenv";
dotenv.config({
  path: './env'  // Make sure your env file is named exactly "env" or change this accordingly
});

import mongoose from "mongoose";  // You forgot to import mongoose
import express from "express";
const app = express();

(async () => {
  try {
    // Use template literals correctly with backticks (`), not single quotes (')
    await mongoose.connect(`${process.env.MONGODB_URL}`);

    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });

    const port = process.env.PORT || 8000;  // Provide a fallback port

    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
})();

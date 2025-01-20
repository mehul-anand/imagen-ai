import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imgRoutes from "./routes/imgRoutes.js";
import { clerkClient } from "@clerk/express";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/posts", postRoutes);
app.use("/api/image", imgRoutes);

app.get("/", async (req, res) => {
    res.send("Imagen AI Server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server is up yippie"));
  } catch (error) {
    console.log(error);
  }
};

startServer();

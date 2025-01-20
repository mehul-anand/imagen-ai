import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/generate", async (req, res) => {
  try {
    const seedValue = Math.floor(Math.random() * 78412)
    const { prompt } = req.query;
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is Required" });
    } else {
      const apiReq = `${process.env.API_URL}${encodeURIComponent(
        prompt
      )}?safe=true&nologo=true&width=1024&height=1024&seed=${seedValue}`;
      const response = await fetch(apiReq);
      if (!response.ok) {
        return res.status(500).json({ message: "Failed to generate image" });
      } else {
        const imgBuffer = await response.arrayBuffer();
        const convertedImg = Buffer.from(imgBuffer).toString("base64");
        res.status(200).json({ photo: `data:image/jpeg;base64,${convertedImg}` });
      }
    }
  } catch (error) {
    console.error("Error generating img : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

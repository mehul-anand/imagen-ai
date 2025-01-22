import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import ImgPost from "../mongodb/models/post.js";
import { clerkClient } from "@clerk/express";
import { v4 as uuidv4 } from "uuid"

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route("/").get(async (req, res) => {
  try {
    const posts = await ImgPost.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: `Error:${error}` });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { title, prompt, photo, userId } = req.body;
    const getUser = await clerkClient.users.getUser(userId);
    const userMail = getUser.emailAddresses[0].emailAddress;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const fullName = getUser.firstName + " " +  getUser.lastName
    const username = getUser.username
    const postId = uuidv4()
    const existingPost = await ImgPost.findOne({ postId });
    if (existingPost) {
      return res
        .status(400)
        .json({ success: false, message: "Duplicate post detected" });
    }
    const newPost = await ImgPost.create({
      postId,
      title,
      userId,
      userMail,
      prompt,
      username,
      photo: photoUrl.url,
      artist:fullName
    });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});
export default router;

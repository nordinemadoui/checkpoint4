import express from "express";
import mongoose from "mongoose";
import PostMessage from "../models/postMessage;";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
    // error 409 = conflict
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;

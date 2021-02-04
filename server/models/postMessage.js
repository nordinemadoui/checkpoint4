import mongoose from "mongoose";

//parametres schema bdd mongo

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [Strings],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: O,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;

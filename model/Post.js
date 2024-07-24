import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User is Required."],
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
});

CommentSchema.add({
  comments: [CommentSchema],
});

const PostSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is Required."],
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      trim: true,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    comments: [CommentSchema], // Embedding CommentSchema as an array
  },
  { timestamps: true }
);

export const Post = mongoose.models?.Post || mongoose.model("Post", PostSchema);

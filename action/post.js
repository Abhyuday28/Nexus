"use server";
import { dbConnect } from "@/lib/connection";
import { College } from "@/model/College";
import { Post } from "@/model/Post";
import { User } from "@/model/User";
import { revalidatePath } from "next/cache";

dbConnect();

export const getAcademicPosts = async () => {
  try {
    const posts = await Post.find().populate([
      {
        path: "likes",
        model: User,
        select: "firstName lastName image email",
        options: { sort: { createdAt: -1 } },
      },
      {
        path: "comments.likes",
        model: User,
      },
      {
        path: "user",
        model: User,
        match: { role: "Faculty" },
        select: "firstName lastName image email branch",
        options: { sort: { createdAt: -1 } },
      },
      {
        path: "comments.user",
        model: User,
      },
    ]);
    return {
      data: posts.filter((p) => p.user),
      message: "Post fetched Successfully",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      data: [],
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
export const getSocialPosts = async () => {
  try {
    const posts = await Post.find().populate([
      {
        path: "likes",
        model: User,
        select: "firstName lastName image email",
        options: { sort: { createdAt: -1 } },
      },
      {
        path: "comments.likes",
        model: User,
      },
      {
        path: "user",
        model: User,
        match: { role: "Student" },
        select: "firstName lastName image email branch",
        options: { sort: { createdAt: -1 } },
      },
      {
        path: "comments.user",
        model: User,
      },
    ]);
    return {
      data: posts.filter((p) => p.user),
      message: "Post fetched Successfully",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      data: [],
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
export const addPost = async (post) => {
  try {
    await Post.create(post);
    revalidatePath("/academic");
    revalidatePath("/social");
    return {
      message: "Post added Successfully",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
export const likePost = async (user, post) => {
  try {
    const existingPost = await Post.findOne({ _id: post });
    if (!existingPost) {
      return {
        message: "This Post does not exist.",
        success: false,
        type: "error",
      };
    }

    const isLiked = existingPost.likes.some(
      (id) => id.toString() === user.toString()
    );

    if (isLiked) {
      existingPost.likes = existingPost.likes.filter(
        (id) => id.toString() !== user.toString()
      );
    } else existingPost.likes.push(user);

    await existingPost.save();

    revalidatePath("/academic");
    revalidatePath("/social");

    return {
      message: `Post ${isLiked ? "Unliked" : "Liked"}  Successfully`,
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};

export const getCollege = async (collegeId) => {
  try {
    const college = await College.findOne({ _id: collegeId });
    return {
      data: college,
      message: "College fetched.",
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      data: null,
      message: error.message,
      success: false,
      type: "error",
    };
  }
};

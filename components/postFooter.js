"use client";
import { formatDate } from "@/lib/utils";
import {
  MessageSquare,
  Reply,
  Share,
  Sparkles,
  UserCircleIcon,
} from "lucide-react";
import React, { useState } from "react";
import UserIcon from "./userIcon";

const PostFooter = ({ likes = 0, comments = [], time, isLiked }) => {
  const img = "";
  const name = "Vijay Kumar";

  const [showComments, setShowComments] = useState(false);

  const totalComments = comments.length;

  const likePost = async () => {};

  return (
    <div>
      {/* react, comment, share section  */}
      <div className=" flex rounded-b-md border-t p-3 px-4 justify-between">
        <div className="flex gap-6">
          {/* like button */}
          <button
            className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center"
            onClick={likePost}
          >
            <Sparkles
              className={`w-5 h-5 ${
                isLiked ? "fill-yellow-400 text-yellow-400" : ""
              } `}
            />
            <h3>{likes}</h3>
          </button>

          {/* comment button */}
          <button
            className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center"
            onClick={() => setShowComments((prev) => !prev)}
          >
            <MessageSquare className="w-5 h-5" />
            <h3>{totalComments}</h3>
          </button>

          {/* share section */}
          <button className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
            <Share className="w-5 h-5" />
          </button>
        </div>

        {/* post upload time */}
        <h3 className="text-muted-foreground text-xs">{formatDate(time)}</h3>
      </div>

      {/* write comment section------ */}
      {showComments ? (
        <>
          <div className=" ">
            {/* comment section */}
            <div className="flex rounded-md p-3 px-6 gap-4 items-center bg-gray-50">
              <UserIcon img={img} name={name} className="w-8 h-8" />
              <input
                type="text"
                placeholder="________________________________"
                className="border-0 outline-none w-full bg-gray-50"
              />
            </div>
          </div>

          {/* about existing comments------ */}
          {comments.map((comment) => {
            return (
              <div className=" ">
                {/* comment section */}
                <div className="flex rounded-md p-3 px-6 gap-4 items-center bg-gray-50 ">
                  <UserIcon img={comment.user.img} name={comment.user.name} />
                  {comment.content}
                </div>

                {/* comment reaction  */}
                <div className="flex gap-4 justify-end px-6 -mt-2">
                  <button className="p-2 px-3 bg-gray-200 rounded-full">
                    <Sparkles className="w-4 h-4" />
                  </button>
                  <button className="p-2 px-3 bg-gray-200 rounded-full">
                    <Reply className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default PostFooter;

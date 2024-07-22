import React from "react";
import {
  EllipsisVertical,
  FlagIcon,
  Share2,
  EyeOff,
  Pin,
} from "lucide-react";
import UserIcon from "@/components/userIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PostContent } from "@/components/postContent";
import PostFooter from "./postFooter";

const Post = ({ post }) => {
  const loggedInUserId = 3;


  const isLiked = post.likes.some((id) => {
    return loggedInUserId === id;
  });


  return (
    <div className="flex flex-col gap-2">
      <div className="pt-6">
        <div className=" border rounded-md flex flex-col ">
          {/* user info  */}
          <div className="flex rounded-t-md p-2 gap-4 items-center border-b">
            <UserIcon name={post.user.name} img={post.user.image} />

            {/* <UserIcon className="w-5 h-5" /> */}

            <div className="flex justify-between">
              <div>
                <h3 className="capitalize font-semibold">{post.user.name}</h3>
                <h5 className="text-xs">
                  details
                  {post.user.isOnline ? (
                    <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full" />
                  ) : null}
                </h5>
              </div>
            </div>

            {/* three dot at the upper left of post */}
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-auto">
                <EllipsisVertical className="ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                  <Pin className="mr-2 w-4 h-4" />
                  Save
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FlagIcon className="mr-2 w-4 h-4" />
                  Report
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="mr-2 w-4 h-4" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <EyeOff className="mr-2 w-4 h-4" />
                  Not interested
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* the picture of the post */}

          <div className={`flex items-center mx-auto min-h-32 max-h-[600px] `}>

            <PostContent img ={post.content} />
        
          </div>

          <PostFooter
            isLiked={isLiked}
            likes={post.likes.length}
            time={post.created_at}
            comments={post.comments}
            />
        </div>
      </div>
    </div>
  );
};

export default Post;

{/* <img
src="/postPic.webp"
alt="Post Image"
className={`h-[500px] cursor-pointer`}
/> */}
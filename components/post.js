import { EllipsisVertical, FlagIcon, Share2, EyeOff, Pin } from "lucide-react";
import UserIcon from "@/components/userIcon";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { PostContent } from "@/components/postContent";
import PostFooter from "./postFooter";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";

const Post = async ({ post }) => {
  const session = await getServerSession(authOptions);
  const loggedInUserId = session?.user?.id;

  const isLiked = post?.likes.some((like) => {
    return String(like._id) === String(loggedInUserId);
  });

  const likeCount = post?.likes.length;
  const commentsCount = post?.comments.length;
  const commentsArray = post?.comments;
  const likesArray = post?.likes.map((id) => String(id));
  const loggedInUser = session.user;
  const postedAt = post?.createdAt;
  const postId = String(post?._id);

  return (
    <div className="flex flex-col gap-2 pt-4">
      <div className=" border rounded-md flex flex-col">
        {/* user info  */}
        <div className="flex rounded-t-md p-2 gap-4 items-center border-b">
          <UserIcon
            name={`${post.user.firstName} ${post.user.lastName}`}
            img={post.user.image}
          />

          {/* <UserIcon className="w-5 h-5" /> */}

          <div className="flex justify-between">
            <div>
              <h3 className="capitalize font-semibold">
                {post.user.firstName} {post.user.lastName}
              </h3>
              <h5 className="text-xs">
                {post.user.branch}
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

        <div className={`p-4 flex min-h-20 max-h-[600px] `}>
          <PostContent content={post.content} imgs={post.images} />
        </div>

        <PostFooter
          isLiked={isLiked}
          likeCount={likeCount}
          commentsCount={commentsCount}
          loggedInUser={loggedInUser}
          likesArray={likesArray}
          commentsArray={commentsArray}
          postedAt={postedAt}
          postId={postId}
        />
      </div>
    </div>
  );
};

export default Post;

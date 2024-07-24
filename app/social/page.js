import React from "react";
import { Paperclip, Camera, NotepadText, Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Post from "@/components/post";

import { Button, ButtonGroup } from "@nextui-org/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions";
import UserCard from "@/components/userCard";
import { FriendList } from "@/components/friend-list";
import PostBox from "@/components/postBox";
import { getSocialPosts } from "@/action/post";

const Social = async () => {
  const isOnline = true;

  const res = await getSocialPosts();
  const posts = res.data;

  const session = await getServerSession(authOptions);

  return (
    <div className=" px-20 pt-6 grid grid-cols-10 gap-2 relative ">
      {/* leftSide */}
      <div className="h-auto col-span-2 p-2 overflow-hidden hidden xl:block border-r-2 border-black">
        <div className="p-5 grid gap-5">
          <h3 className="justify-center flex text-xl font-semibold">CONTENT</h3>
        </div>
      </div>

      {/* middle */}
      <div className="col-span-7 xl:col-span-5 px-10">
        {/* whole post box */}
        <PostBox />

        {/* post contents */}
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      {/* right */}
      <div className="col-span-3">
        {/* user info. Card */}
        <UserCard />

        <div className="py-4 max-w-md ">
          <div className="border rounded-lg">
            <div className="flex justify-center">
              <div className="text-xl font-semibold p-2">PEERS</div>
            </div>
            <div className="flex justify-around item-center p-2 gap-2">
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-auto">
                    <SelectValue placeholder="Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CSE">CSE</SelectItem>
                    <SelectItem value="EEE">EEE</SelectItem>
                    <SelectItem value="CIVIL">CIVIL</SelectItem>
                    <SelectItem value="MECH">MECH</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-auto">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center realtive border rounded-md gap-2">
                <Search className="w-5 h-5 ml-2" />
                <input
                  className="items-center rounded-md bg-transparent focus:outline-none w-full"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search"
                />
              </div>
            </div>

            <div>
              <FriendList />
            </div>
          </div>

          {/* <div className="bg-red-500">asdfg</div> */}
        </div>
      </div>
    </div>
  );
};

export default Social;

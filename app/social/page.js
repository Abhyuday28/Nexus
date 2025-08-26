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
    <div className="px-2 md:px-6 lg:px-20 pt-6 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-2 relative h-screen">
      {/* leftSide: show only on lg and up, sticky */}
      <div className="hidden lg:block lg:col-span-2 p-2 overflow-hidden border-r-2 border-black sticky top-0 h-[calc(100vh-2rem)]">
        <div className="p-5 grid gap-5">
          <h3 className="justify-center flex text-xl font-semibold">CONTENT</h3>
        </div>
      </div>

      {/* middle: scrollable */}
      <div className="col-span-1 md:col-span-4 lg:col-span-5 px-2 md:px-6 lg:px-10 overflow-y-auto h-[calc(100vh-2rem)]">
        {/* whole post box */}
        <PostBox />

        {/* post contents */}
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      {/* right: show on md and up, sticky */}
      <div className="hidden md:block md:col-span-2 lg:col-span-3 sticky top-0 h-[calc(100vh-2rem)]">
        {/* user info. Card */}
        <UserCard />

        <div className="py-4 max-w-md ">
          <div className="border rounded-lg">
            <div className="flex justify-center">
              <div className="text-xl font-semibold p-2">PEERS</div>
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center p-2 gap-2">
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
              <div className=" h-10 flex items-center relative border rounded-md gap-2 w-full md:w-auto">
                <Search className="w-5 h-5 ml-2" />
                <input
                  className="items-center rounded-md bg-transparent focus:outline-none w-full"
                  type="search"
                  placeholder="Search"
                />
              </div>
            </div>

            <div>
              <FriendList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;

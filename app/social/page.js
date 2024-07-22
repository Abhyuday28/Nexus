import React from "react";
import {
  Paperclip,
  Camera,
  NotepadText,
  Search,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Post from "@/components/post";

import { Button, ButtonGroup } from "@nextui-org/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions";
import UserCard from "@/components/userCard";
import { FriendList } from "@/components/friend-list";

const Social = async () => {
  const isOnline = true;

  const posts = [
    {
      user: {
        name: "Lorem Ipsum",
        img: "",
        isOnline: true,
      },
      created_at: Date.now(),
      content: "/groot.jpg",
      likes: [3, 1],
      comments: [],
    },
    {
      user: {
        name: "User Name",
        img: "",
        isOnline: false,
      },
      created_at: Date.now(),
      content: "/spiderman2.jpg",
      likes: [],
      comments: [],
    },
  ];

  const session = await getServerSession(authOptions);

  console.log(session);

  return (
    <div className=" px-20 pt-6 grid grid-cols-10 gap-2 relative ">
      {/* leftSide */}
      <div className="h-auto col-span-2 p-2 border rounded-md overflow-hidden hidden xl:block">
        <div className="p-5 grid gap-5">
          <h3 className="justify-center flex text-xl font-semibold">CONTENT</h3>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
        </div>
      </div>

      {/* middle */}
      <div className="col-span-7 xl:col-span-5 px-10">
        {/* whole post box */}
        <div className="border flex-col rounded-lg flex gap-4 p-4">
          {/* user icon and post box row */}
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* <UserIcon className="w-6 h-6" /> */}
            <input
              type="text"
              className="shrink-0 border rounded-md h-10 flex-1 px-4"
              placeholder="Post your thought"
            />
          </div>

          {/* icon and post button */}
          <div className="flex justify-between mt-2">
            {/* icons */}
            <div className="flex gap-4">
              <button>
                <Camera className="w-5 h-5" />
              </button>
              <button>
                <NotepadText className="w-5 h-5" />
              </button>
              <button>
                <Paperclip className="w-5 h-5" />
              </button>
            </div>

            {/* post button */}
            <Button className=" border rounded-md bg-yellow-400 flex w-auto min-w-16 justify-center hover:bg-yellow-300 active:bg-yellow-200 focus:outline-none">
              Post
            </Button>
          </div>
        </div>

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
            <div className="flex justify-between item-center px-4 p-2 border-b border-t">
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
                   <SelectItem value="light">CSE</SelectItem>
                   <SelectItem value="dark">Dark</SelectItem>
                   <SelectItem value="system">System</SelectItem>
                 </SelectContent>
               </Select>
             </div>

              <div className="flex items-center realtive border rounded-md">
                <div>
                <input type="text" 
                className=" py-2 rounded-md"
                placeholder="Search"
                />
                </div>
                <Search className="w-4 h-4 absolute ml-1"/>
              </div>
           </div>

               <div>
                <FriendList/>
               </div>
               
            </div>

          {/* <div className="bg-red-500">asdfg</div> */}
        </div>

      </div>

    </div>
  );
};

export default Social;

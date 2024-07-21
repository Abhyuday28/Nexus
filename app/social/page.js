import React from "react";
import Link from "next/link";
import {
  Bell,
  MessageCircle,
  Search,
  SearchIcon,
  User,
  Paperclip,
  Camera,
  ImageUp,
  NotepadText,
  EllipsisVertical,
  Save,
  FlagIcon,
  Share,
  Share2,
  EyeOff,
  Sparkles,
  MessageSquare,
  UserCircleIcon,
  Reply,
  PlusIcon,
  ChevronDownIcon,
} from "lucide-react";
import UserIcon from "@/components/userIcon";
// <Camera/>
// <ImageUp/>
// <NotepadText/>
/* <EllipsisVertical/> */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent } from "@/components/ui/card";
import { Dialogs } from "@/components/postContent";
import Post from "@/components/post";
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {Button, ButtonGroup} from "@nextui-org/button";

const Social = () => {
  const isOnline = true;

  const posts = [
    {
      user: {
        name: "Lorem Ipsum",
        img: "",
        isOnline: true,
      },
      created_at: Date.now(),
      content: "/postPic.webp",
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
      content: "/pic2.jpg",
      likes: [],
      comments: [],
    },
  ];

  return (
    <div className=" px-20 pt-6 grid grid-cols-10  gap-5 relative ">
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
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>

      {/* right */}
      <div className="col-span-3">

{/* user info. Card */}
    <div className="border border-1 pt-14 rounded-2xl bg-cover bg-center"
    style={{ backgroundImage: "url('/bgbanner.jpg')" }}
    >
    <Card className=" mt-auto max-w-md mx-auto rounded-2xl">
      <div className="relative h-10">
        <Avatar className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-lime-300">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <CardContent className="text-center">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">User Name</h3>
          <p className="text-sm text-muted-foreground">@20300</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Passionate software engineer, always learning and exploring new technologies.
          </p>
        </div>

       <div className="grid grid-cols-4 pt-4 ">
       <div className="col-span-1 flex rounded-l-xl bg-lime-200 h-4">
        </div>
       <div className="col-span-1 flex  bg-lime-300 h-4">
        </div>
       <div className="col-span-1 flex  bg-lime-400 h-4">
        </div>
       <div className="col-span-1 flex rounded-r-xl bg-lime-500 h-4">
        </div>
       </div>

      </CardContent>
    </Card>
    </div>
    
        {/* <div className="border bg-background m-6 px-4 rounded-md flex justify-center bg-black">
        <div className="border rounded-full -mt-6 ring-2 ring-lime-400">
        <UserIcon  name='Ram' img=''/> */}
        
        {/* <div>
        <h1 className="capitalize font-semibold">Abhyuday</h1>
        <h1 className="uppercase text-sm">cse</h1>
        </div> */}
        {/* </div> */}
      {/* </div> */}

      <div className=" ">
      <div className="py-4 flex justify-center">

      <div className="w-full border gap-4 flex-col flex rounded-lg">

      <div>
      <div className="text-center border-b p-4">
        <div className="">YOUR PRIORITY</div>
      </div>
      <div className="h-auto flex flex-col border-b">
        <button className=" text-6xl flex justify-center ">
          <PlusIcon className="h-12 w-12 hover:bg-slate-100 rounded-lg" />
        </button>
        </div>
      </div>

      <Collapsible>
<CollapsibleContent>
        <div className="w-full flex flex-col gap-4 px-4">
          <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg">
            Add
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg">
            Remove
          </button>
        </div>
</CollapsibleContent>
  <CollapsibleTrigger className="">
       <button className=" mx-[233px] mt-2">
          <ChevronDownIcon className="h-7 w-7" />
        </button>
   </CollapsibleTrigger>
 
</Collapsible>
    </div>
      </div>

      {/* <div className="">
      <Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>


<Collapsible>
<CollapsibleContent>
<div className="h-auto flex flex-col gap-4">
        <button className=" text-6xl flex justify-center ">
          <PlusIcon className="h-12 w-12 hover:bg-slate-100 rounded-lg" />
        </button>
        <div className="w-full flex flex-col gap-4 px-4">
          <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg">
            Add
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg">
            Remove
          </button>
        </div>
        <button className="mx-auto">
          <ChevronDownIcon className="h-5 w-5" />
        </button>
      </div>
</CollapsibleContent>
  <CollapsibleTrigger>
       <button className=" ">
          <ChevronDownIcon className="h-5 w-5" />
        </button>
   </CollapsibleTrigger>
 
</Collapsible>

      </div> */}
      <div className="bg-red-400">asdfg</div>
      <div className="bg-red-500">asdfg</div>
      </div>

      </div>
    </div>
  );
};

export default Social;

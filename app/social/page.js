

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
  MessageSquare
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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Social = () => {
  const isOnline = true;

  return (
    <div className=" px-20 pt-6 grid grid-cols-10 gap-5 ">
      
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
            <button className=" border rounded-md bg-yellow-400 flex w-auto min-w-16 justify-center hover:bg-yellow-300 active:bg-yellow-200 focus:outline-none focus:ring-1 focus:ring-gray-300">
              Post
            </button>
          </div>
        </div>

        {/* post content 1 */}
        <div className="pt-6">
          <div className=" border rounded-md flex flex-col ">
            {/* user info  */}
            <div className="flex rounded-t-md p-2 gap-4 items-center border-b">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              {/* <UserIcon className="w-5 h-5" /> */}

              <div className="flex justify-between">
                <div>
                  <h3 className="capitalize font-semibold">user name</h3>
                  <h5 className="text-xs">
                    details
                    {isOnline ? (
                      <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full" />
                    ) : null}
                  </h5>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto">
                  <EllipsisVertical className="ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>
                    <Save className="mr-2 w-4 h-4"/>
                    Save
                    </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 w-4 h-4"/>
                    Report</DropdownMenuItem>
                  <DropdownMenuItem>
                  <Share2 className="mr-2 w-4 h-4"/>
                    Share</DropdownMenuItem>
                  <DropdownMenuItem>
                  <EyeOff className="mr-2 w-4 h-4"/>
                    Not interested</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center mx-auto min-h-32 max-h-[600px] ">
            <img src="/postPic.webp" className="h-[500px] "/>
            </div>


{/* react, comment, share section  */}
<div className=" flex rounded-b-md border-t p-3 px-4 justify-between">

<div className="flex gap-6">

{/* like button */}
<button className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
  <Sparkles className="w-5 h-5" />
  <h3>56</h3>
</button>

{/* comment button */}
<button className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
  <MessageSquare className="w-5 h-5" />
  <h3>17</h3>
</button>

{/* share section */}
<button className= "flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
  <Share className="w-5 h-5" />
</button>

</div>

{/* post upload time */}
<h3>posted 3h ago</h3>


</div>
          </div>
        </div>

{/* post content 2 */}
        <div className="pt-6">
          <div className=" border rounded-md flex flex-col ">
            {/* user info  */}
            <div className="flex rounded-t-md p-2 gap-4 items-center border-b">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
              {/* <UserIcon className="w-5 h-5" /> */}

              <div className="flex justify-between">
                <div>
                  <h3 className="capitalize font-semibold">user name</h3>
                  <h5 className="text-xs">
                    details
                    {isOnline ? (
                      <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full" />
                    ) : null}
                  </h5>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className="ml-auto">
                  <EllipsisVertical className="ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>
                    <Save className="mr-2 w-4 h-4"/>
                    Save
                    </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FlagIcon className="mr-2 w-4 h-4"/>
                    Report</DropdownMenuItem>
                  <DropdownMenuItem>
                  <Share2 className="mr-2 w-4 h-4"/>
                    Share</DropdownMenuItem>
                  <DropdownMenuItem>
                  <EyeOff className="mr-2 w-4 h-4"/>
                    Not interested</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex items-center mx-auto min-h-32 max-h-[600px] ">
            <img src="/pic2.jpg" className="h-[500px] "/>
            </div>


{/* react, share section  */}
            <div className=" flex rounded-b-md border-t p-3 px-4 justify-between">

              {/* react comment share section*/}
             <div className="flex gap-6">

            {/* like button */}
             <button className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
                <Sparkles className="w-5 h-5" />
                <h3>56</h3>
              </button>
              
          

             {/* comment button */}
              <button className="flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
                <MessageSquare className="w-5 h-5" />
                <h3>17</h3>
              </button>
              
             {/* share section */}
              <button className= "flex gap-1 hover:bg-gray-100 rounded-md p-2 justify-center item-center">
                <Share className="w-5 h-5" />
              </button>
             
             </div>

             {/* post upload time */}
              <h3>posted 3h ago</h3>
             

            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="col-span-3 p-2 border rounded-md"></div>
    </div>
  );
};

export default Social

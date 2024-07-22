import React from "react";
import {
  Paperclip,
  Camera,
  NotepadText,
  HomeIcon,
  PlusIcon,
  ChevronDownIcon,
  Pin,
} from "lucide-react";
import UserIcon from "@/components/userIcon";
import FacultyCard from "@/components/facultyCard";
import Post from "@/components/post";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@nextui-org/button";
import UserCard from "@/components/userCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


const Academic = () => {
  // const isOnline = true;
  // current log in
  const name = "Vijay Kumar";
  const img = "";

  const posts = [
    {
      user: {
        name: "Vijay Kumar",
        img: "",
        isOnline: true,
      },
      created_at: Date.now(),
      content: "/ad-hoc-syllabus.png",
      likes: [1, 2, 4],
      comments: [
        {
          user: {
            name: "Vikash",
            img: "",
            isOnline: true,
          },
          content: "Nice One!",
          likes: [1, 3],
          comments: [],
        },
      ],
    },
    {
      user: {
        name: "Prateek Ranjan",
        img: "",
        isOnline: false,
      },
      created_at: Date.now(),
      content: "/blockchain-syllabus.png",
      likes: [1, 2, 3, 4],
      comments: [
        {
          user: {
            name: "Vikash",
            img: "",
            isOnline: true,
          },
          content: "Nice One!",
          likes: [1, 3],
          comments: [],
        },
        {
          user: {
            name: "Sharma",
            img: "",
            isOnline: false,
          },
          content: "Nice One!",
          likes: [2],
          comments: [],
        },
      ],
    },
  ];

  return (
    <div className=" px-20 pt-6 grid grid-cols-10 gap-2 relative ">

      
      {/* leftSide -------------------*/}
      <div className="h-screen col-span-2 overflow-hidden hidden xl:block relative">
        <div className="p-2 grid gap-3  sticky left-0 top-0">
          {/* <h3 className="justify-center flex text-xl font-semibold">HOME</h3> */}
          <button className=" border border-1 p-1 justify-center flex gap-3 rounded-md font-semibold">
            <HomeIcon />
            HOME
          </button>
          <button className=" border border-1 p-1 justify-center flex gap-3 rounded-md font-semibold">
            <Pin/>
            SAVED
          </button>
        

          {/* <Accordion /> */}
          < >
          <div className=" border border-1 flex items-center rounded-md">
            <FacultyCard />
          </div>
          <div className=" border border-1 flex items-center rounded-md ">
            <FacultyCard />
          </div>
          <div className=" border border-1 flex items-center rounded-md ">
            <FacultyCard />
          </div>
          </>

          {/* <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div> */}
        </div>
      </div>

      {/* middle */}
      <div className="col-span-7 xl:col-span-5 px-10">
        {/* whole post box */}
        <div className="border flex-col rounded-lg flex gap-4 p-4">
          {/* user icon and post box row */}
          <div className="flex gap-4">
            <UserIcon name={name} img={img} />
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

        {/* post content */}

        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      {/* right */}
      <div className="col-span-3">
        <UserCard />

        <div className="py-4 flex justify-center">
            <div className=" border gap-4 flex-col flex rounded-lg w-full">
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
                  <div className="w-full flex flex-col gap-2 px-4">
                    <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg transition-colors duration-300">
                      Class Routine
                    </button>
                    <button className="bg-slate-100 hover:bg-slate-200 p-2 rounded-lg transition-colors duration-300">
                      Syllabus
                    </button>
                  </div>
                </CollapsibleContent>
                <CollapsibleTrigger className="w-full flex justify-center items-center p-2">
                  <ChevronDownIcon className="h-7 w-7" />
                </CollapsibleTrigger>
              </Collapsible>
            </div>
          </div>
        <div className="mt-10">
          <div className="bg-red-200">asdfg</div>
          <div className="bg-red-300">asdfg</div>
          <div className="bg-red-400">asdfg</div>
          <div className="bg-red-500">asdfg</div>
        </div>
      </div>
    </div>
  );
};

export default Academic;

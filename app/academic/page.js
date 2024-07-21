import React from "react";
import { Paperclip, Camera, NotepadText, PhoneCallIcon, MessageCircle, HomeIcon, ListRestart } from "lucide-react";
import UserIcon from "@/components/userIcon";
import FacultyCard from "@/components/facultyCard";
import Post from "@/components/post";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion } from "@/components/ui/accordion";
import {Button} from "@nextui-org/button";

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
    <div className=" px-20 pt-6 grid grid-cols-10 gap-5 relative ">
      {/* leftSide -------------------*/}
      <div className="h-screen col-span-2 overflow-hidden hidden xl:block relative">
        <div className="p-2 grid gap-3  sticky left-0 top-0">
          {/* <h3 className="justify-center flex text-xl font-semibold">HOME</h3> */}
          <button className=" border border-1 p-1 justify-center flex gap-2 rounded-md font-semibold">
            <HomeIcon/>
            HOME
          </button>
          <button className=" border border-1 p-1 justify-center flex gap-2 rounded-md font-semibold">
            <ListRestart/>
            LATEST
          </button>
          {/* <button className=" border border-1 p-1 justify-center flex gap-2 rounded-md font-semibold">
            LATEST
          </button> */}

<Accordion/>
          <div className=" border border-1 flex items-center rounded-md ">
            <FacultyCard />
            <MessageCircle className=" mr-5"/>
          </div>
          <div className=" border border-1 flex items-center rounded-md ">
            <FacultyCard />
            <MessageCircle className=" mr-5"/>
          </div>
          <div className=" border border-1 flex items-center rounded-md ">
            <FacultyCard />
            <MessageCircle className=" mr-5"/>
          </div>

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


      <div className="border border-1 pt-14 bg-cover bg-center rounded-2xl"
             style={{ backgroundImage: "url('/bgbanner.jpg')" }}
      >
    <Card className=" mt-auto w-full max-w-md mx-auto rounded-2xl">
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

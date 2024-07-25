import { HomeIcon, PlusIcon, ChevronDownIcon, Pin } from "lucide-react";
import FacultyCard from "@/components/facultyCard";
import Post from "@/components/post";
import UserCard from "@/components/userCard";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/authOptions";
import PostBox from "@/components/postBox";
import { getAcademicPosts } from "@/action/post";

const Academic = async () => {
  // const isOnline = true;
  // current log in

  const session = await getServerSession(authOptions);

  const res = await getAcademicPosts();

  const posts = res.data;
  return (
    <div className=" px-20 pt-6 grid grid-cols-10 gap-2 relative ">
      {/* leftSide -------------------*/}
      <div className="h-auto col-span-2 overflow-hidden hidden xl:block relative max-w-md border-r-2 border-black">
        <div className="p-4 grid gap-3  sticky left-0 top-0">
          <button className=" border border-1 p-1 justify-center flex gap-3 rounded-md font-semibold">
            <HomeIcon />
            HOME
          </button>
          <button className=" border border-1 p-1 justify-center flex gap-3 rounded-md font-semibold">
            <Pin />
            SAVED
          </button>

          {/* <Accordion /> */}

          <FacultyCard />

          {/* <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div>
          <div className="h-9 border rounded-md"></div> */}
        </div>
      </div>

      {/* middle */}
      <div className="col-span-7 xl:col-span-5 px-10">
        {/* whole post box */}
        <PostBox />

        {/* post content */}

        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      {/* right */}
      <div className="col-span-3 max-w-md">
        <UserCard />

        <div className="py-4 flex justify-center ">
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
        {/* <div className="mt-10">
          <div className="bg-red-200">asdfg</div>
          <div className="bg-red-300">asdfg</div>
          <div className="bg-red-400">asdfg</div>
          <div className="bg-red-500">asdfg</div>
        </div> */}
      </div>
    </div>
  );
};

export default Academic;

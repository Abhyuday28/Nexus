import { HomeIcon, PlusIcon, ChevronDownIcon, Pin, Search } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Academic = async () => {
  const session = await getServerSession(authOptions);
  const res = await getAcademicPosts();
  const posts = res.data;

  return (
    <div className="px-2 md:px-6 lg:px-20 pt-6 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 gap-2 relative h-screen">
      {/* Left Sidebar: only on lg and up, sticky */}
      <div className="hidden lg:block lg:col-span-2 overflow-hidden border-r-2 border-black sticky top-0 h-[calc(100vh-2rem)]">
        <div className="p-2 grid gap-3">
          <button className="border border-1 p-2 justify-center flex gap-3 rounded-md font-semibold">
            <HomeIcon />
            HOME
          </button>
          <button className="border border-1 p-2 justify-center flex gap-3 rounded-md font-semibold">
            <Pin />
            SAVED
          </button>
        </div>
        <div className="h-auto flex-col m-2 border rounded-md">
          <div className="p-2 font-semibold border-b text-center">FACULTY</div>
          <div className="p-2 flex justify-around border-b gap-2">
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
            {/* searchBar */}
            <div className="flex items-center relative border rounded-md space-x-2 w-auto">
              <Search className="w-4 h-4 ml-2" />
              <input
                className="items-center rounded-md bg-transparent focus:outline-none w-full bg-black"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mx-0 border-0">
            <FacultyCard />
          </div>
        </div>
      </div>

      {/* Middle: scrollable */}
      <div className="col-span-1 md:col-span-4 lg:col-span-5 px-2 md:px-6 lg:px-10 overflow-y-auto h-[calc(100vh-2rem)]">
        <PostBox />
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </div>

      {/* Right Sidebar: md and up, sticky */}
      <div className="hidden md:block md:col-span-2 lg:col-span-3 sticky top-0 h-[calc(100vh-2rem)]">
        <UserCard />
        <div className="py-4 max-w-md flex justify-center">
          <div className="border gap-4 flex-col flex rounded-lg w-full">
            <div>
              <div className="text-center border-b p-4">
                <div className="">YOUR PRIORITY</div>
              </div>
              <div className="h-auto flex flex-col border-b">
                <button className="text-6xl flex justify-center">
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
      </div>
    </div>
  );
};

export default Academic;

"use client";
import UserIcon from "@/components/userIcon";
import { Button } from "@nextui-org/button";
import { Camera, NotepadText, Paperclip } from "lucide-react";
import { useSession } from "next-auth/react";
import { Skeleton } from "./ui/skeleton";
import { useState } from "react";
import { toast } from "sonner";
import { addPost } from "@/action/post";
import { usePathname } from "next/navigation";

const PostBox = () => {
  const pathname = usePathname();
  const session = useSession();
  const name = session.data?.user?.name;
  const img = session.data?.user?.image;
  const id = session.data?.user?.id;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const content = e.currentTarget.content.value;
      if (content === "" || content.lenght < 10)
        return toast.error("your post is too short!");
      const res = await addPost({
        user: id,
        content,
      });
      if (res.success) {
      }
      toast[res.type](res.message);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return session.status === "loading" ? (
    <Skeleton className={"h-32"} />
  ) : session?.data?.user?.role === "Student" &&
    pathname !== "/social" ? null : (
    <form
      className="border flex-col rounded-lg flex gap-4 p-4"
      onSubmit={handleSubmit}
    >
      {/* user icon and post box row */}
      <div className="flex gap-4">
        <UserIcon name={name} img={img} />
        <input
          disabled={loading}
          type="text"
          name="content"
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
        <Button
          type="submit"
          disabled={loading}
          className=" border rounded-md bg-yellow-400 flex w-auto min-w-16 justify-center hover:bg-yellow-300 active:bg-yellow-200 focus:outline-none"
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default PostBox;

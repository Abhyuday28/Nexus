"use client";

import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "@nextui-org/button";
import { User } from "lucide-react";
import Link from "next/link";

const NavUser = () => {
  const session = useSession();

  return session?.status === "loading" ? (
    <Skeleton className={"w-12 h-12 rounded-full"} />
  ) : session?.data?.user ? (
    <div className="flex gap-6 items-center">
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <MessageCircle />
      </button> */}
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <Bell />
      </button> */}
      <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
        <User/>
      </button>
    </div>
  ) : (
    <Button className="bg-yellow-300 rounded-xl">
      <Link href={"/login"}>Login</Link>
    </Button>
  );
};

export default NavUser;

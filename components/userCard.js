"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@nextui-org/button";
import { PencilIcon } from "lucide-react";

const UserCard = () => {
  const session = useSession();

  const user = session?.data?.user;

  const hasSurname = user?.name?.split(" ")?.length > 2;

  return (
    <div
      className="border-1 pt-14 bg-cover bg-center rounded-2xl max-w-md"
      style={{ backgroundImage: "url('/bgbanner.jpg')" }}
    >
      <Card className=" mt-auto w-full max-w-md mx-auto rounded-2xl">
        <div className="relative h-10 ">
          <Avatar className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 border-4 border-lime-300">
            <AvatarImage src={user?.image} />
            <AvatarFallback>
              {hasSurname
                ? `${user?.name?.split(" ")[0][0]}${
                    user?.name?.split(" ")[1][0]
                  }`
                : user?.name && user?.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="absolute bottom-0 right-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-secondary-foreground">
            <PencilIcon className="h-4 w-4" />
          </div>
        </div>
        <CardContent className="text-center">
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{user?.name}</h3>
            {user?.roll ? (
              <p className="text-sm text-muted-foreground">@{user?.roll}</p>
            ) : null}
            <p className="text-sm leading-relaxed text-muted-foreground">
              About You.
            </p>
          </div>

          <div className="grid grid-cols-4 pt-4 ">
            <div className="col-span-1 flex rounded-l-xl bg-lime-200 h-4"></div>
            <div className="col-span-1 flex  bg-lime-300 h-4"></div>
            <div className="col-span-1 flex  bg-lime-400 h-4"></div>
            <div className="col-span-1 flex rounded-r-xl bg-lime-500 h-4"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="text-red-500 hover:text-red-800 rounded-lg transition-colors duration-500 "
            onClick={signOut}
          >
            Log Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;

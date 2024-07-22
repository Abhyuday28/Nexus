"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/button";

const UserCard = () => {
  return (
    <div
      className="border-1 pt-14 bg-cover bg-center rounded-2xl max-w-md"
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
              Passionate software engineer, always learning and exploring new
              technologies.
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
          <Button className="text-red-500 hover:text-red-800 rounded-lg transition-colors duration-500 " onClick={signOut}>
            Log Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserCard;

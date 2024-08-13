import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import UserIcon from "./userIcon";
import { getFaculty } from "@/action/user";

export default async function FacultyCard() {
  const res = await getFaculty();
  const userlist = res.data;

  return userlist.length ? (
    <Card className="w-full max-w-md border-0 rounded-none">
      <CardContent className="space-y-4 p-6 max-h-[300px] overflow-auto">
        {userlist.map((user, i) => {
          return (
            <button
              key={i}
              className="flex items-center w-full space-x-4 rounded-md border p-2 hover:bg-muted bg-cover bg-center border-1"
              style={{ backgroundImage: "url('/bgbanner.jpg')" }}
            >
              <UserIcon
                img={user.image}
                name={`${user.firstName} ${user.lastName}`}
              />
              <div className="">
                <p className="font-medium">
                  {user.firstName} {user.lastName}
                </p>
                {/* <p className="text-muted-foreground text-sm">{user.branch}</p> */}
              </div>
            </button>
          );
        })}
      </CardContent>
    </Card>
  ) : null;
}

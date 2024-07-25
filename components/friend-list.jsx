
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { getStudents } from "@/action/user";
import UserIcon from "./userIcon";

export async function FriendList() {

  const res=await getStudents()
  const userlist=res.data

  return (
    (<Card className="w-full max-w-md border-0">
      <CardContent className="space-y-4 p-6 max-h-[300px] overflow-auto">
        {userlist.map((user,i)=>{
          return (
            <button key={i}
              className="flex items-center w-full space-x-4 rounded-md border p-2 hover:bg-muted bg-cover bg-center border-1"
              style={{ backgroundImage: "url('/bgbanner.jpg')" }}
              >
                <UserIcon img={user.image} name={`${user.firstName} ${user.lastName}`}/> 
              <div>
                <p className="font-medium">{user.firstName} {user.lastName}</p>
               <div className="flex items-start gap-2">
               <p className="text-muted-foreground text-sm ">{user.branch}</p>
               <p className="text-muted-foreground text-sm ">@{user.roll}</p>
               </div>

              </div>
            </button>
          )
        })}
       
      </CardContent>
    </Card>)
  );
}

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


{/* <ul role="list">
  {#each people as person}
    <li class="group/item hover:bg-slate-100 ...">
      <img src="{person.imageUrl}" alt="" />
      <div>
        <a href="{person.url}">{person.name}</a>
        <p>{person.title}</p>
      </div>
      <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
        <span class="group-hover/edit:text-gray-700 ...">Call</span>
        <svg class="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500 ...">
          <!-- ... -->
        </svg>
      </a>
    </li>
  {/each}
</ul> */}
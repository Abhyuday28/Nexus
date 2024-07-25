import { Button } from "@nextui-org/button";
import Link from "next/link";
import { getCollege } from "@/action/post";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import Image from "next/image";

const NavUser = async () => {
  const session = await getServerSession(authOptions);

  const res = session && (await getCollege(session.user.college));

  const college = res?.data;

  console.log(college);

  return session?.user ? (
    <div className="flex gap-6 items-center">
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <MessageCircle />
      </button> */}
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <Bell />
      </button> */}

      {college?.code === 113 ? (
        <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src={`https://www.mcemotihari.ac.in/wp-content/themes/theme-college/assets/img/logo.jpg`}
            width={68}
            height={68}
          />
        </button>
      ) : college?.code === 107 ? (
        <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src={`https://www.mitmuzaffarpur.org/wp-content/themes/mit/assets/img/mit-logo.jpg`}
            width={68}
            height={68}
          />
        </button>
      ) : college?.code === 129 ? (
        <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src={`https://th.bing.com/th/id/OIP.wDOsXpMiVbMIBA1MWi8fIgHaHa?rs=1&pid=ImgDetMain`}
            width={68}
            height={68}
          />
        </button>
      ) : null}
    </div>
  ) : (
    <Link href={"/login"}>
      <Button className="bg-yellow-300 rounded-xl">Login</Button>
    </Link>
  );
};

export default NavUser;

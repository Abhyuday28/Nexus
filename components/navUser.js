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

  return session?.user ? (
    <div className="flex gap-6 items-center">
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <MessageCircle />
      </button> */}
      {/* <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <Bell />
      </button> */}
      {college.code === 113 ? (
        <button className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
          <img
            src={`https://www.mcemotihari.ac.in/wp-content/themes/theme-college/assets/img/logo.jpg`}
            width={68}
            height={68}
          />
        </button>
      ) : null}
    </div>
  ) : (
    <Button className="bg-yellow-300 rounded-xl">
      <Link href={"/login"}>Login</Link>
    </Button>
  );
};

export default NavUser;

import { Bell, MessageCircle, Search, SearchIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tenor_Sans } from "next/font/google";
import Nav from "./nav";

const tenor_Sans = Tenor_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <>
      <header className="bg-background h-16 flex items-center justify-between px-8 border-b sticky top-0 z-50">
        {/* LOGO */}
        <Link href={"/"} className="">
          <h1
            className={`text-2xl font-semibold text-primary ${tenor_Sans.className}`}
          >
            NEXUS
          </h1>
        </Link>

        {/* SEARCHBAR */}
        <div className="relative overflow-hidden">
          <input
            type="text"
            className="bg-transparent border-2 border-primary rounded-full p-1 px-4 pl-10"
            placeholder="Search"
          />
          <Image
            src="/search.svg"
            width={20}
            height={20}
            alt="Search"
            className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5"
          />
        </div>

        {/* Header Icons */}
        <div className="flex gap-6 items-center">
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <MessageCircle />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Bell />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <User />
          </button>
        </div>
      </header>
      <Nav />
    </>
  );
}

import Link from "next/link";
import { Tenor_Sans } from "next/font/google";
import Nav from "./nav";
import NavUser from "./navUser";
import SearchBar from "./SearchBar";
import Image from "next/image";

const tenor_Sans = Tenor_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <>
      <header className="bg-background h-16 flex items-center justify-between px-8 border-b sticky top-0 z-50">
        {/* LOGO */}
        <Link href={"/academic"} className="">
          <div
            className={`text-2xl font-semibold text-black ${tenor_Sans.className}`}
          >
            <Image src={"/nexus.svg"} width={120} height={120} alt="logo" />
          </div>
        </Link>

        {/* SEARCHBAR */}
        <SearchBar />

        {/* Header Icons */}
        <NavUser />
      </header>
      <Nav />
    </>
  );
}

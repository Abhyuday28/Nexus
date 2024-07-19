"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  return pathName === "/login" || pathName === "/signup" ? null : (
    <nav className="h-16 p-2 grid  grid-cols-10 gap-4 px-8 sticky top-16 z-50 bg-background">
      <Link
        href={"/academic"}
        className={`p-2  rounded-xl flex items-center justify-center transition-all duration-500 ${
          pathName === "/academic"
            ? "col-span-7 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/social"
            ? "col-span-3 border"
            : "col-span-5 tracking-[10px]  border-border border-[3px] font-semibold"
        } `}
      >
        ACADEMIC
      </Link>
      <Link
        href={"/social"}
        className={`p-2 rounded-xl flex items-center justify-center transition-all duration-500  ${
          pathName === "/social"
            ? "col-span-7 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/academic"
            ? "col-span-3 border"
            : "col-span-5 tracking-[10px]  border-border border-[3px] font-semibold"
        }`}
      >
        SOCIAL
      </Link>
    </nav>
  );
};

export default Nav;

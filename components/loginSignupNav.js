"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const LoginSignupNav = () => {
  const pathName = usePathname();
  const getHref = () => {
    console.log(pathName);
    if (pathName === "/signup" || pathName === "/facultysignup")
      return {
        faculty: "/facultysignup",
        student: "signup",
      };
    if (pathName === "/login" || pathName === "/facultylogin")
      return {
        faculty: "/facultylogin",
        student: "/login",
      };
  };
  return (
    <nav className="rounded-md font-semibold grid grid-cols-4 gap-2">
      <Link
        href={getHref().faculty}
        className={`p-2 rounded-xl flex items-center justify-center transition-all duration-500 ${
          pathName === "/facultysignup" || pathName === "/facultylogin"
            ? "col-span-3 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/signup" || pathName === "/login"
            ? "col-span-1 border"
            : "col-span-2 border-border border-[3px] font-semibold"
        }`}
      >
        Faculty
      </Link>

      <Link
        href={getHref().student}
        className={`p-2  rounded-xl flex items-center justify-center transition-all duration-500 ${
          pathName === "/signup" || pathName === "/login"
            ? "col-span-3 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/facultysignup" || pathName === "/facultylogin"
            ? "col-span-1 border"
            : "col-span-2 border-border border-[3px] font-semibold"
        }`}
      >
        Student
      </Link>
    </nav>
  );
};

export default LoginSignupNav;

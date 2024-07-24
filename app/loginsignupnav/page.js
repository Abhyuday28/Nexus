import { usePathname } from 'next/navigation'
import React from 'react'
import Link from "next/link";

const LoginSignupNav = () => {
    const pathName=usePathname();
  return pathName==="/signup" && "/login"||
  pathName==="/facultysignup" && "/facultysignup"? (<nav className='rounded-md font-semibold grid grid-cols-4 gap-2'
  >
   <Link  href={"/facultysignup"}
        className={`p-2  rounded-xl flex items-center justify-center transition-all duration-500 ${
          pathName === "/facultysignup"
            ? "col-span-3 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/signup"
            ? "col-span-1 border"
            : "col-span-2 border-border border-[3px] font-semibold"
        }`}>Faculty</Link>

   <Link  href={"/signup"}
        className={`p-2  rounded-xl flex items-center justify-center transition-all duration-500 ${
          pathName === "/signup"
            ? "col-span-3 tracking-[12px] border-border border-[3px] font-semibold"
            : pathName === "/facultysignup"
            ? "col-span-1 border"
            : "col-span-2 border-border border-[3px] font-semibold"
        }`}>Student</Link>
  </nav>
  ):null
}

export default LoginSignupNav
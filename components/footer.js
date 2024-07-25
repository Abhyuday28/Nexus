import React from "react";

import { Tenor_Sans } from "next/font/google";
import Link from "next/link";
const tenor_Sans = Tenor_Sans({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div
      className={`h-auto mt-auto bg-black p-6 text-white  flex justify-between ${tenor_Sans.className}`}
    >
      <Link href={"/academic"} className="text-3xl">
        NEXUS
      </Link>
      <div className="text-center text-xl">About Us</div>
      <Link href={"#"} className="text-xl">
        Contribute on Github
      </Link>
    </div>
  );
};

export default Footer;

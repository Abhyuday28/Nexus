// import React from 'react'
// import Image from "next/image";
// import { Search } from 'lucide-react';

// const SearchBar = () => {
//   return (
//     <div className="relative overflow-hidden">
//       {/* hidden xl:block  */}
//     <input
//       type="text"
//       className="bg-transparent border-2 border-black rounded-full p-1 px-4 pl-10"
//       placeholder="Search"
//     />
//     <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5"/>
//     {/* <Image
//       src="/search.svg"
//       width={20}
//       height={20}
//       alt="Search"
//       className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5"
//     /> */}
//   </div>
//   )
// }

// export default SearchBar

import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-6 relative w-full flex justify-end items-center overflow-hidden">
      {/* Show only icon on small screens */}
      <button className="sm:hidden p-1 border-2 rounded-full mr-1 w-9 h-9 flex items-center justify-center">
        <Search className="w-4 h-4 text-gray-500" />
      </button>
      {/* Show input with icon on md and up */}
      <div className="hidden sm:block relative w-auto">
        <input
          type="text"
          className="bg-transparent border-2 rounded-full p-1 px-4 pl-10 text-sm sm:text-base focus:outline-none transition-all duration-200"
          placeholder="Search"
        />
        <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};

export default SearchBar;

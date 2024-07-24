import React from 'react'
import Image from "next/image";
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative overflow-hidden">
    <input
      type="text"
      className="bg-transparent border-2 border-black rounded-full p-1 px-4 pl-10"
      placeholder="Search"
    />
    <Search className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5"/>
    {/* <Image
      src="/search.svg"
      width={20}
      height={20}
      alt="Search"
      className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5"
    /> */}
  </div>
  )
}

export default SearchBar
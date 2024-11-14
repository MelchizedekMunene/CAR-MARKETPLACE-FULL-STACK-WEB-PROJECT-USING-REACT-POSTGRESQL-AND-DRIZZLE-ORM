import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from './ui/separator'
import { IoSearchSharp } from "react-icons/io5";
import Data from '@/Shared/Data';
  
function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full 
    flex-col md:flex md:flex-row gap-10 px-5 
    items-center w-[60%] '>
      <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="old">Old</SelectItem>
        </SelectContent>
        </Select>

        <Separator orientation='vertical' className="hidden md:block"/>

        <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="CarMakes" />
        </SelectTrigger>
        <SelectContent>
          {Data.CarMakes.map((index,make) => {
            <SelectItem key={index} value={make}>{make}</SelectItem>
          })}
        </SelectContent>
        </Select>

        <Separator orientation='vertical' className="hidden md:block"/>

        <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
        </SelectContent>
        </Select>
        <div>
        <IoSearchSharp className='text-[50px] bg-[#228B22] rounded-full p-3 text-white 
        hover:scale-105 transition-all cursor-pointer'/>
        </div>
    </div>
  )
}

export default Search

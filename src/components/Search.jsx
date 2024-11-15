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
import hero_image from '../assets/tesla.png' 

function Search() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className='w-full flex justify-center'>
        <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full 
          flex flex-col md:flex-row gap-10 px-5 
          items-center w-full max-w-[900px] mx-4'>
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
              {Data.CarMakes.map((car) => (
                <SelectItem key={car.id} value={car.name.toLowerCase()}>
                  {car.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation='vertical' className="hidden md:block"/>

          <Select>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
              {Data.Pricing.map((price) => (
                <SelectItem key={price.id} value={price.amount}>
                  Ksh.{price.amount.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div>
            <IoSearchSharp className='text-[50px] bg-[#228B22] rounded-full p-3 text-white 
            hover:scale-105 transition-all cursor-pointer'/>
          </div>
        </div>
      </div>

      <div className='mt-10 max-w-[1200px] w-full'>
        <img src={hero_image} alt="tesla image" className="w-full h-auto object-cover" />
      </div>
    </div>
  )
}

export default Search
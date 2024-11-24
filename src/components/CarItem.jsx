import React from 'react'
import { Separator } from './ui/separator'
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineOpenInNew } from "react-icons/md";

function CarItem( {car} ) {
  return (
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
        <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm pb-1 text-white'>New</h2>
        <img src={car.image} width={'100%'} height={250}
        className='rounded-t-xl' alt={car.name}/>
        <div className='p-4'>
        <h2 className='font-bold text-black text-lg mb-2'>{car.name}</h2>
        <Separator/>
        <div className='grid grid-cols-3 mt-5 '>
          <div className='flex flex-col items-center'>
              <LuFuel className='text-lg mb-2'/>
              <h2>{car.miles} KM</h2>
          </div>
          <div className='flex flex-col items-center'>
              <SlSpeedometer className='text-lg'/>
              <h2>{car.fuelType}</h2>
          </div>
          <div className='flex flex-col items-center'>
              <GiGearStickPattern className='text-lg'/>
              <h2>{car.gearType}</h2>
          </div>
        </div>
        <Separator className='my-2'/>
        <div className='flex items-center justify-between mt-4 bg-gray-50 p-3 rounded-lg'>
        <h2 className='font-bold text-xl'>Ksh. {car.price}</h2>
        <h2 className='text-blue-500 text-sm flex gap-2 items-center hover:text-blue-600'>
          View Details <MdOutlineOpenInNew />
        </h2>
        </div>
        </div>
    </div>
  )
}

export default CarItem

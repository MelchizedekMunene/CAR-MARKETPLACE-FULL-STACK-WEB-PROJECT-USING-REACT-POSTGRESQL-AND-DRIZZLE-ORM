import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


function DropdownField({item,handleInputChange}) {
  return (
    <div>
        <Select onValueChange={(value)=>handleInputChange(item?.name,value)}
           required={item?.required}>
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item?.label} />
        </SelectTrigger>
        <SelectContent>
            {item.options.map((option,index)=> (
              <SelectItem value={option} key={index} >{option}</SelectItem>
            ))}
        </SelectContent>
        </Select>
    </div>
  )
}

export default DropdownField
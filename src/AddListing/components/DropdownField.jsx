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
  import { Textarea } from "@/components/ui/textarea"


function DropdownField({item}) {
  return (
    <div>
        <Select>
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
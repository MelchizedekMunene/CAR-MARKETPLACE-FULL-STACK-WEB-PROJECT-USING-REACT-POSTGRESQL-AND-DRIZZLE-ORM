import Header from '@/components/Header'
import React from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@radix-ui/react-select'
import { Checkbox } from "@/components/ui/checkbox"
import features from './../Shared/features.json'

function AddListing() {
  return (
    <div>
     <Header/>
     <div className='px-4 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>
        <form className='p-6 md:p-10 border rounded-xl mt-10'>
          {/*Car details*/}
          <div>
              <h2 className='font-medium text-xl mb-6'>Car Details</h2>
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 '>
                {carDetails.carDetails.map((item,index) => (
                  <div key={index} className='w-full'>
                    <label className='text-sm mb-2'>
                      {item?.label} 
                      {item.required && <span className='text-red-500 ml-1'>*</span>}
                    </label>
                    {item.fieldType === "text" || item.fieldType === "number"?<InputField item={item}/>
                      :item.fieldType== "dropdown"?<DropdownField item={item}/>
                      :item.fieldType== "textarea"?<Textarea item={item}/>
                      :null
                    }
                  </div>
                ))}
              </div>
          </div>

          <Separator className='my-6'/>
          {/*Features List*/}
          <div>
              <h2 className='font-medium text-xl my-6'>Features</h2>
              <div>
                {features.features.map((item,index)=> (
                  <div key={index}>
                    <Checkbox/> <h2>{item.label}</h2>
                  </div>
                ))}
              </div>
          </div>
          {/*Car Images*/}

        </form>
     </div>
    </div>
  )
}

export default AddListing
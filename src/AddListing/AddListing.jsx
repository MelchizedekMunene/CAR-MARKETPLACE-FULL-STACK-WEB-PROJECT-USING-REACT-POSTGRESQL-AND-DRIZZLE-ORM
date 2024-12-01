import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@radix-ui/react-select'
import { Checkbox } from "@/components/ui/checkbox"
import features from './../Shared/features.json'
import { Button } from '@/components/ui/button';
import TextAreaField from './components/TextAreaField'
//Imports for the database in the configs folder
import { CarListing, db } from '../../configs'



function AddListing() {

      const [formData, setFormData] = useState({
        listingDescription: '' // Explicitly set to empty string
      });

      const [featuresData,setfeaturesData]=useState({});

      //Used in saving user data form the form
      const handleInputChange = (name, value) => {
        console.log(`HANDLING INPUT CHANGE - Name: ${name}, Value: ${value}`);
          
        setFormData((prevData) => {
          const newData = {
            ...prevData,
            [name]: value || '' // Ensure it's never undefined
          };
            
        console.log('UPDATED FORM DATA:', newData);
          return newData;
        });
        }

        //Used in saving selected features list
      const handleFeatureChange=(name,value)=>{
        setfeaturesData((prevData)=>({
          ...prevData,
          [name]:value
        }))

        console.log(featuresData);
      }

      const onSubmit = async (e) => {
        e.preventDefault();
        
        // Explicit logging of entire form data
        console.log('FULL FORM DATA:', formData);
        
        // Check if listingDescription exists
        if (!formData.listingDescription) {
          console.error('CRITICAL: listingDescription is UNDEFINED/NULL');
          alert('Please enter a listing description');
          return;
        }
      
        // Trim and check length
        if (formData.listingDescription.trim() === '') {
          console.error('CRITICAL: listingDescription is an EMPTY STRING');
          alert('Listing description cannot be empty');
          return;
        }
      
        try {
          console.log('ATTEMPTING TO INSERT:', formData);
          const result = await db.insert(CarListing).values({
            ...formData,
            features:featuresData
          });
          
          if(result) {
            console.log("Data Saved Successfully!")
          }
        } catch(error) {
          console.error("FULL ERROR OBJECT:", error);
          console.error("Error Name:", error.name);
          console.error("Error Message:", error.message);
        }
      }


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
                    {item.fieldType === "text" || item.fieldType === "number"?
                    <InputField item={item} handleInputChange={handleInputChange}/>
                      :item.fieldType== "dropdown"?<DropdownField item={item} handleInputChange={handleInputChange}/>
                      :item.fieldType== "textarea"?<TextAreaField item={item} handleInputChange={handleInputChange}/>
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
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {features.features.map((item,index)=> (
                  <div key={index} className='flex gap-2 items-center'>
                    <Checkbox onCheckedChange={(value)=>handleFeatureChange(item?.name,value)}/> <h2>{item.label}</h2>
                  </div>
                ))}
              </div>
          </div>
          {/*Car Images*/}
          
          

          <div className='mt-10 flex justify-end'>
            <Button type="submit" onClick={(e)=>onSubmit(e)}>Submit</Button>
          </div>

        </form> 
     </div>
    </div>
  )
}

export default AddListing
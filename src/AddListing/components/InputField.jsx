import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({item}) {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4'>
      <Input type={item?.fieldType} name={item?.name} required={item?.required}/>
    </div>
  )
}

export default InputField

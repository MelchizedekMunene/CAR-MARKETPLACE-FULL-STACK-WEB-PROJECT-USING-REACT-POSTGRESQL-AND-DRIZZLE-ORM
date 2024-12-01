import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextAreaField({item, handleInputChange}) {
  return (
    <div>
      <Textarea 
        name={item?.name}
        onChange={(e) => {
          console.log(`TEXTAREA CHANGE - Name: ${item?.name}, Value: ${e.target.value}`);
          handleInputChange(item?.name, e.target.value);
        }}
        required={item?.required}
        placeholder={`Enter ${item?.label}`}
      />
    </div>
  )
}

export default TextAreaField

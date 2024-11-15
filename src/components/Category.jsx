import Data from '@/Shared/Data';
import React from 'react';

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>


      <div className='grid grid-cols-3 gsm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9'>
        {Data.Category.map((category,index) => (
            <div key={index} className=''>
                <img src={category.icon} alt={category.name} />
                <h2 className=''>{category.name}</h2>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
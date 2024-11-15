import Data from '@/Shared/Data';
import React from 'react';

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 px-20 gap-4'>
        {Data.Category.map((category, index) => (
          <div key={index} className='border rounded-3xl p-3 flex flex-col items-center hover:shadow-md cursor-pointer'>
            <img src={category.icon} alt={category.name} className='w-10 h-10' />
            <h2 className='mt-2'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
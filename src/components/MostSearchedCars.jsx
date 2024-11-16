import React from 'react'
import FakeData from '@/Shared/FakeData';
import CarItem from './CarItem';

function MostSearchedCars() {
  return (
    <div>
        <h2 className='font-bold text-3xl text-center my-16'>Most Searched Cars</h2>

        {FakeData.carList.map((car, index) => (
            <CarItem car={car} key={index} />
        ))}
    </div>
  )
}

export default MostSearchedCars

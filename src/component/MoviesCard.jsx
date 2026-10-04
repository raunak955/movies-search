import React from 'react'

const MoviesCard = ({title,rating,image}) => {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden w-60'>

      <img src={image} alt={title} className='w-full h-64 object-cover' />
     
      <div className='p-4'>      
      <h2 className='text-xl font-bold'>{title}</h2>

      <p className='text-gray-600'>
        {rating}</p>

        <button className='bg-gray-900 text-white px-4 py-2 rounded-lg mt-3'>
          View details</button>
      </div>
    </div>
  )
}

export default MoviesCard

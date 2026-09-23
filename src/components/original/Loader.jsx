import React from 'react'

const Loader = () => {
  return (
    <div className='absolute bg-gray-800/60 inset-0 z-50 flex justify-center items-center'>
        <div className='text-white  text-2xl font-extrabold'>Loading...</div>
    </div>
  )
}

export default Loader
import React from 'react'

const Card = ({data}) => {
  return (
    <div className='bg-white w-full rounded p-2 mb-8 '>
        <img src={data.image} alt=""   />
        <span className='text-black line-clamp-1'>{data.name}</span>
    </div>
  )
}

export default Card
import React from 'react'

const ToolTip = ({data}) => {
  return (
    <div className='text-white absolute top-14 z-10 text-sm'>{data}</div>
  )
}

export default ToolTip
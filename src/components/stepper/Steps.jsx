import React from 'react'

const Steps = ({stepperData}) => {
  return (
    <div className="stepper-container">
      {stepperData.map((data, index) => (
        <div className="steppers" key={index}>
           {index!=0 && <div className="connecting-line"></div>}
          <div className="stepper-box">{index + 1}</div>
          <span>{data.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Steps
import React from "react";

const Steps = ({ stepperData, currIndex }) => {
  return (
    <div className="stepper-container">
      {stepperData.map((data, index) => (
        <div className="steppers" key={index}>
          {index != 0 && <div className={`connecting-line color-transition ${currIndex>=index && "green" }`}></div>}
          <div
            className={`stepper-box color-transition ${currIndex>=index && "green" }`} >
            {index + 1}
          </div>
          <span>{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Steps;

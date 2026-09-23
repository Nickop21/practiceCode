import React, { useState } from "react";
import "./stepper.css";
import Steps from "./Steps";

const Stepper = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const stepperData = [
    {
      name: "personal info",
      checked: false,
    },
    {
      name: "account info",
      checked: false,
    },
    {
      name: "payment",
      checked: false,
    },
    {
      name: "confirmation",
      checked: false,
    },
    {
      name: "Review",
      checked: false,
    },
  ];
  function changeIndex(index) {
    if (stepperData.length > index && index >= 0) {
      setCurrIndex(index);
    }
  }

  return (
    <div className="container-step">
      <Steps stepperData={stepperData} currIndex={currIndex} />
      <button
        className="back button"
        onClick={() => changeIndex(currIndex - 1)}
      >
        Back
      </button>
      <button
        className="next button"
        onClick={() => changeIndex(currIndex + 1)}
      >
        Continue
      </button>
    </div>
  );
};

export default Stepper;

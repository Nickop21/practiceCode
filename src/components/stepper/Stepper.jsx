import React from "react";
import "./stepper.css";
import Steps from "./steps";

const Stepper = () => {
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
  return (
    <div className="container-step">
      <Steps stepperData={stepperData} />
      <button className="back button">Back</button>
      <button className="next button">Continue</button>
    </div>
  );
};

export default Stepper;

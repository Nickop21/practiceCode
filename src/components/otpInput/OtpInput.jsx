import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const OtpInput = () => {
  const inputSize = 7;
  const [inputArr, setInputArr] = useState(new Array(inputSize).fill(""));

  const Inputref = useRef([]);

  function onChangeOtpInput(e, index) {
    const val = e.target?.value;
    if (isNaN(val)) return;

    const newArr = [...inputArr];
    newArr[index] = val.slice(-1);
    setInputArr(newArr);

    val.trim() && Inputref.current[index + 1]?.focus();
  }

  function handleKeyDown(e, index) {
    const key = e.code;
    console.log(e.target.value.trim() == "");

    if (key == "Backspace" && !e.target.value) {
      Inputref.current[index - 1]?.focus();
    }
    if (key == "ArrowRight" && e.target.value.trim() !== "")
      Inputref.current[index + 1]?.focus();
    if (key == "ArrowLeft" && e.target.value.trim() !== "")
      Inputref.current[index - 1]?.focus();
  }
  useEffect(() => {
    Inputref.current[0]?.focus();
  }, []);

  return (
    <div className="otp-container ">
      <div className="heading">Validate OTP</div>
      <div className="otp-parent">
        {inputArr?.map((input, index) => (
          <input
            className={`otp-input ${inputArr[index] != "" ? "filled" : ""}`}
            ref={(input) => (Inputref.current[index] = input)}
            key={index}
            value={inputArr[index]}
            onChange={(e) => onChangeOtpInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OtpInput;

import React, { useState } from "react";

const OptionCard = ({ optionData, correctOption, ScoreHandler ,nextHandler}) => {
  const [click, setClick] = useState(false);

  const isCorrect = optionData === correctOption;

  const handleClick = () => {
    // Prevent clicking multiple times
    if (click)  return
      

    setClick(true);

    if (isCorrect) {
      ScoreHandler();
    }
    nextHandler()

  };

  return (
    <button
      className={`
        w-full md:w-[48%]
        flex justify-between items-center
        p-4 rounded-4xl text-white
        border-2 border-blue-950
        ${
          click
            ? isCorrect
              ? "bg-green-400"
              : "bg-red-400"
            : "bg-gray-900"
        }
      `}
      onClick={handleClick}
    >
      <span>{optionData}</span>

      <span
        className={`
          rounded-full w-8 h-8
          ${
            click
              ? isCorrect
                ? "bg-green-600"
                : "bg-red-700"
              : ""
          }
        `}
      />
    </button>
  );
};

export default OptionCard;
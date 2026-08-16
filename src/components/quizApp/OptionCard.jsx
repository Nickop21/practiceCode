import React from "react";

const OptionCard = ({ optionData }) => {
  return (
    <button className="w-full md:w-[48%] bg-gray-900 flex justify-between items-center p-4 rounded-4xl text-white border-2 border-blue-950 ">
      <span>{optionData}</span>{" "}
      <span className="bg-green-500 rounded-full w-8 h-8"></span>
    </button>
  );
};

export default OptionCard;

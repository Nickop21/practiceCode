import React, { useEffect, useState } from "react";

const Progress = ({progress}) => {
  const [animateProgrees, setAnimateProgress] = useState(progress);
  useEffect(()=>{
    setAnimateProgress(progress)

  },[progress])
  


  return (
    <div className="w-full md:w-2/4 flex justify-between items-center  flex-row">
      <div className="bg-blue-950 p-2 rounded-xl font-semibold text-white ">
        👱1 of 10{" "}
      </div>
      <div className="w-[35%] md:w-[60%] relative bg-amber-50   h-3 overflow-hidden rounded-2xl  ease-in-out transition-all">
        <div
          className="bg-green-300 absolute inset-0  "
          style={{ transform: `translateX(${animateProgrees - 100}%)` }}
          // style={{ width: `${animateProgrees}%` }}

          role="progressbar"
          aria-valuenow={animateProgrees}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
      <div className="bg-amber-700 p-2 rounded-xl font-semibold ">
        📃1 of 10{" "}
      </div>
    </div>
  );
};

export default Progress;

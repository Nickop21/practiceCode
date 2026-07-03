import React, { useEffect, useState } from "react";
import "./progress.css";

const Progress = ({ percentage }) => {
  const [animateProgrees, setAnimateProgress] = useState(0);
  if (percentage > 100) {
    percentage=100
  }
  useEffect(() => {
    const time = setTimeout(() => {
      setAnimateProgress(percentage);
    }, 500);

    return()=> clearInterval(time);
  }, [percentage]);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-inner"  // widh repaint compo again and again thats why transform no gitter effect
          style={{ transform: `translateX(${animateProgrees - 100}%)` }}
          role="progressbar"
          aria-valuenow={animateProgrees}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* {animateProgres}% */}
        </div>
        <p className=" absolute top-2 right-1/2 text-red-900 font-extrabold ">
          {animateProgrees}%
        </p>
      </div>
    </div>
  );
};

export default Progress;

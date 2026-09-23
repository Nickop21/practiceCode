import React from "react";
import Progress from "./Progress";

const ProgressBar = () => {
  const percentage = [2, 10, 40, 80,50,200];
  return (
    <div>
      {percentage.map((per) => (
        <div className="mt-5" key={per}>
          <Progress percentage={per} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

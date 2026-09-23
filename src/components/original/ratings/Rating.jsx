import React, { useRef, useState } from "react";
import "./rating.css";

const Rating = () => {
  const [currStar, setCurrStar] = useState(-1);
  const [clicked, setClicked] = useState(false);
  const ratingNumber = 7;
  function mouseEnterHandler(e, index) {
    setClicked(false);
    setCurrStar(index);
  }

  function mouseLeaveHandler(e, index) {
    !clicked && setCurrStar(-2);
  }
  function changeRatingsHandler(index) {
    setClicked(true);
    setCurrStar(index);
  }

  return (
    <div className="star-container">
      <div className="flex justify-center">
        {Array.from({ length: ratingNumber }, (_, index) => (
          <span
            className={`star ${index <= currStar ? "check" : "uncheck"}`}
            onMouseEnter={(e) => mouseEnterHandler(e, index)}
            onMouseLeave={(e) => mouseLeaveHandler(e, index)}
            onClick={() => changeRatingsHandler(index)}
          >
            &#9733;
          </span>
        ))}
      </div>
      {clicked && (
        <div className="text-white text-2xl font-extrabold">
          {currStar} / {ratingNumber}
        </div>
      )}
    </div>
  );
};

export default Rating;

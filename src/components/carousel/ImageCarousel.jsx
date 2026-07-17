import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";
import imagesData from "../../../utils/images.json";

const ImageCarousel = () => {
  const [currImage, setCurrImage] = useState(0);

  const imgref = useRef(null);
  function nextImage() {
    setCurrImage((prev) => {
      if (prev == imagesData.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }

  function prevImage() {
    setCurrImage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      else return imagesData.length-1
    });
  }

  useEffect(() => {
    imgref.current = setInterval(nextImage, 1000);

    return () => {
      clearInterval(imgref.current);
    };
  }, []);

  return (
    <div
      className="image-container"
      onMouseEnter={() => clearInterval(imgref.current)}
      onMouseLeave={() => (imgref.current = setInterval(nextImage, 1000))}
    >
      <img src={imagesData[currImage]} alt="" className="crousal-img" />

      <button className="left-arrow arrow" onClick={() => prevImage()}>
        {"<"}
      </button>
      <button className="right-arrow arrow" onClick={() => nextImage()}>
        {">"}
      </button>
    </div>
  );
};

export default ImageCarousel;

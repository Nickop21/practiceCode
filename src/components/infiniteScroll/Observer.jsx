import React, { useEffect } from "react";

const Observer = ({ Imagesdata, setPageno ,loading}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0].isIntersecting) {            
          observer.unobserve(lastImage);
          setPageno((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );

    const lastImage = document.querySelector(".images-url:last-child");

    if (!lastImage) {
      return;
    }
    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [Imagesdata]);

  return (
    <div>
      <div className="image-card">
        {Imagesdata?.map((data) => (
          <img
            className="images-url"
            src={data?.download_url}
            alt={data?.author}
            key={data?.id}
          />
        ))}
      </div>
      {!loading && (
  <div className="loader">
    Loading...
  </div>
)}
    </div>
  );
};

export default Observer;

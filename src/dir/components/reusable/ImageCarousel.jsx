import React, { useState, useEffect, Fragment } from "react";
import { ADS_FIVE, ADS_FOUR } from "./Images";

const images = [ADS_FIVE, ADS_FOUR, ADS_FIVE];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
      <Fragment>
        <a href="#"  rel="noopener noreferrer" alt="ads_kmanalysis" className="relative">
<div className="relative w-full h-full flex">

      {images.map((imageUrl, i) => (
        <img
          key={`${imageUrl}  ${i + 1}`}
          src={imageUrl}
          alt={`Image ${i + 1}`}
          className={`h-full w-full absolute top-0 left-0 ${
            index === i ? "opacity-100  " : "  opacity-0"
          } transition-opacity duration-1000`}
        />
      ))}
</div>
        </a>
      </Fragment>
  );
};

export default ImageCarousel;

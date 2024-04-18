import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as images from '../reusable/Images'

export default function MarqueeImages() {
  const settings = {
    infinite: true,
    speed: 10000,
    autoplaySpeed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    useCSS: true,
    cssEase: "linear",
    className:"relative overflow-hidden w-full flex justify-around justify-items-stretch   items-center"
  };

  return (
    <div className="w-full flex relative py-4">
      <Slider
        {...settings}
        
      >
        <div className="w-full flex justify-center items-center">
          <img src={images.KMASlide} className="w-24 md:w-32 opacity-20" alt='BF logo'/>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={images.KMASlide} className="w-24 md:w-32  opacity-20" alt='BF logo'/>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={images.KMASlide} className="w-24 md:w-32  opacity-20 " alt='BF logo'/>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={images.KMASlide} className="w-24 md:w-32  opacity-20" alt='BF logo'/>
        </div>
      </Slider>
    </div>
  );
}

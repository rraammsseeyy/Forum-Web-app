import React from "react";
import { Link } from "react-router-dom";

export const CardPrediction = ({ styles, option, linkTo, text, bg_Color , type}) => {
  return (
    <div
      className={`group overflow-hidden relative w-full  px-4 md:w-48 h-10 md:h-32    `}
    >
       {/* <div className="absolute bg-red-500 h-full w-full" /> */}
       <Link
           to={`/prediction-pick/${type}`} className="w-full md:w-auto h-full md:h-auto"
          >
      <div style={styles} className={`w-full ${bg_Color} h-full relative rounded-lg  bg-opacity-50`}>

      <div className="group-hover: b lur-[2px] transition-all duration-200 ease-out   bg-opacity-90 h-full w-full">
        <div className="flex justify-center items-center h-full p-3">
          <div className="uppercase text-xl text-clip text-white md:text-xl text-center font-semibold">
            {option}
          </div>
        </div>
        {/* <div className="absolute top-0 right-0 bg-blue-600 bg-opacity-40 text-white px-2 rounded-b ">
          Prediction
        </div> */}
      </div>

      {/* <div className="w-full inset-0 rounded-lg opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out absolute bg-black bg-opacity-60 flex justify-center items-center h-full   cursor-pointer  md:p-3">
        <div className="flex-wrap w-full h-full md:h-auto md:w-auto">
          <div className="hidden md:inline-block text-center text-xs md:text-sm text-white font-light pb-3">
            {text}
            
          </div>
          <div className="flex justify-center w-full items-center h-full md:h-auto md:w-auto">
            <Link
           to={`/prediction-pick/${type}`} className="w-full md:w-auto h-full md:h-auto"
          >

              <div className="text-sm w-full md:text-base h-full font-bold md:font-normal p-2 md:px-3 md:py-0.5 text-center rounded md:rounded-full bg-blue-600 text-white">
                Open
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      </div>
      </Link>
    </div>
  );
};

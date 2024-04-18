import React, { Fragment } from "react";
import TopNav from "../../components/reusable/TopNav";
import Landing from "./Landing";




export const Hero = ({title}) => {
  return (
    <Fragment>
      <div className="relative w-full   bg px-2 md:px-24 py-0 md:py-12 fl ex h-72 md:h-96">
        <div className="absolute inset-0">
          <TopNav classColor="  py-2" />
        </div>
        <div className=" w-full md:w-1/3 text-2xl md:text-5xl flex justify-center items-center h-full text-white font-extrabold md:justify-start text">
          {title}
          
        
        </div>

      </div>
    </Fragment>
  );
};

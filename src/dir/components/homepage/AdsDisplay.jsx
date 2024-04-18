import React from "react";
import { ADS_FOUR, ADS_ONE, ADS_TWO } from "../reusable/Images";
import ImageCarousel from "../reusable/ImageCarousel";


const AdsDisplay = () => {
  return (
    
    <div className="w-auto md:w-full h-fit px-2 ">
        <img className=""  src={ADS_FOUR} alt="ads" />
        {/* <ImageCarousel /> */}
    </div>
    
  )
}

export default AdsDisplay

// export default function AdsDisplay() {
//   return (
//     <div className="space-y-12 md:space-y-0 w-full px-2 md:px-6 flex-wrap md:flex justify-between items-center md:space-x-">
//       <div className="w-full md:w-full h-auto px-2">
//           <img src={ADS_FOUR} alt="ads" className="h-full" />
//           {/* <ImageCarousel /> */}
//       </div>
//       {/*
//       <div className="w-full md:w-1/2 h-auto px-2">
//         <a href="#" alt="ads_kmanalysis" rel="noopener noreferrer">
//           <img src={ADS_TWO} alt="ads" className="h-[150px]" />
//         </a>
//       </div> 
//       */}
//     </div>
//   );
// }

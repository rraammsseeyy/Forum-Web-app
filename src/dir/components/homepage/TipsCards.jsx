import React from "react";
import { Link } from "react-router-dom";
import { OneExbet, ZEBET } from "../reusable/Images";
import axios from "axios";

export const TipsCards = ({
  tip,
  result,
  home_team,
  away_team,
  league,
  time,
  uid,
  id
}) => {
  axios.defaults.withCredentials = true;


  return (
    <div className="my-4 w-full md:w-1/2 flex-wrap md:flex justify-center h-auto md:px-6 md:space-x-12 px-4  ">

      <div className=" bg-[#1d329e] shadow-xl   shadow-white relative w-full md:w-full flex-wrap justify-center  items-center rounded-xl px-3 py-4 md:pt-6 md:px-6  cursor-pointer text-white">
         <Link
         to={`${import.meta.env.VITE_REACT_APP_LINK_TEST}/game-preview/${uid}/${id}`} 
          className="flex pb-4 justify-center space-y-5 items-center w-full "
        >
          <div className="w-1/5 flex-wrap justify-center pt-2 items-center ">
            <div className=" py-3 font-semibold">Time</div>
            <div className="text-sm md:text-base pt-3">{time}</div>
          </div>

          <div className=" w-3/5 flex-wrap justify-center items-center ">
            <div className=" w-full flex justify-center ">
              <div className="w-32 md:w-[14rem] break-words uppercase text-xs text-center md:text-sm   rounded-full   bg-gradient-to-l px-2 md:px-6 py-1 text-white">
                {league} 
              </div>
            </div>
            <div className="flex justify-around  space-x-4 items-center  font-semibold pt-3">
              <div className="capitalize w-2/4 flex justify-center items-center text-center">
                {home_team}{" "}
              </div>
              <div className="w-1/4 flex justify-center items-center text-sm font-bold">
                vs
              </div>
              <div className="capitalize w-2/4 flex justify-center items-center text-center">
                {away_team}{" "}
              </div>
            </div>

            <div className="text-center text-xl font-bold">{result}</div>
          </div>
          

          <div className="w-1/5 flex-wrap justify-end items-end ">
            <div className="pb-3 text-center font-semibold">Tip</div>
            <div className=" flex justify-center text-sm md:text-base pt-3 ">
              {tip}{" "}
            </div>
          </div>
        </Link>
        {/* <div className=" divide-x-2 w-full rounded-b  flex justify-start items-center py-6">
          <div className=" w-1/2 flex justify-center items-center">
            <a  href="#" rel="noopener noreferrer" className="w-full flex justify-center"  >
              <img
                src={ZEBET}
                className="w-20 bg-black/70 rounded-sm"
                alt="zebet logo"
              />
            </a>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <a href="#" rel="noopener noreferrer" className="w-full flex justify-center"  >
              <img src={OneExbet} className="w-12" alt="1xbet logo" />
             
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

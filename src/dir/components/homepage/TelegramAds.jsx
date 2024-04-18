import React from "react";
import { motion } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

export const TelegramAds = () => {
  return (
    <div className="w-full flex-wrap px-6 h-auto    flex items-center justify-center bold text-3xl text-[#182538]">
      <div className=" w-full flex flex-wrap  h-full  bg-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg animate-pulse">
        <div className="  w-full  flex flex-wrap items-center  justify-center text-xl md:text-3xl    ">
          <a href="https://t.me/+Kwxcop7AGW9hNjRk">
            <FaTelegram className="  text-white    "   />
          </a>
          <div className=" ">
            <a
              href="https://t.me/+Kwxcop7AGW9hNjRk"
              className="  px-2 py-1 rounded  font-light yellow"
            >
              Join our telegram channel.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

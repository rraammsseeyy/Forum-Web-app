import React, { useState } from "react";
import { motion } from "framer-motion";

export const CookiesKma = ({setcookie, closecookie}) => {

  return (
    <motion.div
      animate={{ y: 1 }}
      transition={{ delay: 0.5 }}
      initial={{ y: 150 }}
      style={{zIndex:99}}
      className="fixed w-full rounded-md h-auto bg-[#121212] text-white   bottom-4 left-0 z-99 border-y border-white"
    >
      <div className="p-4 flex w-full light font-light">
      KMANALYSIS  uses cookies to enhance your browsing experience. By continuing to use our site, you accept our use of cookies.
      </div>
      <div className="flex justify-between">
        <div className="hidden md:inline-block md:w-1/2"></div>
        <div className="w-full md:w-1/2 flex justify-between pb-4 px-4 ">
          <span onClick={closecookie} className="rounded-md border border-blue-700 p-1 px-3 cursor-pointer">
            Close
          </span>
          <span onClick={setcookie} className="rounded-md bg-blue p-1 px-3 bold cursor-pointer">
            I accept
          </span>
        </div>
      </div>
    </motion.div>
  );
};

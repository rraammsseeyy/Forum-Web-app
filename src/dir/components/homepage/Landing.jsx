import { Fragment } from "react";
import { HOME } from "../reusable/Images";
import TopNav from "../reusable/TopNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Fragment>
      <div className=" w-full absolute pt-5   ">
        <TopNav />
      </div>
      <div
        style={{ zIndex: 80 }}
        className="bg overflow-hidden bg-inherit w-full flex md:px-12 overflow-x-hidden"
      >
        <div
          className="overflow-hidden
relative  w-full mt-12 md:mt-4 justify-center items-center content-center flex  lg:pl-8 md:w-1/2  "
        >
          <div className="overflow-hidden w-full flex-wrap justify-begin  items-start pt-12 md:pt-0 space-y-4 md:space-y-12 md:space-y-18 px-4 md:px-0 text-center md:text-left text-white ">
            <div
              className="relativeoverflow-hidden "
              style={{ zIndex: 1, opacity: 1 }}
            ></div>
            <motion.div
              animate={{ x: 1, opacity: 1 }}
              transition={{ delay: 0.1, ease: "easeIn" }}
              initial={{ x: -150, opacity: 0 }}
              className=" text-white w-full flex justify-center md:justify-start items-center text-4xl md:text-5xl  lg:text-7xl font-bold bold   md:pt-[-8] "
            >
              Blockchain Forum
            </motion.div>
            <motion.div
              animate={{ x: 1, opacity: 1 }}
              transition={{ delay: 0.3, ease: "easeIn" }}
              initial={{ x: -100, opacity: 0 }}
              className="text-white w-full   text-base md:text-xl   font-light tracking-wide leading-[2em]"
            >
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, maxime velit reprehenderit impedit necessitatibus fugiat excepturi laboriosam laudantium ea, illo porro quam, ex saepe illum accusamus aliquam blanditiis sit consequatur.
            </motion.div>
            <div className="flex-row space-x-4 pb-3 md:pb-8">
              <motion.div
                animate={{ x: 1, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeIn" }}
                initial={{ x: -260, opacity: 0 }}
                className="inline-flex rounded-md   pt-2"
              >
                <Link to="/signup">
                  <span
                    alt="Blockchain Image"
                    className="bg-white inline-flex items-center justify-center px-6 py-4 border border-transparent text-base rounded-full blue  focus:outline-none focus:shadow-outline shadow-md shadow-blue-600/50  transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 font-bold"
                  >
                    Get Started
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
          {/* <div className="hidden md:block bg-red-50 lg:w-1/5">
          <div></div>
          </div> */}
        </div>

        {/* small screeen screen */}

        <div className=" w-full mt-12 md:w-1/2 flex   hidden md:inline-block lg:hidden lg:mr-6 ">
          <div className="flex h-screen justify-center items-center ">
            <motion.img
              src={HOME}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ scale: 1 }}
              alt="Blockchain Image"
              className="w-2/4 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded-xl"
            />
          </div>
        </div>

        {/* large screen */}
        <div className=" w-full mt-12 md:w-1/2 flex   hidden md:hidden lg:inline-block lg:mr-6 ">
          <div className="flex h-screen justify-center items-center ">
            <motion.img
              src={HOME}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ scale: 1 }}
              alt="Blockchain Image"
              className="w-full height transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 rounded-xl   "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}


import React, { useEffect } from "react";
import Footer from "../../components/reusable/Footer";
import TopNav from "../../components/reusable/TopNav";
import { Link } from "react-router-dom";
// import { userImg } from "../../components/reusable/Images";

export default function PredictionPreview({}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full">
      <TopNav classColor="bg py-2" />

      <div className="my-12 w-full flex-wrap md:flex justify-center items-center h-full text-white/80"></div>
      <div className="flex-wrap justify-center items-center px-6 md:px-32   space-y-12">
        {/* intro title  */}
        <span className="-pb-4 text-xl font-semibold">Match Preview</span>
        <div className="border rounded-md p-4">
          <div className="flex-wrap flex justify-center ">
            <Link
              to="/"
              className="flex pb-8 justify-center space-y-6 items-center w-full "
            >
              <div className="w-1/5 flex-wrap justify-center items-center ">
                <div className=" py-6 font-semibold">Time</div>
                <div className="text-sm md:text-base pt-6">time</div>
              </div>

              <div className=" w-3/5 flex-wrap justify-center items-center ">
                <div className=" w-full flex justify-center ">
                  <div className="capitalize w-auto rounded-full bg-blue px-2 md:px-6 py-1 text-white">
                    league
                  </div>
                </div>
                <div className="flex justify-around  space-x-4 items-center  font-semibold pt-6">
                  <div className="capitalize w-2/4 flex-wrap flex justify-center items-center text-center text-xs md:text-sm">
                    <img
                      // src={userImg}
                      className="text-xs font-light w-12 rounded-full h-12"
                      alt="home_team"
                    />{" "}
                    home_team{" "}
                  </div>
                  <div className="w-1/4 flex justify-center items-center text-sm font-bold">
                    vs
                  </div>
                  <div className="capitalize w-2/4 flex-wrap flex justify-center items-center text-center text-xs md:text-sm">
                    <img
                      // src={userImg}
                      alt="home_team"
                      className="md:hidden text-xs font-light w-12 rounded-full h-12"
                    />
                    away_team{" "}
                    <img
                      // src={userImg}
                      alt="home_team"
                      className="hidden md:inline-block text-xs font-light w-12 rounded-full h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/5 flex-wrap justify-end items-end ">
                <div className="pb-6 text-center font-semibold">Tip</div>
                <div className=" flex justify-center text-sm md:text-base pt-6 ">
                  tip{" "}
                </div>
              </div>
            </Link>
            <div className="w-full rounded-b  flex justify-center items-center py-6">
              Result
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

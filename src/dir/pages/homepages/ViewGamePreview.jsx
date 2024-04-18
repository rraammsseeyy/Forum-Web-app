import React, { useEffect } from "react";
import Footer from "../../components/reusable/Footer";
import TopNav from "../../components/reusable/TopNav";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { TelegramAds } from "../../components/homepage/TelegramAds";
import Loader from "../../components/reusable/Loader";
import { useQuery } from "react-query";
import SkeletonLoader from "../../components/reusable/SkeletonLoader";

export default function ViewGamePreview({}) {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { uid, id } = useParams();

  const dataOneAPI = `${
    import.meta.env.VITE_REACT_APP_BLOG
  }/expert-tips/${uid}/${id}`;

  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(["expert-tips-today"], () =>
    axios.get(dataOneAPI).then((res) => {
      return res.data;
    })
  );

 
  return (
    <div className="w-full">
      <TopNav classColor="bg py-2" />

      <div className="my-6 w-full flex-wrap md:flex justify-center items-center h-full text-white/80"></div>
      <div className="flex-wrap justify-center items-center px-6 md:px-32   space-y-3">
        {/* intro title  */}
        <span className="-pb-4 text-xl font-semibold">Match Preview</span>
        <div className="border rounded-md p-4">
        {loadingPost && <SkeletonLoader />}

          <div className="flex-wrap flex justify-center ">
            <div className="flex pb-8 justify-center space-y-6 items-center w-full ">
              <div className="w-1/5 flex-wrap justify-center items-center ">
                <div className=" py-6 font-semibold">Time</div>
                <div className="text-sm md:text-base pt-6">
                  {postData && postData[0].match_time}
                </div>
              </div>

              <div className=" w-3/5 flex-wrap justify-center items-center ">
                <div className=" w-full flex justify-center ">
                  <div className="uppercase text-[0.5rem] md:text-sm text-center w-32 md:w-auto rounded-full bg-blue px-2 md:px-6 py-1 text-white">
                    {postData && postData[0].league_sport}
                  </div>
                </div>
                <div className="flex justify-around  space-x-4 items-center  font-semibold pt-6">
                  <div className="capitalize w-2/4 flex-wrap flex justify-center items-center text-center text-xs md:text-sm">
                    <img
                      src={postData && `${import.meta.env.VITE_REACT_APP_MAIN_IMAGE}/${
                        postData[0].home_img
                      }`}
                      className="text-xs font-light w-12 rounded-full h-12 md:mr-2"
                      alt="home_team"
                    />
                    {postData && postData[0].home_team}
                  </div>
                  <div className="w-1/4 flex justify-center items-center text-sm font-bold">
                    vs
                  </div>
                  <div className="capitalize w-2/4 flex-wrap flex justify-center items-center text-center text-xs md:text-sm">
                    <img
                      src={postData && `${import.meta.env.VITE_REACT_APP_MAIN_IMAGE}/${
                        postData[0].away_img
                      }`}
                      alt="away_team"
                      className="md:hidden  text-xs font-light w-12 rounded-full h-12"
                    />
                    {postData && postData[0].away_team}
                    <img
                      src={postData && `${import.meta.env.VITE_REACT_APP_MAIN_IMAGE}/${
                        postData[0].away_img
                      }`}
                      alt="away_team"
                      className="hidden md:ml-2 md:inline-block text-xs font-light w-12 rounded-full h-12"
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/5 flex-wrap justify-end items-end ">
                <div className="pb-6 text-center font-semibold">Tip</div>
                <div className=" flex justify-center text-sm md:text-base pt-6 ">
                  {postData && postData[0].tip}
                </div>
              </div>
            </div>
            <div className="w-full rounded-b  flex justify-center items-center ">
              {/* 'Result' */}
              {postData && postData[0].match_day}
            </div>
            <div className=" rounded-b text-sm font-light flex-wrap text-center w-full pt-6">
              {postData && postData[0].result === '-' ?  null :  <div>Result</div> }
              {postData && postData[0].result ? postData[0].result  : null}
            </div>
          </div>
        </div>
      </div>
      <TelegramAds />
<div className="mt-4" />
      <Footer />
    </div>
  );
}

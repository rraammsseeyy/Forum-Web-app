import React, { Fragment, useEffect } from "react";
import AsideUser from "../reusable/AsideUser";
import { GiRank3 } from "react-icons/gi";
import * as images from "../reusable/Images";
import TopNav from "../reusable/TopNav";
import axios from "axios";
import useAuth from "../../context/userAuth/useAuth";
import BottomNav from "../reusable/BottomNav";
import Loader from "../reusable/Loader";
import { useQuery } from "react-query";
import { FaUserCircle } from "react-icons/fa";

export default function Ranking({ profileAvatar }) {
  const { id } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { data, isError, isLoading } = useQuery(
    ["leaderboard"],
    async () =>
      await axios.get(`${import.meta.env.VITE_REACT_APP_USER}/leaderboard`)
  );

  if (isLoading) { 
    return <Loader />;
  }
 

  const handleFollows = async (e) => {
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_USER}/follows/${e}`, {
          follower_id: await id,
        })
        .then(async (result) => {
          if (result.status === 200) {
            
          }
          
        });
    } catch (err) {
      console.log('err');
    }
  };

  return (
    <div className="w-full">
      <TopNav classColor="bg py-2" />
      <div className="w-full flex  pt-3  ">
        <div className="hidden md:inline-block md:w-[5.25%] 100vh  mr-2"></div>
        <div className="flex-1 text-2xl md:text-3xl font-bold flex items-center bg-blue-100/10 ">
          <div className="text-2xl md:text-3xl font-bold flex items-center blue p-3  text-white">
            <GiRank3 className="blue " /> {"  "}
            <span className="pl-2">Leader Board</span>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        {id ? <aside className="hidden md:inline-block w-[5%]  ">
          <AsideUser />
        </aside> : null}
        <div className="w-full md:w-[60%]  px-4 ">
          <div className="max-w-screen-xl px-2 mx-auto mt-8">
            <table className="w-full text-xs md:text-base">
              <thead>
                <tr className="border-b border-gray-600">
                  <th colSpan={5} className="text-left p-1 pb-2">
                    Ranking
                  </th>
                </tr>
              </thead>
              <tbody className="pb-4">
                {data
                  ? data.data.slice(0, 10).map((item, index) => (
                      <tr
                        key={item.id}
                        className="bg-gray-200 border-b bg-opacity-30 space-y-4"
                      >
                        <td className="text-left p-1 ">{++index} </td>
                        <td className="text-left p-1  flex items-center justify-start  ">
                          <div className="  ">
                            {item.profile_picture &&
                            item.profile_picture.length > 2 ? (
                              <img
                                src={`${
                                  import.meta.env.VITE_REACT_APP_MAIN_HOST
                                }/${item.profile_picture}`}
                                alt="avatar"
                                className="text-xs inline border-double border-4 border-gray-400 transform sm:transform-gpu md:transform-none  rounded-full h-12 w-12  "
                              />
                            ) : (
                              <FaUserCircle className="h-12 w-12 text-[#090abb]/20" />
                            )}
                          </div>
                          <div className="pl-2 text-xs md:text-base font-light capitalize">
                            @{item.username}
                          </div>
                        </td>
                        <td className="text-center p-1 md:pl-12 flex-wrap text-xs font-light">
                          <div className="font-bold md:text-base">
                            {item.kmp_points}
                          </div>
                          <div>KMP</div>
                        </td>

                        <td className="text-center p-1 flex-wrap text-xs font-light">
                          <div
                            onClick={() =>
                              handleFollows(item.id === id ? null : item.id)
                            }
                            className="p-3 text-center bg text-white transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110  rounded-3xl hover:ease-linear cursor-pointer "
                          >
                            Follow
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            <BannerAds />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

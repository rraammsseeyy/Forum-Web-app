import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import Footer from "../../components/reusable/Footer";
import TopNav from "../../components/reusable/TopNav";

import axios from "axios";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/reusable/Loader";
import { TelegramAds } from "../../components/homepage/TelegramAds";
import { MdCancel } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import SkeletonLoader from "../../components/reusable/SkeletonLoader";

export default function Tipfluencers({ match_type }) {
  axios.defaults.withCredentials = true;
  const { type } = useParams();

  const [today, setToday] = useState(true);
  const [yesterday, setYesterday] = useState(false);
  const [tommorow, setTomorrow] = useState(false);

  const dataOneAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/tipfluencers`;
  const dataTwoAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/tipfluencers/yesterday`;
  const dataThreeAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/tipfluencers/tomorrow`;

  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(["today"], () =>
    axios.get(dataOneAPI).then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: loadingOldPost,
    error: errorOldPost,
    data: postOldData,
  } = useQuery(["old-posts"], () =>
    axios.get(dataTwoAPI).then((res) => res.data)
  );

  const {
    isLoading: loadingUpcomingPost,
    error: errorUpcomingPost,
    data: postUpcomingData,
  } = useQuery(["upcoming-posts"], () =>
    axios.get(dataThreeAPI).then((res) => res.data)
  );

  const showOldMatch = () => {
    setToday(false);
    setYesterday(true);
    setTomorrow(false);
  };

  const showTomorrow = () => {
    setToday(false);
    setYesterday(false);
    setTomorrow(true);
  };

  const showToday = () => {
    setToday(true);
    setYesterday(false);
    setTomorrow(false);
  };

  return (
    <div className="w-full">
      <TopNav classColor="bg py-2" />

      <div className="my-3 w-full flex-wrap md:flex justify-center items-center h-full text-white/80"></div>

      {loadingOldPost ? (
        <SkeletonLoader />
      ) : (
        <div className="mb-12  flex-wrap justify-center items-center px-1.5 md:px-32    ">
          <div className="relative overflow-x-auto">
            <div className="text-xl font-bold">   Tipfluencers Prediction</div>
<div className="text-sm font-light mt-4 mb-8"> Find various tips and analysis from our various Tipfluencers. Feel free to engage with your favourite Tipfluencers. You can check the leaderboard page to see the best performing tipsters and know who to follow</div>
            <div className="w-full mb-3 cursor-pointer mt-4 flex space-x-4 divide-x-2">
              <div
                onClick={showOldMatch}
                className={
                  yesterday
                    ? "text-xl  bg text-white rounded-md px-3"
                    : "text-xl blue opacity-40  pl-3"
                }
              >
                Yesterday
              </div>
              <div
                onClick={showToday}
                className={
                  today
                    ? "text-xl  bg text-white rounded-md px-3"
                    : "text-xl blue opacity-40  pl-3"
                }
              >
                Today
              </div>
              <div
                onClick={showTomorrow}
                className={
                  tommorow
                    ? "text-xl  bg text-white rounded-md px-3"
                    : "text-xl blue opacity-40  pl-3"
                }
              >
                Tomorrow
              </div>
            </div>

            <table className="w-full text-sm text-left text-black overflow-hidden  ">
              <thead className="text-xs  uppercase bg-blue text-white ">
                <tr className=" border-blue-600 text-[0.50rem] md:text-base">
                <th scope="col" className="px-1 md:px-6 py-3 text-center">
                League

                  </th>
                  <th scope="col" className="px-1 text-center md:px-6 py-3">
                    Match
                  </th>
                  <th scope="col" className="px-1 text-center md:px-6 py-3">
                    Tip
                  </th>
                  <th scope="col" className="px-1 text-center md:px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-1 text-center md:px-6 py-3">
                    Match Time
                  </th>
                  <th scope="col" className="px-1 text-center md:px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {today ? (
                  postData ? (
                    postData.map((datasa) => (
                      <tr
                        key={datasa.id}
                        className="bg-white border-b text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                      >
                         <td className="px-2 md:px-3  text-center  py-4 uppercase">
                          {datasa.league}
                        </td>
                        <th
                          scope="row"
                          className="capitalize px-1 flex-wrap font-light  py-4  text-center text-gray-900 whitespace-normal md:whitespace-nowrap  "
                        >
                          {datasa.home_team}{" "}
                          <span className="lowercase px-2 font-bold"> vs</span>{" "}
                          {datasa.away_team}
                        </th>
                        <td className="px-1 text-center py-4 uppercase">
                          {datasa.prediction}
                        </td>
                        <td className="px-1 text-center cursor-pointer underline text-blue-500 font-semibold py-4 transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <Link to={`/user-details-other/${datasa.users.username}`}>
                          @{datasa.users.username}
                          </Link>
                        </td>
                        <td className="px-1 text-center py-4">
                          {datasa.match_time}
                        </td>
                        <td className="px-1 text-centerpy-4">
                          {datasa.result === "loss" ? (
                            <MdCancel className="text-red-500 text-xl md:text-3xl" />
                          ) : datasa.result === "won" ? (
                            <BsCheckCircleFill className="text-green-500 text-xl md:text-2xl" />
                          ) : null}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b  dark:bg-blue-200/30 dark:border-blue-500 dark: text-black">
                      <td colSpan={4}>
                        Unable to fetch data. Refresh this page.
                      </td>
                    </tr>
                  )
                ) : null}

                {tommorow ? (
                  postUpcomingData ? (
                    postUpcomingData.map((datase) => (
                      <tr
                        key={datase.id}
                        className="bg-white border-b text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                      >
                        <td className="px-2 md:px-3  text-center py-4 uppercase">
                          {datase.league}
                        </td>
                        <th
                          scope="row"
                          className="capitalize px-1 flex-wrap font-light  py-4  text-center text-gray-900 whitespace-normal md:whitespace-nowrap  "
                        >
                          {datase.home_team}{" "}
                          <span className="lowercase px-2 font-bold"> vs</span>{" "}
                          {datase.away_team}
                        </th>
                        <td className="px-1 text-center py-4 uppercase">
                          {datase.prediction}
                        </td>
                        <td className="px-1 text-center underline text-blue-500 font-semibold py-4 transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <Link to={`/user-details-other/${datase.users.username}`}>
                          @{datase.users.username}
                          </Link>
                        </td>
                        <td className="px-1 text-center py-4">
                          {datase.match_time}
                        </td>
                        <td className="px-1 text-center py-4">
                          {datase.result === "loss" ? (
                            <MdCancel className="text-red-500 text-xl md:text-3xl" />
                          ) : datase.result === "won" ? (
                            <BsCheckCircleFill className="text-green-500 text-xl md:text-2xl" />
                          ) : null}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b  dark:bg-blue-200/30 dark:border-blue-500 dark: text-black">
                      <td colSpan={4}>
                        Unable to fetch data. Refresh this page.
                      </td>
                    </tr>
                  )
                ) : null}

                {yesterday ? (
                  postOldData ? (
                    postOldData.map((dataso) => (
                      <tr
                        key={dataso.id}
                        className="bg-white border-b  text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                      >
                        <td className="px-2 md:px-3   text-center py-4 uppercase">
                          {dataso.league}
                        </td>
                        <th
                          scope="row"
                          className="capitalize px-1 flex-wrap font-light  py-4  text-center text-gray-900 whitespace-normal md:whitespace-nowrap  "
                        >
                          {dataso.home_team}{" "}
                          <span className="lowercase px-2 font-bold"> vs</span>{" "}
                          {dataso.away_team}
                        </th>
                        <td className="px-1 text-center py-4 uppercase">
                          {dataso.prediction}
                        </td>
                        <td className="px-1 text-center underline text-blue-500 font-semibold py-4 transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110">
            <Link to={`/user-details-other/${dataso.users.username}`}>
                          @{dataso.users.username}
                          </Link>
                        </td>
                        <td className="px-1 text-center py-4">
                          {dataso.match_time}
                        </td>
                        <td className="px-1 flex justify-center py-4">
                          {dataso.result === "loss" ? (
                            <MdCancel className="text-red-500 text-xl text-center md:text-3xl" />
                          ) : dataso.result === "won" ? (
                            <BsCheckCircleFill className="text-green-500 text-xl text-center md:text-2xl" />
                          ) : null}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b  dark:bg-blue-200/30 dark:border-blue-500 dark: text-black">
                      <td colSpan={4}>
                        Unable to fetch data. Refresh this page.
                      </td>
                    </tr>
                  )
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <TelegramAds />
<div  className="mt-4"/>
      <div className="w-full absolu te bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}

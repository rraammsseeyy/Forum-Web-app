import React, {  useState } from "react";
import Footer from "../../components/reusable/Footer";
import TopNav from "../../components/reusable/TopNav";

import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loader from "../../components/reusable/Loader";
import { TelegramAds } from "../../components/homepage/TelegramAds";
import SkeletonLoader from "../../components/reusable/SkeletonLoader";

export default function PredictionPick({ match_type }) {
  axios.defaults.withCredentials = true;
  const { type } = useParams();

  const [today, setToday] = useState(true);
  const [yesterday, setYesterday] = useState(false);
  const [tommorow, setTomorrow] = useState(false);

  const dataOneAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/predictions/${type}`;
  const dataTwoAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/predictions/${type}/yesterday`;
  const dataThreeAPI = `${
    import.meta.env.VITE_REACT_APP_LEADERBOARD
  }/predictions/${type}/tomorrow`;

  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(["todayPick"], () =>
    axios.get(dataOneAPI).then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: loadingOldPost,
    error: errorOldPost,
    data: postOldData,
  } = useQuery(["old-postsPick"], () =>
    axios.get(dataTwoAPI).then((res) => res.data)
  );

  const {
    isLoading: loadingUpcomingPost,
    error: errorUpcomingPost,
    data: postUpcomingData,
  } = useQuery(["upcoming-postsPick"], () =>
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
      <div className="mb-4 flex-wrap justify-center items-center px-1.5 md:px-32    ">
        <div className="relative overflow-x-auto">
          <div className="text-xl font-bold">
            {" "}
            {match_type}{" "} {loadingUpcomingPost && 'Loading...'}
            {type === "0.5"
              ? "HT OVER 0.5 Goals Prediction"
              : type === "1.5"
              ? "OVER 1.5 Goals Prediction"
              : type === "2.5"
              ? "OVER 2.5 Goals Prediction"
              : type === "Handicap"
              ? "Handicap Goals Prediction"
              : type === "btts"
              ? "Both team to score Prediction"
              : type === "db"
              ? "Double Chance Prediction"
              : "Match Preview"}
          </div>

          <div className="w-full mb-2 cursor-pointer mt-4 flex space-x-4 divide-x-2">
            <div
              onClick={showOldMatch}
              className={
                yesterday
                  ? "text-xl  bg text-white rounded-md px-3 "
                  : "text-base blue opacity-40  pl-3"
              }
            >
              Yesterday
            </div>
            <div
              onClick={showToday}
              className={
                today ? "text-xl  bg text-white rounded-md px-3 " : "text-base blue opacity-40  pl-3"
              }
            >
              Today
            </div>
            <div
              onClick={showTomorrow}
              className={
                tommorow
                  ? "text-xl  bg text-white rounded-md px-3 "
                  : "text-base blue opacity-40  pl-3"
              }
            >
              Tomorrow
            </div>
          </div>
          
          {loadingOldPost && <SkeletonLoader />}

          <table className="w-full text-sm text-left text-black overflow-hidden  ">
            <thead className="text-xs  uppercase  bg-blue text-white  ">
              <tr className=" border-blue-600">
              <th scope="col" className="px-1 text-[0.40rem] md:text-base  md:px-6 py-3 text-center">
                  League
                </th>
                 <th scope="col" className="px-1 text-[0.40rem] md:text-base  md:px-6 py-3 text-center ">
                  Match
                </th>
            
                <th scope="col" className="px-1  text-[0.40rem] md:text-base md:px-6 py-3 text-center">
                  Prediction
                </th>
                <th scope="col" className="px-1 text-[0.40rem] md:text-base  md:px-6 py-3 text-center">
                  Time
                </th>
                <th scope="col" className="px-1 text-[0.40rem] md:text-base md:px-6 py-3 text-center">
                  Result
                </th>
                <th scope="col" className="px-1 text-[0.40rem] md:text-base  md:px-6 py-3 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {today ? (
                postData ? (
                  postData.map((datase) => (
                    <tr
                      key={datase.id}
                      className="bg-white font-semibold border-b text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                    >
                      <td className="px-1   py-4 text-center">{datase.league}</td>
                      <th
                        scope="row"
                        className=" text-[0.55rem] md:text-base  capitalize px-1 flex-wrap text-center  py-4    text-gray-900 whitespace-normal md:whitespace-nowrap  "
                      >
                        {datase.home_team}{" "}
                        <span className="lowercase px-2  font-light "> vs</span>{" "}
                        {datase.away_team}
                      </th>
                      <td className="  py-4 text-center uppercase">
                        {datase.prediction_type === "0.5"
                          ? "HT 0.5"
                          : datase.prediction_type === "1.5"
                          ? "Over 1.5"
                          : datase.prediction_type === "2.5"
                          ? "Over 2.5"
                          : datase.prediction_type === "Handicap"
                          ? "Handicap"
                          : datase.prediction_type === "btts"
                          ? "Both team to score"
                          : datase.prediction_type === "db"
                          ? "Double Chance"
                          : "Prediction"}
                        <span className="px-1 text-center">{datase.selection}</span>
                      </td>

                    
                      <td className="px-1 md:px-6 py-4 text-center">{datase.match_time}</td>
                      <td className="px-1 md:px-6 py-4 text-center">{datase.result}</td>
                      <td className="px-1 md:px-6 py-4 text-center uppercase">
                        {datase.match_status}
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
                  postUpcomingData.map((dataso) => (
                    <tr
                    key={dataso.id}
                    className="bg-white border-b font-semibold text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                  >
                    <td className="px-1 md:px-6 py-4 text-center">{dataso.league}</td>
                    <th
                      scope="row"
                      className=" text-[0.55rem] md:text-base  capitalize px-1 flex-wrap   text-center md:px-6 py-4    text-gray-900 whitespace-normal md:whitespace-nowrap  "
                    >
                      {dataso.home_team}{" "}
                      <span className="lowercase px-2 font-light"> vs</span>{" "}
                      {dataso.away_team}
                    </th>
                    <td className="  py-4 text-center uppercase">
                        {dataso.prediction_type === "0.5"
                          ? "HT 0.5"
                          : dataso.prediction_type === "1.5"
                          ? "Over 1.5"
                          : dataso.prediction_type === "2.5"
                          ? "Over 2.5"
                          : dataso.prediction_type === "Handicap"
                          ? "Handicap"
                          : dataso.prediction_type === "btts"
                          ? "Both team to score"
                          : dataso.prediction_type === "db"
                          ? "Double Chance"
                          : "Prediction"}
                        <span className="px-1 text-center">{dataso.selection}</span>
                      </td>
                    
                    <td className="px-1 md:px-6 py-4 text-center">{dataso.match_time}</td>
                    <td className="px-1 md:px-6 py-4 text-center">{dataso.result}</td>
                    <td className="px-1 md:px-6 py-4 text-center uppercase">
                      {dataso.match_status}
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
                  postOldData.map((datasa) => (
                    <tr
                      key={datasa.id}
                      className="bg-white border-b font-semibold text-[0.50rem] md:text-base dark:bg-blue-200/30 dark:border-blue-500 dark: text-black"
                    >
                      <td className="px-1  py-4 text-center">{datasa.league}</td>
                      <th
                        scope="row"
                      className=" text-[0.55rem] md:text-base  capitalize px-1 flex-wrap  text-center md:px-6 py-4    text-gray-900 whitespace-normal md:whitespace-nowrap  "
                      >
                        {datasa.home_team}{" "}
                        <span className="lowercase px-2 font-light"> vs</span>{" "}
                        {datasa.away_team}
                      </th>
                      <td className="  py-4 text-center uppercase">
                        {datasa.prediction_type === "0.5"
                          ? "HT 0.5"
                          : datasa.prediction_type === "1.5"
                          ? "Over 1.5"
                          : datasa.prediction_type === "2.5"
                          ? "Over 2.5"
                          : datasa.prediction_type === "Handicap"
                          ? "Handicap"
                          : datasa.prediction_type === "btts"
                          ? "Both team to score"
                          : datasa.prediction_type === "db"
                          ? "Double Chance"
                          : "Prediction"}
                        <span className="px-1 text-center">{datasa.selection}</span>
                      </td>
                    

                     
                      <td className="px-1   py-4 text-center">{datasa.match_time}</td>
                      <td className="px-1  py-4 text-center">{datasa.result}</td>
                      <td className="px-1 md:px-6 py-4 text-center uppercase">
                        {datasa.match_status}
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
      <TelegramAds />
      <div className="mt-4" />

      <div className="w-full abs olute bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}

import React, { Fragment } from "react";
import { TipsCards } from "./TipsCards";
import { useQuery } from "react-query";
import Loader from "../reusable/Loader";
import axios from "axios";
import SkeletonLoader from "../reusable/SkeletonLoader";

export const AllTipsCard = () => {
  
    const dataOneAPI = `${
    import.meta.env.VITE_REACT_APP_BLOG
  }/expert-tips`;
  const {
    isLoading: loadingPost,
    error: errorPost,
    data: postData,
  } = useQuery(["expert-tips-posts"], () =>
    axios.get(dataOneAPI).then((res) => {
      return res.data;
    })
  );

 
 


  return (
    <Fragment>
      

      {loadingPost && <div className="w-full h-full"> <SkeletonLoader /> </div>}
        {postData ? postData.slice(0, 10).map((datas) => (
            <TipsCards
            key={datas.id}
            tip={datas.tip}
            result
            home_team={datas.home_team}
            away_team={datas.away_team}
            league={datas.league_sport}
            time={datas.match_time}
            id={datas.id}
            uid={datas.ref}
          />
        )) : null}
     
    </Fragment>
  );
};

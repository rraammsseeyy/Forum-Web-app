import React, { Fragment, useState } from "react";
import { Feeds } from "../../components/socialcorner/Feeds";
import MakeSocialPost from "../../components/socialcorner/MakeSocialPost";
import AsideUser from "../../components/reusable/AsideUser";
import TopNav from "../../components/reusable/TopNav";
import BottomNav from "../../components/reusable/BottomNav";
import axios from "axios";
import { useQuery } from "react-query";
import SkeletonLoader from "../../components/reusable/SkeletonLoader";

export default function SocialCorner() {
  axios.defaults.withCredentials = true;

  const [makePost, setMakePost] = useState(true);
  const [infoData, setData] = useState("");
 

 

  const handlePostDate = (postDate) => {
    const currentDate = new Date();
    const dateDifference =
      (currentDate - new Date(postDate)) / (1000 * 60 * 60 * 24);

    if (dateDifference < 1) {
      return "today";
    } else if (dateDifference < 2) {
      return "yesterday";
    } else if (dateDifference < 7) {
      return `${Math.floor(dateDifference)} days ago`;
    } else {
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
      }).format(new Date(postDate));
    }
  };

 
  return (
    <Fragment>
      <div className="w-full bg-inherit mb-12 md:mb-0">
        <TopNav classColor="bg py-2" />

        
        <div className="text-red-400 px-2">{infoData}</div>

        <div className="w-full flex-wrap md:flex relative">
            <aside className="hidden md:inline-block w-[5%] ">
              <AsideUser />
            </aside>
           <section className="flex-1 md:w-[60%]  h-full">
            {makePost ? <MakeSocialPost /> : null}

            <div className="mb-8" />


           {/* this is a mock data, map thorugh it */}
                  <Feeds
                    key={8} 
                    isVerified={true}
                    fullname={"fullname"}
                    profileAvatar={null}
                    commentAction={null}
                    likeAction={null}
                    likeCount={6}
                    commentCount={3}
                    postedOn={handlePostDate(new Date())}
                    shareAction={null}
                    postID={"datas.id"}
                    refr={"ref"}
                    postImage={null }
                    text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui quae quibusdam labore sit quos pariatur quas dicta facilis veritatis. Quasi fugiat vero vitae quisquam eius nesciunt numquam possimus rerum!"}
                    checkShowLike={5}
                  />
          
          <SkeletonLoader />
          </section>
 
      
        </div>
      </div>
      <BottomNav />
    </Fragment>
  );
}

import React, { Fragment, lazy, Suspense, useContext } from "react";
import { Navigate, Route, Routes,  } from "react-router-dom";
import Errors from "../pages/homepages/Errors";
import SocialCorner from "../pages/socialcorner/SocialCorner";
import Posts from "../pages/socialcorner/Posts";
import PostComment from "../pages/socialcorner/PostComment";
import OtherUser from "../pages/socialcorner/OtherUser";
import Following from "../components/user/Following";

import { AuthContext } from "../context/userAuth/AuthContext";
import Loader from "../components/reusable/Loader";
import Tipfluencers from "../pages/homepages/Tipfluencers";
const UserProfile = lazy(() => import("../pages/user/UserProfile"));

function Stack() {

  const { currentUser } = useContext(AuthContext);
 

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<Errors />} />

        <Route
          path="/user-profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />

        <Route index element={<SocialCorner />} />
        {/* post-ref -> view users post in respect to the id */}
        <Route path="/posts-ref/:username/posts/:id" element={<Posts />} />
        {/* feeds post */}

        <Route path="/following" element={<Following />} />

        {/* post-details-comments -> view comments and posts */}
        <Route path="/user-details-other/:username" element={<OtherUser />} />
        <Route path="/post-details/:postID/:refr" element={<PostComment />} />


        {/* game */}
        <Route path="/tipfluencers" element={<Tipfluencers  />} />


        

      </Routes>
    </Suspense>
  );
}

export default Stack;

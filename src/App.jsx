import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Stack from "./dir/stack/Stack";
import { AuthProvider } from "./dir/context/userAuth/useAuth";
import  AdsDisplay  from "./dir/components/homepage/AdsDisplay";
// import  AllTipsCard  from "./dir/components/homepage/AllTipsCard";
import { Hero } from "./dir/components/homepage/Hero";
import Landing  from "./dir/components/homepage/Landing";
import  MarqueeImages  from "./dir/components/homepage/MarqueeImages";
import  Prediction  from "./dir/components/homepage/Prediction";
import  Socials  from "./dir/components/homepage/Socials";
import  {TelegramAds}  from "./dir/components/homepage/TelegramAds";
import { TipsCards } from "./dir/components/homepage/TipsCards";
import HomePage from "./dir/components/homepage/HomePage";
import BlogPage from "./dir/components/blog/BlogPage";
import UserPage from "./dir/components/user/UserPage";
import Signup from "./dir/pages/SignIn & SignUp/Signup";
import Signin from "./dir/pages/SignIn & SignUp/Signin";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/social-corner" element={<Stack />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/blog-posts" element={<BlogPage />}/>
          <Route path="/userprofile" element={<UserPage />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
        {/* <Switch>
          <Route exact path="/social-corner" component={Socials} />
        </Switch> */}

        <AuthProvider>
          {/* <Stack /> */}
          

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

import React, { Fragment } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { KMA_LOGO_WH } from "./Images";

export default function Footer() {
  return (
    <Fragment>
      <footer className=" bg-blue shadow-t-xl shadow-red-500 w-full text-center pb-4 pt-8 md:mt-20 z-99 relative ">
        <div className="flex justify-start pl-2 md:pl-12 text-sm   font">
          {/* <img src="" alt="KMA_logo" className="" /> */}
          <a href="https://kmanalysis.com">
            <img
              src={KMA_LOGO_WH}
              width="80px"
              alt="KMA Logo"
              title="KMA Logo"
            />
          </a>
        </div>
        <div className=" flex-wrap flex items-center justify-between py-4  text-white">
          <div className="w-1/2 md:w-1/4">
            <h5 className="text-base md:text-xl font-semibold text-white">
              Quick Links
            </h5>
            <ul className=" pt-3 text-xs md:text-smfont-medium space-y-1">
                <li>
                  {" "}
                  <Link to='/'> Home</Link> {" "}
                </li>
              <li>
                {" "}
                <Link to='/login'> Login</Link> {" "}
              </li>
              <li>
                {" "}
                <Link to='/register'> Register</Link> {" "}
              </li>
              <li>
                {" "}
                <Link to='/blog-posts'> News</Link> {" "}
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4   md:mt-0">
            <h5 className="text-base md:text-xl font-semibold text-white">
              Social Corner
            </h5>
            <ul className=" pt-3 text-xs md:text-smfont-medium space-y-1">
              <li>
                {" "}
                <Link to='/social-corner'> Home</Link> {" "}
              </li>
              <li>
                {" "}
                <Link to='/ranking'> Leaderboard</Link> {" "}
              </li>
              <li>
                {" "}
                <Link to='/social-corner'> Social Corner</Link>  
              </li>
              <li>
                {" "}
                <Link to='/tipfluencers'> Tipfluencers </Link>  
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 mt-10 md:mt-0">
            <h5 className="text-base md:text-xl font-semibold text-white">
              Legal
            </h5>
            <ul className="block pt-3 text-xs md:text-smfont-medium space-y-1">
              <li>
                {" "}
              </li>
              <li>
                {" "}
                <Link to='/terms-and-conditions'> Terms and Conditions</Link> {" "}
              </li>
              <li>
                {" "}
                <Link to='/privacy-and-policy'> Disclaimer/Privacy Policy</Link> {" "}
              </li>
            </ul>
          </div>

          <div className="w-1/2 md:w-1/4 mt-10 md:mt-0">
            <h5 className="text-base md:text-xl font-semibold text-white">
              Contact info
            </h5>
            <ul className="block pt-3 text-xs md:text-smfont-medium space-y-2">
            <li>
                {" "}
                <Link to='/about-us' >About Us</Link> {" "}
              </li>

              <li>
                {" "}
                <Link to='/contact-us' >Contact Us</Link> {" "}
              </li>
              
            </ul>
          </div>
        </div>

        <div className="flex w-full justify-center space-x-5 pb-2">
          <a href="https://twitter.com/kmanalysis" target="_blank" rel="noopener noreferrer"> 
            {" "}
            <AiFillTwitterCircle className="text-xl md:text-3xl text-white cursor-pointer" />
          </a>
          <a href="https://instagram.com/kmanalysis" target="_blank" rel="noopener noreferrer"> 
            <AiFillInstagram className="text-xl md:text-3xl text-white cursor-pointer" />
          </a>
        </div>
        <hr className=" opacity-75 backdrop-filter backdrop-opacity-80 bg-gray-900 text-center" />
        <div className="pt-12 font-medium text-white">&copy; KMANALYSIS 2023</div>
      </footer>
    </Fragment>
  );
}

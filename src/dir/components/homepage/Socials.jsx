import React from "react";
import { Link } from "react-router-dom";
import { SOCIALS } from "../reusable/Images";

export default function Socials() {
  return (
    <div className="w-full px-3 md:px-7 py-2">
      <div className="w-full flex-wrap md:flex justify-start space-y-6  md:space-y-0">
        <div className=" w-full md:w-1/2 h-full md:h-[600px] flex justify-center items-center ">
          <img src={SOCIALS} alt="social_badge" className="h-64 rounded-xl" />
        </div>
        <section className="w-full flex items-center md:w-1/2">
          <div className="text-base leading-relaxed tracking-wide p-3 space-y-6">
            {/* <div className="pb-4 text-xl md:text-3xl font-bold">Socials</div>  */}
            {/* Introducing our newest feature: {" "}
            <span className="font-bold blue text-2xl"> Social Corner! </span> */}
            <div className=" flex justify-center items-center pb-0 md:pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tenetur iusto nesciunt ad unde mollitia asperiores, itaque aspernatur, ullam neque rerum officiis! Maiores aperiam, dolorem veritatis cumque perferendis distinctio at!
            </div>
            <div className="-pt-4 md:pt-4 flex space-x-4 justify-center md:justify-start items-center">
              <Link to="/social-corner">
                <div className="transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 text-sm md:text-base cursor-pointer font-light bg-blue py-2 px-4 rounded-full text-white text-center">
                  Go to Social Corner
                </div>
              </Link>
              <Link to="/register?community">
                <div className="capitalize transition duration-500 ease-in-out  transform hover:-translate-z-1 hover:scale-110 text-sm md:text-base cursor-pointer font-semibold border border-blue-600 py-2 px-4 rounded-full text-black text-center">
                  Join our Community
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

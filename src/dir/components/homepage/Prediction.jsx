import React from "react";
import { CardPrediction } from "./CardPrediction";

export default function Prediction() {
  return (
    <div className="w-full mb-6 space-y-5  flex-wrap flex jus tify-center  justify-around items-center ">
      <div className="w-full  pt-8  flex justify-center items-center md:w-1/3">
        <CardPrediction
          option="HT over 0.5"
          text="Bet on halftime over 0.5 for a quick and exciting betting opportunity."
          bg_Color="bg-gradient-to-l"
          type="0.5"
        />
      </div>

      <div className="w-full flex  justify-center items-center md:w-1/3">
        <CardPrediction
          option="over 1.5"
          text="Play a 1.5 betting option for higher potential payouts."
          bg_Color="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500"
          type="1.5"
        />
      </div>

      <div className="w-full flex  justify-center items-center md:w-1/3">
        <CardPrediction
          text="Opt for a 2.5 betting option for even higher potential payouts."
          option="over 2.5"
          bg_Color="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"
          type="2.5"
        />
      </div>
      <div className="w-full flex  justify-center items-center md:w-1/3">
        <CardPrediction
          option="Double Chance"
          text="Increase your chances of winning by betting on the double chance option."
          bg_Color="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500"
          // bg_Color="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
          type="db"
        />
      </div>
      <div className="w-full flex  justify-center items-center md:w-1/3">
        <CardPrediction
          option="BTTS/GG"
          text="Bet on both teams to score for a thrilling and engaging betting experience."
          bg_Color="bg-gradient-to-l"
          // bg_Color="bg-gradient-to-r from-rose-400 to-orange-300"
          type="btts"
        />
      </div>

      <div className="w-full flex   justify-center items-center md:w-1/3">
        <CardPrediction
          option="Handicap"
          text="Choose the handicap option for adjusted odds and increased betting flexibility."
          bg_Color="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500"
          type="Handicap"
        />
      </div>
    </div>
  );
}

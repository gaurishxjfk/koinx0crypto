import { BlackUpIcon } from "@/svg/icons";
import React from "react";
import Fundamentals from "./Fundamentals";

const Overview = () => {
  return (
    <div>
      <h1 className="font-bold md:text-lg">Performance</h1>
      <div className="flex items-center justify-between ">
        <div className="text-center">
          <p className="text-xs md:text-sm text-nowrap">Today{"'"}s Low</p>
          <h2 className="font-semibold text-xs md:text-md">46,930.22</h2>
        </div>
        <div className="relative">
          <progress
            value={100}
            className="lg:w-[25rem] md:w-[20rem] sm:w-[15rem] w-[8rem] h-1.5 md:h-2 rounded-full"
          />
          <div className="flex flex-col items-center ml-[4rem] md:ml-[18rem] text-xs absolute right-2">
            <span>
              <BlackUpIcon />
            </span>
            $48,343.83
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs md:text-sm text-nowrap">Today{"'"}s High</p>
          <h2 className="font-semibold text-xs md:text-md">49,343.83</h2>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="text-center">
          <p className="text-xs md:text-sm text-nowrap">52W Low</p>
          <h2 className="font-semibold text-xs md:text-md">46,930.22</h2>
        </div>
        <div className="">
          <progress
            value={100}
            className="lg:w-[25rem] md:w-[20rem] sm:w-[15rem] w-[8rem] h-1.5 md:h-2 rounded-full"
          />
        </div>
        <div className="text-center">
          <p className="text-xs md:text-sm text-nowrap">52W High</p>
          <h2 className="font-semibold text-xs md:text-md">49,343.83</h2>
        </div>
      </div>

      <Fundamentals />
    </div>
  );
};

export default Overview;

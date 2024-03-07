import React from "react";

const Fundamentals = () => {
  return (
    <div className="mt-8">
      <h2 className="flex gap-2 items-center font-bold text-gray-700">
        Fundamentals{" "}
        <span className="bg-gray-300 font-extrabold rounded-full p-2  w-[20px] h-[20px] flex items-center justify-center text-sm">
          <span className="text-white">i</span>
        </span>
      </h2>
      <div className="flex flex-col md:gap-4 md:flex-row justify-between mt-4">
        <div className="text-sm w-full">
          <div className="flex justify-between ">
            <p className="text-gray-500">Bitcoin Price</p>
            <p className="font-semibold">$16,815.46</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between  ">
            <p className="text-gray-500">24h Low / 24h High</p>
            <p className="font-semibold">$16,382.07 / $16,874.12</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between w-full ">
            <p className="text-gray-500">7d Low / 7d High</p>
            <p className="font-semibold">$16,382.07 / $16,874.12</p>
          </div>
          <div className="border-b border-gray-300 my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">Trading Volume</p>
            <p className="font-semibold">$23,249,202,782</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">Market Cap Ranke</p>
            <p className="font-semibold">#1</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>
        </div>
        <div className=" text-sm w-full">
          <div className="flex justify-between">
            <p className="text-gray-500">Bitcoin Price</p>
            <p className="font-semibold">$16,815.46</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">24h Low / 24h High</p>
            <p className="font-semibold">$16,382.07 / $16,874.12</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">7d Low / 7d High</p>
            <p className="font-semibold">$16,382.07 / $16,874.12</p>
          </div>
          <div className="border-b border-gray-300 my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">Trading Volume</p>
            <p className="font-semibold">$23,249,202,782</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>

          <div className="flex justify-between ">
            <p className="text-gray-500">Market Cap Ranke</p>
            <p className="font-semibold">#1</p>
          </div>
          <div className="border-b border-gray-300  my-[.6rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;

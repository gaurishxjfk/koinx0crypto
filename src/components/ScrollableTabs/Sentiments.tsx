import React from "react";
import News from "./News";

const Sentiments = () => {
  return (
    <div className="px-3">
      <h1 className="font-bold md:text-lg">Sentiments</h1>
      <h2 className="flex gap-2 items-center font-bold text-gray-700 mt-2">
        Key Events{" "}
        <span className="bg-gray-300 font-extrabold rounded-full p-2  w-[20px] h-[20px] flex items-center justify-center text-sm">
          <span className="text-white">i</span>
        </span>
      </h2>
    <News />
    </div>
  );
};

export default Sentiments;

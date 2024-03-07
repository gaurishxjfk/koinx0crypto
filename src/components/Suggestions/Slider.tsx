"use client";
import React, { useState } from "react";
import Card, { CoinDetailsProp } from "./Card";
import clsx from "clsx";

const Slider = ({ arr }: { arr: CoinDetailsProp[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arr.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arr.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative">
      <div className="flex ">
        {arr &&
          arr.length > 0 &&
          arr.map(({ item }, index) => (
            <div
              key={index}
              className={clsx("flex-none w-[20rem]", {
                hidden: index < currentIndex || index >= currentIndex + 6,
              })}
            >
              <Card item={item} />
            </div>
          ))}
      </div>
      <button className="absolute inset-y-0 left-0 z-10" onClick={prevSlide}>
        <span className="bg-white border border-black font-extrabold rounded-full p-4 w-[20px] h-[20px] flex items-center justify-center text-sm">
          {"<"}
        </span>
      </button>
      <button className="absolute inset-y-0 right-0 z-10" onClick={nextSlide}>
        <span className="bg-white border border-black font-extrabold rounded-full p-4 w-[20px] h-[20px] flex items-center justify-center text-sm">
          {">"}
        </span>
      </button>
    </div>
  );
};

export default Slider;

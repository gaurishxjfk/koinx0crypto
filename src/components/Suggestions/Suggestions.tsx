"use client";
import { getTrendingCoins } from "@/services/koinxServices";
import React, { useEffect, useState } from "react";
import { CoinDetailsProp } from "./Card";
import Slider from "./Slider";

const Suggestions = () => {
  const [trendingCoinsArr, setTrendingCoinsArr] = useState<
    CoinDetailsProp[] | []
  >([]);

  useEffect(() => {
    const handleTrendigCoins = async () => {
      const res = await getTrendingCoins();
      setTrendingCoinsArr(res);
    };
    handleTrendigCoins();
  }, []);

  return (
    <div className="py-8 bg-white mt-6 rounded px-[1rem] md:px-[3.7rem] w-full mx-auto overflow-hidden">
      <h1 className="font-bold md:text-xl mb-6">You May Also Like</h1>

      <Slider arr={trendingCoinsArr.reverse()} />

      <h1 className="font-bold md:text-xl mt-8 mb-6">Trending Coins</h1>
      <Slider arr={trendingCoinsArr} />
    </div>
  );
};

export default Suggestions;

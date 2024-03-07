"use client";
import { UpIcon } from "@/svg/icons";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTrendingCoins } from "@/services/koinxServices";

interface CoinProp {
  item: {
    id: number;
    name: string;
    thumb: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

const TrendingCoins = () => {
  const [trendingCoinsArr, setTrendingCoinsArr] = useState<CoinProp[] | null>(
    null
  );

  useEffect(() => {
    const handleTrendigCoins = async () => {
      const res = await getTrendingCoins();
      setTrendingCoinsArr(res.slice(0, 3));
    };
    handleTrendigCoins();
  }, []);

  console.log(trendingCoinsArr);
  return (
    <div className="rounded-lg bg-white px-[1.5rem] py-[1.75rem] mt-2  lg:max-w-[25rem]">
      <h1 className="lg:text-xl font-semibold">Trending Coins{" (24h)"}</h1>
      <div className="flex flex-col gap-2 mt-2">
        {trendingCoinsArr?.map(({ item }) => (
          <Link
            href={"/"}
            key={item.id}
            className="flex justify-between items-center"
          >
            <div className="flex gap-2">
              <Image src={item.thumb} alt={item.name} width={25} height={25} />
              <h4 className="font-semibold">{item.name}</h4>
            </div>

            <div className="rounded-md bg-[#EBF9F4] text-[#14B079] p-2 py-1.5 flex items-center gap-1 sm:gap-2 w-[5rem]">
              <span>
                <UpIcon />
              </span>
              <h4 className="font-bold">
                {(item.data.price_change_percentage_24h.usd / 100).toFixed(1) +
                  "%"}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;

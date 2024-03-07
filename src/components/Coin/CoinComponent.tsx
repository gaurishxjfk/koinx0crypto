"use client";
import { getCoin, getPrice } from "@/services/koinxServices";
import { Loader, UpIcon } from "@/svg/icons";
import React, { useEffect, useState } from "react";
import TradingViewWidget from "../TradingViewWidget";
import Image from "next/image";
import { formatAmount } from "@/lib/constants";

const CoinComponent = ({ id }: { id: string }) => {
  const [coinDetails, setCoinDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCoinDetails = async (id: string) => {
      const { name, symbol, image, market_cap_rank } = await getCoin(id);
      const getUSDINRPrice = await getPrice(id);

      if (name) setLoading(false);
      setCoinDetails({
        name,
        symbol,
        image,
        market_cap_rank,
        price: getUSDINRPrice[id],
      });
    };
    getCoinDetails(id);
  }, [id]);

  return (
    <div className="rounded-lg bg-white w-full px-[1.5rem] py-[1.75rem] mt-16 sm:mt-0 shadow-sm">
      {!loading ? (
        <>
          <div className="flex gap-[2.2rem] items-center absolute -top-16 sm:relative sm:top-0">
            <div className="flex items-center gap-3  font-bold">
              <Image
                src={coinDetails.image.thumb}
                alt={coinDetails.name}
                width={25}
                height={25}
              />
              <h1 className="text-xl">{coinDetails.name}</h1>
              <p className="text-gray-500 text-sm">{coinDetails.symbol}</p>
            </div>
            <div className="rounded-lg bg-gray-400 text-white p-2.5">
              Rank #{coinDetails.market_cap_rank}
            </div>
          </div>

          <div className="flex sm:gap-[2.2rem] sm:mt-[2.25rem] items-start gap-[1rem] ">
            <div className=" items-center gap-3 font-bold ">
              <h1 className="text-xl sm:text-2xl">
                {formatAmount(coinDetails.price.usd, "USD")}
              </h1>
              <p className="text-md sm:text-lg">
                {formatAmount(coinDetails.price.inr, "INR")}
              </p>
            </div>
            <div className="rounded-md bg-[#EBF9F4] text-[#14B079] p-2 py-1.5 flex items-center gap-1 sm:gap-2">
              <span>
                <UpIcon />
              </span>
              <h4 className="font-bold">
                {coinDetails.price.usd_24h_change.toFixed(2)}%
              </h4>
            </div>
            <div className="text-gray-500 text-sm sm:-ml-4 py-2">{"(24H)"}</div>
          </div>
        </>
      ) : (
        <div className="w-20">
          <Loader />
        </div>
      )}
      <div className="border-b border-gray-300 mt-[1.5rem] mb-[1rem]"></div>
      <div>
        <TradingViewWidget />
      </div>
    </div>
  );
};

export default CoinComponent;

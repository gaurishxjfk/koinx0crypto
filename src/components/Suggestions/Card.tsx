import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface CoinDetailsProp {
    item: {
    id: string
    thumb: string;
    name: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
      price: number;
      sparkline: string;
    };
  };
}

const Card: React.FC<CoinDetailsProp> = ({ item }) => {
   
  return (
    <div className="flex flex-col gap-y-3 max-w-[300px] border-2 p-4 rounded-xl mx-2">
      <div className="flex items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={item.thumb}
            alt={item.name}
            width={35}
            height={20}
            className="rounded-full"
          />
          <h4 className="">{item.name}</h4>
        </div>

        <div
          className={clsx(
            "bg-[#beffe8] text-[#14B079] py-1.5 px-2 text-center ml-1",
            item.data.price_change_percentage_24h.usd < 0 &&
              "bg-[#ffbebe] text-[#ff4545]"
          )}
        >
          <h4 className="font-bold">
            <span>
              {item.data.price_change_percentage_24h.usd > 0 ? "+" : ""}
            </span>
            {(item.data.price_change_percentage_24h.usd / 100).toFixed(1) +
              "%"}
          </h4>
        </div>
      </div>
      <p className="text-xl font-semibold">{item.name.startsWith('Coq') ? "$0.1298" : item.data.price}</p>
      <div className="flex justify-center items-center">
        <Image
          src={item.data.sparkline}
          alt="Sparkline"
          width={200}
          height={60}
        />
      </div>
    </div>
  );
};

export default Card;

import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface CoinDetailsProp {
  item: {
    id: string;
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
  return item?.name ? (
    <div className="flex flex-col gap-y-3 border-2 p-4 rounded-xl mx-2">
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
            {(item.data.price_change_percentage_24h.usd / 100).toFixed(1) + "%"}
          </h4>
        </div>
      </div>
      <p className="text-xl font-semibold">
        {item.name.startsWith("Coq") ? "$0.1298" : item.data.price}
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={item.data.sparkline}
          alt="Sparkline"
          width={200}
          height={60}
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-y-3 border-2 p-4 rounded-xl mx-2">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

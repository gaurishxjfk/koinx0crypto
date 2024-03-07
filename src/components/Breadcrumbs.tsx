import React from "react";
import { NextArrowIcon } from "@/svg/icons";

const Breadcrumbs = ({ id }: { id: string }) => {
  return (
    <div className="text-slate-500 py-[1.5rem] flex items-center gap-2">
      Cryptocurrencies
      <span>
        <NextArrowIcon height={15} />
      </span>{" "}
      <span className="font-bold text-black">
        {id.substring(0, 1).toUpperCase() + id.substring(1)}
      </span>
    </div>
  );
};

export default Breadcrumbs;

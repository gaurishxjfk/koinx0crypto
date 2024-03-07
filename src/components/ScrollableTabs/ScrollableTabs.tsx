"use client";
import { scrollableTabsItems } from "@/lib/constants";
import clsx from "clsx";
import React, { useState } from "react";
import Tabs from "./Tabs";

const ScrollableTabs = () => {
  const [aciveTab, setActiveTab] = useState("Overview");
  return (
    <>
      <div className="flex border-b border-gray-300 py-2 lg:max-w-[69%] xl:max-w-[75%] gap-[1rem] md:gap-[2rem] overflow-x-scroll scroll-smooth custom-scrollbar mt-4 z-50">
        {scrollableTabsItems.map((item) => (
          <a
            key={item}
            className={clsx(
              "text-gray-600 font-semibold cursor-pointer whitespace-nowrap text-sm md:text-[16px]",
              item === aciveTab &&
                "text-blue-600 font-bold underline underline-offset-8 decoration-2 "
            )}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </a>
        ))}
      </div>
      <Tabs tab={aciveTab} />
    </>
  );
};

export default ScrollableTabs;

import Image from "next/image";
import React from "react";
import illustration from "../../../public/illustration.png";

const GetStartedKoinx = () => {
  return (
    <div className="rounded-lg bg-[#0052FE] px-[1.5rem] py-[1.75rem] mt-16 sm:mt-0 flex flex-col gap-3 items-center text-center lg:max-w-[25rem]">
      <h3 className="text-white text-lg font-bold mx-4">Get Started with KoinX for FREE</h3>
      <p className="text-white text-xs">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image src={illustration} alt="Get started illustration" />
      <button className="rounded-[8px] px-4 py-2 bg-white font-semibold text-sm md:text-md">
        Get Started for FREE ⟶
      </button>
    </div>
  );
};

export default GetStartedKoinx;

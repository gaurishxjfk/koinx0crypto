import React from "react";
import logo from "../../../public/illustration.png";
import Image from "next/image";
import clsx from "clsx";

interface CardCompProps {
  classnames: string;
  heading: string;
  para: string;
}

const CardComp: React.FC<CardCompProps> = ({ classnames, heading, para }) => {
  return (
    <div className="bg-green-100 rounded-lg flex items-start p-3 gap-3 max-w-[25rem] mt-4">
      <div className={clsx("rounded-full p-5", classnames)}>
        <Image src={logo} alt={"news logo"} width={12} />
      </div>
      <div>
        <h1 className="font-bold mb-2">{heading}</h1>
        <p className="text-xs">{para}</p>
      </div>
    </div>
  );
};

export default CardComp;

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

import HambergerMenu from "./HambergerMenu";
import KoinxLogo from "../../../public/logo.png";
import { getPrice } from "@/services/koinxServices";


const navItems = ["Crypto Taxes", "Free Tools", "Resource Center"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   handleAddDish()
  // },[])

  // const handleAddDish = async () => {
  //   const urlData = { id: "bitcoin" , currency: "usd"}
  //   await getPrice(urlData)
  // }
  return (
    <nav className="h-[5rem] flex items-center justify-between bg-white px-[2rem] md:px-[3.7rem] shadow-md">
      <div>
        <Image src={KoinxLogo} alt="Koinx Logo" />
      </div>
      <div className="flex gap-[2.8rem] font-bold ">
        <HambergerMenu setOpen={setOpen} open={open} />
        <div
          className={clsx(
            "bg-white py-4 w-full absolute right-0 top-[5rem] flex flex-col gap-4 items-center md:hidden border-t-2 shadow-md",
            !open && "hidden"
          )}
        >
          {navItemList()}
        </div>
        <div className={clsx("md:flex items-center gap-[2rem] hidden ")}>
          {navItemList()}
        </div>
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] rounded-[8px] h-[2.5rem] w-[8.5rem] text-white hidden lg:block">
          Get Started
        </button>
      </div>
    </nav>
  );
};

const navItemList = () =>
  navItems.map((navItem) => (
    <Link key={navItem} href={"/"} className=" ">
      {navItem}
    </Link>
  ));

export default Navbar;

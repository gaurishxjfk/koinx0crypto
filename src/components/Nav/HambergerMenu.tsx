import React from "react";

interface propType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HambergerMenu: React.FC<propType> = ({ open, setOpen }) => {
  return (
    <button
      className={`text-[#0B182F] relative focus:outline-none flex flex-col gap-1 md:opacity-0 ${
        open && "pr-2"
      }`}
      onClick={() => setOpen(!open)}
    >
      <span
        aria-hidden="true"
        className={`text-[#0B182F] block h-[.2em] w-6 bg-current transform transition duration-500 ease-in-out  ${
          open ? "absolute rotate-45 " : "rotate-0"
        }`}
      ></span>
      <span
        aria-hidden="true"
        className={`text-[#0B182F] block h-[.2em] w-6 bg-current ml-auto transform transition duration-500 ease-in-out  ${
          open ? "opacity-0 rotate-90" : "rotate-0"
        } `}
      ></span>
      <span
        aria-hidden="true"
        className={`block h-[.2em] w-6 bg-current transform  transition duration-500 ease-in-out ${
          open ? "absolute -rotate-45 " : "rotate-0"
        }`}
      ></span>
    </button>
  );
};

export default HambergerMenu;

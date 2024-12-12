import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoCaretDown, IoCopy } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between max-h-[10%]">
      <div className="flex items-center">
        <img
          src={"/streak_logo.png"}
          alt="SafePal Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="text-xl font-bold max-md:hidden">One-Piece</span>
      </div>

      <div className="grid place-items-center text-gray-400">
        <div className="flex gap-1 items-center">
          <p className="text-sm text-neon-green">Goke</p>
          <IoCaretDown size={13}  />
        </div>
        <div className="flex gap-1 items-center justify-center">
          <p className="text-gray-400 text-sm">0x3eDd...Aca6eA</p> <IoCopy className="text-gray-400" size={13} />
        </div>


      </div>

      <div className="flex items-center gap-x-1 justify-end">
        <img
          src="https://placehold.co/30x30"
          alt="User Avatar"
          className="w-6 h-6 rounded-full mr-2"
        />
        <FaBars className="max-md:size-6 size-5" />
      </div>
    </div>
  );
};

export default TopNav;

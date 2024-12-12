"use client";
import React, { useState } from "react";
import TopNav from "@/components/dashboard/TopNav";
import Balance from "@/components/dashboard/Balance";
import Search from "@/components/dashboard/Search";
import TokenList from "@/components/reusables/TokenList";

// icons
import { FaArrowDown, FaArrowUp, FaEllipsis } from "react-icons/fa6";
import { RiExchange2Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const page = () => {
  const [activeTabs, setActiveTabs] = useState<number>(0);
  return (
    <main className="grid place-items-center h-lvh md:bg-neon-green">
      <div className="bg-black overflow-y-hidden overscroll-contain flex-row md:shadow-lg relative rounded-lg h-full md:h-[85vh] w-full md:max-w-screen-md section">
        <TopNav />

        <div className=" grow  overflow-y-auto h-[90%] scroll-container">
          <div className="flex justify-around py-5">
            {["Coin", "NFT", "Defi"]?.map((item, i: number) => (
              <span
                key={i}
                onClick={() => setActiveTabs(i)}
                className={` cursor-pointer ${
                  activeTabs == i
                    ? "text-purple-500  border-b-2 border-purple-500 pb-1"
                    : "text-gray-400"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <Balance />

          <div className="flex justify-around mb-4 text-gray-500">
            <div className="flex flex-col items-center">
              <FaArrowUp />
              <span>Send</span>
            </div>

            <div className="flex flex-col items-center">
              <FaArrowDown />
              <span>Receive</span>
            </div>

            <div className="flex flex-col items-center">
              <RiExchange2Line />
              <span>Swap</span>
            </div>

            <div className="flex flex-col items-center">
              <FaShoppingCart />
              <span>Buy/Sell</span>
            </div>

            <div className="flex flex-col items-center">
              <FaEllipsis />
              <span>More</span>
            </div>
          </div>

          <Search />

          <TokenList />
        </div>
      </div>
    </main>
  );
};

export default page;

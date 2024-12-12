"use client";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-[100vh] px-[30px] cflexbs gap-[20px] bg-[#7d4db6] py-[50px] text-white text-[32px] font-[700] font-inter">
        <div className="w-full flexmm cflexss gap-[20px]">
          <h1>Seemless Swapping Across Chains</h1>
          <p className="text-[18px] text-white/90 font-[600]">
            Fast simple, and secure
          </p>
        </div>
        <div className="w-full flexmm">
          <img src="/streak_logo.png" alt="zap-logo" className="w-[120px]" />
        </div>
        <div className="cflexss w-full text-white font-[500] text-[18px] gap-[20px]">
          <button className="bg-black rounded-[20px] flexsm w-full px-[50px] py-[20px]">
            Create New Wallet
          </button>
          <button className="bg-black rounded-[20px] flexsm w-full px-[50px] py-[20px]">
            Add Existing Wallet
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;

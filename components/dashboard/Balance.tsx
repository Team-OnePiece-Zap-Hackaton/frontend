import React from "react";
import { FaEye } from "react-icons/fa6";

const Balance = () => {
  return (
    <div className="text-center mb-4">
      <div className="text-gray-400 flex items-center gap-2 justify-center">
        <span>Balance</span> <FaEye size={16} />
      </div>
      <div className="text-3xl font-bold">≈&nbsp;$34,563,768</div>
      <div className="text-gray-400">≈&nbsp; 344.5 BTC</div>
    </div>
  );
};

export default Balance;

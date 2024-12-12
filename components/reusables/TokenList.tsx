import React from "react";

const TokenItem = () => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
        <div className="flex items-center">
          <img
            src="https://placehold.co/30x30"
            alt="BTC Logo"
            className="w-6 h-6 mr-2"
          />
          <div>
            <div className="text-sm">BTC (Bitcoin)</div>
            <div className="text-green-500 text-xs">$99,408.7 1.76%</div>
          </div>
        </div>
        <div className="text-right text-xs">
          <div>0</div>
          <div>≈$0</div>
        </div>
      </div>
  )
}

const TokenList = () => {
  return (
    <div className="space-y-2">
      {
        [1,1,1,1,1]?.map(() => {
          return (
            <TokenItem />
          )
        })
      }
    </div>
  );
};

export default TokenList;

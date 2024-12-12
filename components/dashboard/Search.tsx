import React from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center mb-4 bg-gray-800 rounded">
      <input
        type="text"
        placeholder="Search coins"
        className="flex-grow p-2 bg-gray-800"
      />

        <button className="p-2 bg-gray-800">
          <IoFilter className="text-neon-blue" />
        </button>
        <button className="p-2 bg-gray-800 rounded-r">
          <FaEllipsisVertical />
        </button>
    </div>
  );
};

export default Search;

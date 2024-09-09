"use client";
import React, { useState } from "react";
import SortIcon from "../assets/sorticon.svg";

export default function SortingButton({ setSortConfig }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSortChange = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.direction === "ascending" ? "descending" : "ascending",
    }));
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2"
      >
        <SortIcon />
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-[#ECEAFF] rounded shadow-lg z-10">
          <ul className="flex-col items-center justify-center">
            <li className="w-full flex justify-center text-center px-12 border-b-[1px] border-[#cec8fa] 2 py-2">
              <button
                onClick={() => handleSortChange("date")}
                className="block  text-[14px] text-[#7d72d4]"
              >
                Date
              </button>
            </li>
            <li className="w-full flex justify-center text-center px-12 border-b-[1px] border-[#cec8fa]  py-2">
              <button
                onClick={() => handleSortChange("title")}
                className="block  text-[14px] text-[#7d72d4]"
              >
                Name
              </button>
            </li>
            <li className="w-full flex justify-center text-center px-12 border-b-[1px] border-[#cec8fa]  py-2">
              <button
                onClick={() => handleSortChange("time")}
                className="block  text-[14px] text-[#7d72d4]"
              >
                Time
              </button>
            </li>
            <li className="w-full flex justify-center text-center px-12   py-2">
              <button
                onClick={() => handleSortChange("location")}
                className="block  text-[14px] text-[#7d72d4]"
              >
                Location
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

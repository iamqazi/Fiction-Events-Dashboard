"use client";
import "../globals.css";
import React, { useState, useEffect, useRef } from "react";
import { handleSort } from "../utils/sortingUtils";
import SortIcon from "../assets/sort.svg";

export default function Sort({ sortConfig, setSortConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: "title",
    fromDate: "",
    toDate: "",
  });
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleCategoryChange = (event) => {
    const key = event.target.value;
    const newSortConfig = handleSort(sortConfig, key);
    setSortConfig(newSortConfig);
    setFilters({ ...filters, category: key });
  };
  const handleDateChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-[40px] box-shadow  h-[40px] border-[1px] border-[#E2DFF8] rounded-[4px] shadow-lg flex items-center justify-center bg-white"
      >
        <SortIcon />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 bg-white custom-box-shadow rounded-lg shadow-lg z-10">
          <div className="mb-4 flex lg:flex md:flex sm:flex-none justify-center lg:justify-between md:justify-between items-center gap-[32px]">
            <div>
              <label
                htmlFor="category"
                className="block text-[15px] whitespace-nowrap font-[400] text-cool-gray"
              >
                Category
              </label>
              <select
                id="category"
                value={filters.category}
                onChange={handleCategoryChange}
                className="mt-1 text-[#797D8C] placeholder-[#797D8C] block w-[155px] lg:w-[220px] md:w-[220px] h-[34px] px-3 py-2 bg-[#EDEDED] rounded-[4px] focus:outline-[#5041BC] focus:outline"
              >
                <option className="text-cool-gray text-[13px]" value="title">
                  Title
                </option>
                <option className="text-cool-gray text-[13px]" value="date">
                  Date
                </option>
                <option className="text-cool-gray text-[13px]" value="location">
                  Location
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:items-center sm:justify-center lg:flex-row lg:justify-between items-center gap-2">
            <div className="mb-4 w-full">
              <label
                htmlFor="fromDate"
                className="block text-[12px] font-medium text-[#DCDDE0]"
              >
                From
              </label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={filters.fromDate}
                onChange={handleDateChange}
                className="mt-1 block w-full text-[#797D8C] placeholder-[#797D8C] bg-[#EDEDED] h-[34px] px-3 py-2 rounded-[4px] focus:outline-[#5041BC] focus:outline"
              />
            </div>
            <div className="mb-4 w-full">
              <label
                htmlFor="toDate"
                className="block text-[12px] font-medium text-[#DCDDE0]"
              >
                To
              </label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={filters.toDate}
                onChange={handleDateChange}
                className="mt-1 block w-full text-[#797D8C] placeholder-[#797D8C] bg-[#EDEDED] h-[34px] px-3 py-2 rounded-[4px] focus:outline-[#5041BC] focus:outline"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

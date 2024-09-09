"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../slice/EventSlice";
import { formatDateInYear, formatTime } from "../utils/helper";
import Vector from "../assets/Vector.svg";

export default function EventModal() {
  const dispatch = useDispatch();
  const { modalOpen, selectedEvent } = useSelector((state) => state.events);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(closeModal());
      }
    };
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal());
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  if (!modalOpen || !selectedEvent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="bg-white border-[1px] border-[#C6CBD3] rounded-[20px] lg:w-[700px] w-full max-w-[80%] mx-4 relative"
      >
        <div className="flex flex-col md:flex-row justify-between border-b- p-4">
          <div className="md:w-2/3">
            <h2 className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[22px] truncate max-w-full text-[#1E232A] font-[600] mb-2">
              {selectedEvent.title}
            </h2>
            <p className="text-[#9AA8BD] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[18px] font-inter mb-0 ">
              Category:{" "}
              <span className="uppercase text-[#9AA8BD] font-[600] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[18px] font-inter">
                {selectedEvent.category}
              </span>
            </p>
          </div>
          <div className="md:w-1/3 flex md:justify-end ">
            <p className="text-[#797D8C] whitespace-nowrap text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] md:pt-4 pt-0 lg:pt-1 font-[600]">
              {formatDateInYear(selectedEvent.start_local)},{" "}
              {formatTime(selectedEvent.start_local)}
            </p>
          </div>
        </div>
        <hr className="border-t-[1px] py-2 border-[#C6CBD3]" />

        <p className="text-[#1E232A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-[400] pb-4 px-4">
          Description:
          <br />
          <span className="text-[#9E9E9E] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] line-clamp-5 sm:line-clamp-5">
            {selectedEvent.description}
          </span>
        </p>
        <hr className="border-t-[1px] pt-2 border-[#C6CBD3]" />
        <div className="items-center flex justify-center py-4">
          <div className="flex items-center gap-2">
            <Vector />
            <span className="truncate md:max-w-[230px] sm:max-w-[170px] max-w-[170px] lg:max-w-[230px] text-[#797D8C] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]  font-[400] font-inter">
              {selectedEvent.entities?.[0]?.formatted_address ||
                selectedEvent.geo?.address?.formatted_address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

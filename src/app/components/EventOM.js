"use client";
import React from "react";
import { useSelector } from "react-redux";
import Vector from "../assets/Vector.svg";
import Avatar1 from "../assets/avatar1.svg";
import Avatar2 from "../assets/avatar2.svg";
import Avatar3 from "../assets/avatar3.svg";
import Badge from "../assets/badge.svg";
import { formatDateInYear, formatTime } from "../utils/helper";
import Error from "../ui/Error";

export default function EventOM() {
  const { events, error } = useSelector((state) => state.events);
  if (error) {
    return <Error />;
  }
  const highestRatedEvent = events.reduce((highest, event) => {
    return (event.rank || 0) > (highest.rank || 0) ? event : highest;
  }, {});
  return (
    <div
      style={{ boxShadow: "-12px 11px 19px rgba(80, 65, 188, 0.5)" }}
      className="relative bg-vibrant-blue ml-[24px] rounded-lg p-4 m-[24px] lg:mb-4"
    >
      <h3 className="text-[34px] leading-[40px] text-[#FFFFFF] font-[700] font-inter">
        Event of
        <br /> the Month
      </h3>
      <div className="absolute top-[7px] right-[15px]">
        <Badge className="w-[70px] h-[80px] " />
      </div>
      <div className="flex items-center justify-between  bg-white rounded-[11px] p-4">
        <div>
          {highestRatedEvent.title ? (
            <>
              <p className="text-[#5041BC] truncate max-w-[140px] text-[16px] font-inter font-[700]">
                {highestRatedEvent.title}
              </p>
              <p className="text-[#797D8C] text-[12px] font-[400] font-inter ">
                Category:{" "}
                <span className="text-[#797D8C] text-[12px] font-[600] font-inter">
                  {highestRatedEvent.category}
                </span>
              </p>
              <p className="flex items-center">
                <Vector className="h-[15px] w-[16px]" />
                <span className="truncate max-w-[130px] text-[#797D8C] leading-[14px] text-[12px] font-[400] font-inter">
                  {highestRatedEvent.entities?.[0]?.formatted_address ||
                    highestRatedEvent.geo?.address?.formatted_address}
                </span>
              </p>
            </>
          ) : (
            <p>No events available</p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-end pb-1">
            <Avatar3
              className="shadow-custom w-[27px] h-[27px] object-cover border-2 border-vibrant-blue rounded-full"
              style={{ zIndex: 3, marginLeft: "0px" }}
            />

            <Avatar2
              className=" shadow-custom w-[27px] h-[27px] object-cover border-2 border-vibrant-blue rounded-full"
              style={{ zIndex: 2, marginLeft: "-10px" }}
            />
            <Avatar1
              className=" shadow-custom w-[27px] h-[27px] object-cover border-2 border-vibrant-blue rounded-full"
              style={{ zIndex: 1, marginLeft: "-10" }}
            />
          </div>
          <div className="">
            <p className="text-[12px] text-[#D2D2D2] font-inter font-[400] text-right">
              {formatDateInYear(highestRatedEvent.start_local)}
            </p>
            <p className="text-[12px] text-[#D2D2D2] font-inter font-[400] text-right">
              {formatTime(highestRatedEvent.start_local)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

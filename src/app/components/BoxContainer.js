"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventCounts, fetchEvents } from "../slice/EventSlice";
import { formatNumber } from "../utils/helper";
import { getEventCountForUpcomingMonths } from "../utils/eventUtils";
import Loader from "../ui/Loader";
export default function BoxContainer() {
  const { totalCount, events, loading, favorites } = useSelector(
    (state) => state.events
  );
  const fvrtCount = favorites.length;
  const dispatch = useDispatch();
  const [eventCount, setEventCount] = useState("");
  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchEventCounts());
  }, [dispatch]);
  useEffect(() => {
    const count = getEventCountForUpcomingMonths(events);
    setEventCount(count);
  }, [events]);
  if (loading)
    return (
      <div className="flex gap-[24px] items-center w-full">
        <div className="w-full bg-white rounded-[24px] border-[1px] border-[#FFFFFF] p-[24px] ">
          <Loader />
        </div>
      </div>
    );
  return (
    <div className="flex flex-col sm:flex-row gap-[24px] items-center w-full  px-[24px]">
      <div className="w-full bg-white rounded-[24px] box-shadow border-[1px] border-[#FFFFFF] p-[24px] ">
        <p className="text-[#797D8C] whitespace-nowrap text-p14px font-[600] font-inter ">
          All Events <br />
          <span className="text-[#04103B] text-[32px] font-inter font-[700] ">
            {formatNumber(totalCount)}
          </span>
        </p>
      </div>
      <div className="w-full bg-white rounded-[24px] box-shadow border-[1px] border-[#FFFFFF] p-[24px] ">
        <p className="text-[#797D8C] whitespace-nowrap text-p14px font-[600] font-inter ">
          This Month Events
          <br />
          <span className="text-[#04103B] text-[32px] font-inter font-[700] ">
            {formatNumber(eventCount)}
          </span>
        </p>
      </div>
      <div className="w-full bg-white rounded-[24px] box-shadow border-[1px] border-[#FFFFFF] p-[24px] ">
        <p className="text-[#797D8C] whitespace-nowrap text-p14px font-[600] font-inter ">
          Favorite Events
          <br />
          <span className="text-[#04103B] text-[32px] font-inter font-[700] ">
            {formatNumber(fvrtCount)}
          </span>
        </p>
      </div>
    </div>
  );
}

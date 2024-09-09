"use client";
import "../globals.css";
import {
  HeartIcon as OutlineHeartIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatTime } from "../utils/helper";
import { getSortedEvents } from "../utils/sortingUtils";
import SortingButton from "./SortButton";
import Sort from "./Sorting";
import { handleFavoriteClick, handleClick } from "../utils/eventUtils";
import Loader from "../ui/Loader";
import Error from "../ui/Error";

export default function EventsList() {
  const dispatch = useDispatch();
  const { events, loading, error, favorites } = useSelector(
    (state) => state.events
  );
  const [sortConfig, setSortConfig] = useState({
    key: "date",
    direction: "ascending",
  });
  const sortedEvents = React.useMemo(() => {
    return getSortedEvents(events, sortConfig);
  }, [events, sortConfig]);
  if (loading)
    return (
      <div className="flex items-center justify-center p-4 border-b border-gray-200 bg-gray-100">
        <div className="w-full lg:w-840 flex items-center justify-center">
          <Loader />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center p-4 border-b border-gray-200 bg-gray-100">
        <div className="w-full lg:w-840 flex items-center justify-center">
          <Error />
        </div>
      </div>
    );
  return (
    <>
      <div className="flex items-center justify-between mx-[24px] mt-[24px]">
        <p className="text-[#000000] text-[20px] font-[600]">Event List</p>
        <Sort sortConfig={sortConfig} setSortConfig={setSortConfig} />
      </div>
      <div className="relative overflow-x-auto overflow-y-auto h-[520px] custom-scrollbar sm:rounded-lg mx-[24px] my-[24px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-[16px] font-[600] uppercase text-[#303030]">
            <tr className="flex items-start justify-between border-b-[1px] border-[#6A6A6A]">
              <th className="px-3 py-3 cursor-pointer flex items-center gap-2">
                #{" "}
                <span>
                  <SortingButton
                    sortConfig={sortConfig}
                    setSortConfig={setSortConfig}
                  />
                </span>
              </th>
              <th className="px-3 py-3">Name</th>
              <th className="px-3 py-3">Time</th>
              <th className="px-3 py-3">Date</th>
              <th className="px-3 py-3">Location</th>
              <th className="px-3 py-3"></th>
            </tr>
          </thead>
          <tbody className="p-2">
            {sortedEvents.map((event, index) => (
              <tr
                key={event.id}
                onClick={() => handleClick(event.id, dispatch)}
                className="bg-white border-[1px] flex items-start justify-between rounded-[20px] border-[#F3F3F3] cursor-pointer mt-4 h-[60px]"
              >
                <td className="px-3 py-5 font-[800] text-[16px] text-[#04103B] whitespace-nowrap">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </td>
                <td className="relative group ">
                  <div className="relative flex-grow text-[#797D8C] text-[16px] font-[500] px-3 py-5 ">
                    <div className="truncate w-[140px] max-w-[150px] text-[16px] font-[500] font-inter text-cool-gray">
                      {event.title}
                    </div>
                    <div className="absolute hidden group-hover:block custom-tooltip">
                      {event.title}
                    </div>
                  </div>
                </td>
                <td className="px-3 py-5 text-[14px] text-[#797D8C] font-[700] whitespace-nowrap">
                  {formatTime(event.start_local)}
                </td>
                <td className="px-3 py-5 text-[14px] text-[#797D8C] font-[700] whitespace-nowrap">
                  {formatDate(event.start_local)}
                </td>
                <td className="relative flex-grow group">
                  <div className="relative  px-3 py-5 text-[#797D8C]  text-[14px] font-[500] ">
                    <div className="truncate  max-w-[150px] text-[14px] font-[500] text-cool-gray">
                      {event.entities?.[0]?.formatted_address ||
                        event.geo?.address?.formatted_address}
                    </div>
                    <div className="absolute hidden group-hover:block custom-tooltip">
                      {event.entities?.[0]?.formatted_address ||
                        event.geo?.address?.formatted_address}
                    </div>
                  </div>
                </td>
                <td className="px-3 py-5 text-right">
                  {favorites.some((f) => f.id === event.id) ? (
                    <SolidHeartIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick(event.id, dispatch);
                      }}
                      strokeWidth={2}
                      className="h-[25px] w-[28px] text-red-500 cursor-pointer icon-fill-red"
                    />
                  ) : (
                    <OutlineHeartIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFavoriteClick(event.id, dispatch);
                      }}
                      strokeWidth={2}
                      className="h-[25px] w-[28px] text-vibrant-blue cursor-pointer"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

"use client";
import React from "react";
import { formatDate, formatTime } from "../utils/helper";
import { handleFavoriteClick } from "../utils/eventUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  HeartIcon as OutlineHeartIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/outline";
export default function EventCard({ event }) {
  const { favorites } = useSelector((state) => state.events);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex border-[1px] mb-2 w-full border-[#F3F3F3] items-center justify-between h-[60px] bg-white p-4 rounded-[15px]">
        <div className="truncate w-[180px] max-w-[180px] text-[16px] font-[600] font-inter text-steel-blue">
          {event.title}
          <p className="text-[12px] w-[70px] font-[400] font-inter text-cool-gray">
            {formatDate(event.start_local)},{" "}
            <span className="text-[12px] w-[80px] font-[400] font-inter text-cool-gray">
              {formatTime(event.start_local)}
            </span>
          </p>
        </div>

        <div>
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
        </div>
      </div>
    </>
  );
}

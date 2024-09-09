import "../globals.css";
import React from "react";
import { useSelector } from "react-redux";
import UpcomingEventCard from "./UpcomingEventCard";
import Loader from "../ui/Loader";
import Error from "../ui/Error";

export default function UpcomingEvents() {
  const { events, error, loading } = useSelector((state) => state.events);
  if (loading)
    return (
      <div className="p-6 h-[480px]  my-[24px] rounded-[18px]   bg-white ">
        <div className="w-full flex justify-center items-center h-[390px] ">
          <Loader />
        </div>
      </div>
    );
  if (error)
    return (
      <div className="p-6 h-[480px]  my-[24px] rounded-[18px]   bg-white ">
        <div className="w-full flex justify-center items-center h-[390px] ">
          <Error />
        </div>
      </div>
    );

  return (
    <div className="p-6 h-[480px] m-[24px] rounded-[18px]   bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="w-full h-[390px] overflow-y-auto custom-scrollbar">
        {events.map((event, index) => (
          <UpcomingEventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

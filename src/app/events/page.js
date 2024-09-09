"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import EventsList from "../components/EventsList";
import BoxContainer from "../components/BoxContainer";
import EventOM from "../components/EventOM";
import EventModal from "../components/EventModal";
export default function EventsPage() {
  const router = useRouter();
  const view = router.query.view;
  useEffect(() => {
    console.log("Current view:", view);
    if (view === "favorites") {
      router.push("/events/favoriteevents");
    }
  }, [view, router]);

  return (
    <>
      <UpcomingEvents />
      <EventsList />
      <BoxContainer />
      <EventOM />
      <EventModal />
    </>
  );
}

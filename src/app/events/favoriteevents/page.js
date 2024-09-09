"use client";
import FavoriteEvents from "../../components/FavoriteEvents";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function FavoriteEventsPage() {
  const router = useRouter();
  const { view } = router.query;

  useEffect(() => {
    if (view === "events") {
      router.push("/events");
    }
  }, [view, router]);

  return (
    <>
      <FavoriteEvents />
    </>
  );
}

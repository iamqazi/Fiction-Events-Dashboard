"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomingEvents";
import EventsList from "../components/EventsList";
import BoxContainer from "../components/BoxContainer";
import EventOM from "../components/EventOM";
import FavoriteEvents from "../components/FavoriteEvents";
import EventModal from "../components/EventModal";

export default function RootLayout() {
  const [view, setView] = useState("events");
  const router = useRouter();
  useEffect(() => {
    if (view === "favorites") {
      router.push("/events/favoriteevents");
    } else if (view === "events") {
      router.push("/events");
    }
  }, [view, router]);

  const handleMenuItemClick = (view) => {
    setView(view);
  };
  const title =
    view === "favorites" ? "Favorite Events" : "Fiction Events Dashboard";
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>{title}</title>
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-off-white antialiased"
      >
        <Provider store={store}>
          <NavBar onMenuItemClick={handleMenuItemClick} />
          <div className="flex w-full max-w-full">
            <Sidebar activeView={view} onSelectView={setView} />
            <div className="flex flex-col lg:flex-row w-full">
              {view === "events" && (
                <div className="flex flex-col w-full lg:flex-row">
                  <div className="w-full lg:w-2/3">
                    <div className="block lg:hidden w-full">
                      <UpcomingEvents />
                    </div>
                    <div className="w-full">
                      <EventsList />
                    </div>
                    <div className="w-full">
                      <BoxContainer />
                    </div>
                    <div className="relative w-full block lg:absolute lg:w-0 lg:h-0 lg:overflow-hidden">
                      <EventOM />
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:flex-col w-full lg:w-1/3">
                    <div className="w-full">
                      <UpcomingEvents />
                    </div>
                    <div className="w-full">
                      <EventOM />
                    </div>
                  </div>
                </div>
              )}
              {view === "favorites" && (
                <div className="w-full">
                  <FavoriteEvents />
                </div>
              )}
              <EventModal />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}

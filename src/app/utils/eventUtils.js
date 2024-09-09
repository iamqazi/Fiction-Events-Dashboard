import { toggleFavorite, selectEvent } from "../slice/EventSlice";

export const getEventCountForUpcomingMonths = (events, monthsToCheck = 6) => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  let count = 0;

  for (let i = 0; i < monthsToCheck; i++) {
    const month = (currentMonth + i) % 12;
    const year = currentYear + Math.floor((currentMonth + i) / 12);
    const eventsInMonth = events.filter((event) => {
      const eventDate = new Date(event.start_local);
      return eventDate.getMonth() === month && eventDate.getFullYear() === year;
    });
    if (eventsInMonth.length > 0) {
      count = eventsInMonth.length;
      break;
    }
  }
  return count;
};
export function handleFavoriteClick(eventId, dispatch) {
  if (typeof dispatch === "function") {
    dispatch(toggleFavorite(eventId));
  } else {
    console.error("dispatch is not a function");
  }
}
export function handleClick(eventId, dispatch, toggleFavoriteFlag = false) {
  if (typeof dispatch === "function") {
    dispatch(selectEvent(eventId));

    if (toggleFavoriteFlag) {
      dispatch(toggleFavorite(eventId));
    }
  } else {
    console.error("dispatch is not a function");
  }
}

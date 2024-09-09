export const handleSort = (sortConfig, key) => {
  let direction = "ascending";
  if (sortConfig.key === key && sortConfig.direction === "ascending") {
    direction = "descending";
  }
  return { key, direction };
};
export const getSortedEvents = (events, sortConfig) => {
  let sortableEvents = [...events];
  if (sortConfig !== null) {
    sortableEvents.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }
  return sortableEvents;
};
export const filterEventsByCategory = (events, category) => {
  if (!category) return events;
  return events.filter((event) => event.category === category);
};
export const sortEvents = (events, sortBy = "date") => {
  return events.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "location") {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });
};

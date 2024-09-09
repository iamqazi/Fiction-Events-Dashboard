const API_KEY = "LiwQKMDE9aZfg7aZ0Hmvf88lzi8exsCUl_eEj7b3";
export const fetchEventsFromAPI = async () => {
  const API_KEY = "LiwQKMDE9aZfg7aZ0Hmvf88lzi8exsCUl_eEj7b3";
  const response = await fetch("https://api.predicthq.com/v1/events/", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  const data = await response.json();
  console.log(data.results);
  return data.results;
};

export const fetchEventCount = async () => {
  const response = await fetch(
    "https://api.predicthq.com/v1/events/count/?country=NZ",
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch event count");
  }

  const data = await response.json();
  console.log(data);
  return data.count;
};

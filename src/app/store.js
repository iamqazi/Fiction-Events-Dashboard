// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./slice/EventSlice";
export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

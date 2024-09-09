"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchEventsFromAPI, fetchEventCount } from "../services/apiEvents";
export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async () => {
    const events = await fetchEventsFromAPI();
    return events;
  },
  []
);
export const fetchEventCounts = createAsyncThunk(
  "events/fetchEventCount",
  async () => {
    const count = await fetchEventCount();
    return count;
  },
  []
);
const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    selectedCategory: "",
    totalCount: 0,
    loading: false,
    error: null,
    selectedEvent: null,
    modalOpen: false,
    favorites: [],
  },
  reducers: {
    selectEvent: (state, action) => {
      const selectedEvent = state.events.find(
        (event) => event.id === action.payload
      );
      state.selectedEvent = selectedEvent;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.selectedEvent = null;
    },
    toggleFavorite: (state, action) => {
      const eventId = action.payload;
      const event = state.events.find((e) => e.id === eventId);
      if (state.favorites.some((f) => f.id === eventId)) {
        state.favorites = state.favorites.filter((f) => f.id !== eventId);
      } else {
        state.favorites.push(event);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEventCounts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEventCounts.fulfilled, (state, action) => {
        state.loading = false;
        state.totalCount = action.payload;
      })
      .addCase(fetchEventCounts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { selectEvent, closeModal, toggleFavorite } = eventsSlice.actions;
export default eventsSlice.reducer;

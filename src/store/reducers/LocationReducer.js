import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recording: false,
  locations: [],
  currentLocation: null,
  trackName: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setTrackName: (state, action) => {
      state.trackName = action.payload;
    },
    startRecording: (state, action) => {
      state.recording = true;
    },
    stopRecording: (state, action) => {
      state.recording = false;
      state.trackName = "";
      state.locations = [];
    },
    addLocation: (state, action) => {
      state.currentLocation = action.payload;
      if (state.recording) {
        state.locations.push(action.payload);
      }
    },
  },
});

export const { startRecording, stopRecording, addLocation, setTrackName } =
  locationSlice.actions;

export default locationSlice.reducer;

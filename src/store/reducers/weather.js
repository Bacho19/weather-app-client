import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../actions/weather";

const weatherInitialState = {
  loading: false,
  weather: {},
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  extraReducers: {
    [fetchWeatherData.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchWeatherData.fulfilled.type]: (state, { payload }) => {
      state.weather = payload;
      state.loading = false;
    },
    [fetchWeatherData.rejected.type]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default weatherSlice.reducer;

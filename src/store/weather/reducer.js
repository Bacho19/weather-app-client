import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../weather/action";

const initialState = {
  loading: false,
  weather: {},
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
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

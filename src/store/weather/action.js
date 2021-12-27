import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../api";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_ID}`
      );
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

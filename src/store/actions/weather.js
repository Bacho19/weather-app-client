import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiId, baseUrl } from "../../api";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async ({ lat, lon }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

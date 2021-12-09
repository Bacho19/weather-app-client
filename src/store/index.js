import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weather/reducer";
import authReducer from "./auth/reducer";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    auth: authReducer,
  },
});

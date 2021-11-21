import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import DailyPage from "./pages/DailyPage";
import HourlyPage from "./pages/HourlyPage";

export const router = (
  <Routes>
    <Route path="/" element={<CurrentPage />} />
    <Route path="/daily" element={<DailyPage />} />
    <Route path="/hourly" element={<HourlyPage />} />
  </Routes>
);

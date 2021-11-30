import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import DailyPage from "./pages/DailyPage";
import HourlyPage from "./pages/HourlyPage";
import Loader from "./components/Loader";
import PropTypes from "prop-types";

const RouterPages = ({ isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<CurrentPage />} />
      <Route path="/daily" element={<DailyPage />} />
      <Route path="/hourly" element={<HourlyPage />} />
    </Routes>
  );
};

RouterPages.propTypes = {
  isLoading: PropTypes.bool,
};

export default RouterPages;

import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import DailyPage from "./pages/DailyPage";
import HourlyPage from "./pages/HourlyPage";
import Loader from "./components/Loader";
import PropTypes from "prop-types";

const RouterPages = ({ isLoading, weatherData }) => {
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<CurrentPage weatherData={weatherData} />} />
      <Route path="/daily" element={<DailyPage weatherData={weatherData} />} />
      <Route
        path="/hourly"
        element={<HourlyPage weatherData={weatherData} />}
      />
    </Routes>
  );
};

RouterPages.propTypes = {
  isLoading: PropTypes.bool,
  weatherData: PropTypes.object,
};

export default RouterPages;

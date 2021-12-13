import React from "react";
import { Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import DailyPage from "./pages/DailyPage";
import HourlyPage from "./pages/HourlyPage";
import Loader from "./components/Loader";
import PropTypes from "prop-types";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";

const RouterPages = ({ isLoading, weatherData }) => {
  const { isAuth } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="/" element={<CurrentPage weatherData={weatherData} />} />
          <Route
            path="/daily"
            element={<DailyPage weatherData={weatherData} />}
          />
          <Route
            path="/hourly"
            element={<HourlyPage weatherData={weatherData} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
};

RouterPages.propTypes = {
  isLoading: PropTypes.bool,
  weatherData: PropTypes.object,
};

export default RouterPages;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
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

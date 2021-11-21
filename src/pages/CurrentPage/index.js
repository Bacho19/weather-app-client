import React, { useContext } from "react";
import { WeatherDataContext } from "../../context/WeatherDataContext";
import WeatherCard from "../../components/WeatherCard";
import {} from "./styled";

const CurrentPage = () => {
  const weatherData = useContext(WeatherDataContext);

  return (
    <div className="container">
      <WeatherCard
        city={weatherData?.name}
        temp={Math.floor(weatherData?.main?.temp - 273.15)}
        title={
          weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].main
        }
        icon={
          weatherData &&
          weatherData.weather &&
          weatherData.weather[0] &&
          weatherData.weather[0].icon
        }
      />
    </div>
  );
};

export default CurrentPage;

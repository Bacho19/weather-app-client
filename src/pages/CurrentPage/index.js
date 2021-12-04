import React, { useContext } from "react";
import WeatherCard from "../../components/WeatherCard";
import { months, shortDays } from "../../monthsDays";
import { CityNameContext } from "../../context/CityName";
import { CurrentPageWrapper } from "./styled";
import PropTypes from "prop-types";

const CurrentPage = ({ weatherData }) => {
  const cityName = useContext(CityNameContext);

  return (
    <CurrentPageWrapper>
      <WeatherCard
        temp={Math.floor(weatherData.current?.temp - 273.15)}
        city={cityName}
        title={
          weatherData.current &&
          weatherData.current.weather &&
          weatherData.current.weather[0] &&
          weatherData.current.weather[0].main
        }
        icon={
          weatherData.current &&
          weatherData.current.weather &&
          weatherData.current.weather[0] &&
          weatherData.current.weather[0].icon
        }
        date={new Date(weatherData.current?.dt * 1000).getDate()}
        day={shortDays[new Date(weatherData.current?.dt * 1000).getDay()]}
        month={months[new Date(weatherData.current?.dt * 1000).getMonth()]}
        hours={new Date(weatherData.current?.dt * 1000).getHours().toString()}
        minutes={
          new Date(weatherData.current?.dt * 1000).getMinutes() < 10
            ? "0" +
              new Date(weatherData.current?.dt * 1000).getMinutes().toString()
            : new Date(weatherData.current?.dt * 1000).getMinutes().toString()
        }
      />
    </CurrentPageWrapper>
  );
};

CurrentPage.propTypes = {
  weatherData: PropTypes.object,
};

export default CurrentPage;

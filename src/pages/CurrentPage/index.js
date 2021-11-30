import React, { useContext } from "react";
import { WeatherDataContext } from "../../context/WeatherData";
import WeatherCard from "../../components/WeatherCard";
import { months, shortDays } from "../../monthsDays";
import { CityNameContext } from "../../context/CityName";
import { CurrentPageWrapper } from "./styled";

const CurrentPage = () => {
  const { current } = useContext(WeatherDataContext);
  const cityName = useContext(CityNameContext);

  return (
    <CurrentPageWrapper>
      <WeatherCard
        temp={Math.floor(current?.temp - 273.15)}
        city={cityName}
        title={
          current &&
          current.weather &&
          current.weather[0] &&
          current.weather[0].main
        }
        icon={
          current &&
          current.weather &&
          current.weather[0] &&
          current.weather[0].icon
        }
        date={new Date(current?.dt * 1000).getDate()}
        day={shortDays[new Date(current?.dt * 1000).getDay()]}
        month={months[new Date(current?.dt * 1000).getMonth()]}
        hours={new Date(current?.dt * 1000).getHours().toString()}
        minutes={
          new Date(current?.dt * 1000).getMinutes() < 10
            ? "0" + new Date(current?.dt * 1000).getMinutes().toString()
            : new Date(current?.dt * 1000).getMinutes().toString()
        }
      />
    </CurrentPageWrapper>
  );
};

export default CurrentPage;

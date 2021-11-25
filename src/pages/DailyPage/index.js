import React, { useContext } from "react";
import WeatherCard from "../../components/WeatherCard";
import { CityNameContext } from "../../context/CityName";
import { WeatherDataContext } from "../../context/WeatherData";
import { months, shortDays } from "../../monthsDays";
import {} from "./styled";

const DailyPage = () => {
  const { daily } = useContext(WeatherDataContext);
  const cityName = useContext(CityNameContext);
  return (
    <div className="container">
      <span className="page-name__title">{cityName}</span>
      <div className="weather-cards_wrapper">
        {daily &&
          daily.map((item) => {
            return (
              <WeatherCard
                key={item.dt}
                temp={Math.floor(item.temp.day - 273.15)}
                title={item.weather[0].main}
                icon={item.weather[0].icon}
                date={new Date(item.dt * 1000).getDate()}
                day={shortDays[new Date(item.dt * 1000).getDay()]}
                month={months[new Date(item.dt * 1000).getMonth()]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DailyPage;

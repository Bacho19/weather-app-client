import React, { useContext } from "react";
import WeatherCard from "../../components/WeatherCard";
import { CityNameContext } from "../../context/CityName";
import { months, shortDays } from "../../monthsDays";
import PropTypes from "prop-types";
import {} from "./styled";

const HourlyPage = ({ weatherData }) => {
  const cityName = useContext(CityNameContext);
  return (
    <>
      <p className="page-name__title">{cityName}</p>
      <div className="row">
        {weatherData.hourly &&
          weatherData.hourly.map((item) => {
            return (
              <WeatherCard
                key={item.dt}
                temp={Math.floor(item.temp - 273.15)}
                title={item.weather[0].main}
                icon={item.weather[0].icon}
                date={new Date(item.dt * 1000).getDate()}
                month={months[new Date(item.dt * 1000).getMonth()]}
                day={shortDays[new Date(item.dt * 1000).getDay()]}
                hours={new Date(item.dt * 1000).getHours().toString()}
              />
            );
          })}
      </div>
    </>
  );
};

HourlyPage.propTypes = {
  weatherData: PropTypes.object,
};

export default HourlyPage;

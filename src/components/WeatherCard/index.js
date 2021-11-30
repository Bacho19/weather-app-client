import React from "react";
import PropTypes from "prop-types";
import {
  CardContent,
  CardIcon,
  CardInfo,
  CardTempInfo,
  CardTitle,
  CardWrapper,
} from "./styled";

const WeatherCard = ({
  title,
  city,
  temp,
  date,
  day,
  month,
  hours,
  minutes,
  icon,
}) => {
  return (
    <div className="col">
      <CardWrapper>
        <CardContent>
          <CardInfo>
            <CardTitle size="20">{title}</CardTitle>
            <CardTempInfo>
              <CardTitle size="78">{temp || "-"}&deg;</CardTitle>
            </CardTempInfo>
          </CardInfo>
          <CardTitle size="22">{city && city}</CardTitle>
          <CardIcon src={`http://openweathermap.org/img/w/${icon}.png`} />
          {hours && (
            <CardTitle size="24">
              {hours}:{minutes ? minutes : "00"}
            </CardTitle>
          )}
          <CardTitle size="18">
            {date} | {day}
          </CardTitle>
          <CardTitle size="18">{month}</CardTitle>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

WeatherCard.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  temp: PropTypes.number,
  date: PropTypes.number,
  day: PropTypes.string,
  month: PropTypes.string,
  hours: PropTypes.string,
  minutes: PropTypes.string,
  icon: PropTypes.string,
};

export default WeatherCard;

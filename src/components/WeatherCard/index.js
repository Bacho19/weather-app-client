import React from "react";
import PropTypes from "prop-types";
import {
  CardContent,
  CardIcon,
  CardInfo,
  CardTempInfo,
  CardTitle,
  CardVerticalBar,
  CardWrapper,
} from "./styled";

const WeatherCard = ({ title, city, temp, icon }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardInfo>
          <CardTitle size="14">{title}</CardTitle>
          <CardTempInfo>
            <CardTitle size="58">{temp}&deg;</CardTitle>
            <CardVerticalBar>|</CardVerticalBar>
            <CardTitle size="18">{city}</CardTitle>
          </CardTempInfo>
        </CardInfo>
        <CardIcon src={`http://openweathermap.org/img/w/${icon}.png`} />
      </CardContent>
    </CardWrapper>
  );
};

WeatherCard.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  temp: PropTypes.number,
  icon: PropTypes.string,
};

export default WeatherCard;

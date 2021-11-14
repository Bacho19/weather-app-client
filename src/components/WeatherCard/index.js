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

const WeatherCard = ({ title, city, temp }) => {
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
        <CardIcon>wind icon</CardIcon>
      </CardContent>
    </CardWrapper>
  );
};

WeatherCard.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  temp: PropTypes.number,
};

export default WeatherCard;

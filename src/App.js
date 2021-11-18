import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import SideMenu from "./components/SideMenu";
import { router } from "./router";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [value, setValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async (city = "tbilisi") => {
    try {
      const weatherJson = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51786ce34d39a0ce7acd07aef05848e4`
      )
        .then((data) => data.json())
        .catch((e) => console.log(e, "error"));
      setWeatherData(weatherJson);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClick = () => {
    fetchWeatherData(value);
  };

  return (
    <>
      <GlobalStyle />
      <SideMenu isMenuHidden={isMenuHidden} />
      <div>
        <Navbar isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden} />
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Search</button>
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
        {router}
      </div>
    </>
  );
};

export default App;

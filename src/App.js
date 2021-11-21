import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { SearchCityContext } from "./context/SearchCityContext";
import { WeatherDataContext } from "./context/WeatherDataContext";
import { ThemeContext, themes } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import { router } from "./router";
import { GlobalStyle } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";

// sidebaris sichqare sxvadasxva zomis ekranebze unda ikos erti
// did ekranze unda qrebodes +
// ar unda ikos damokidebuli navbaris simaghleze +
// sidemenu unda ikos gamchvirvale +
// scrollis dablokva sidemenus gaxsnis dros

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes.LIGHT);

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

  const handleSearchClick = (value) => {
    setIsMenuHidden(true);
    fetchWeatherData(value);
  };

  return (
    <ThemeProvider
      theme={currentTheme === themes.LIGHT ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      <ThemeContext.Provider value={currentTheme}>
        <SearchCityContext.Provider value={searchValue}>
          <Navbar
            isMenuHidden={isMenuHidden}
            setIsMenuHidden={setIsMenuHidden}
            setSearchValue={setSearchValue}
            handleSearchClick={handleSearchClick}
            setCurrentTheme={setCurrentTheme}
          />
          <div className="app-wrapper">
            <SideMenu
              isMenuHidden={isMenuHidden}
              setIsMenuHidden={setIsMenuHidden}
              setSearchValue={setSearchValue}
              handleSearchClick={handleSearchClick}
              setCurrentTheme={setCurrentTheme}
            />
            <WeatherDataContext.Provider value={weatherData}>
              {router}
            </WeatherDataContext.Provider>
          </div>
        </SearchCityContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;

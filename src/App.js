import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { SearchCityContext } from "./context/SearchCity";
import { WeatherDataContext } from "./context/WeatherData";
import { ThemeContext, themes } from "./context/Theme";
import { CityNameContext } from "./context/CityName";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import { RouterPages } from "./router";
import { GlobalStyle } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";

// sidebaris sichqare sxvadasxva zomis ekranebze unda ikos erti // setInterval
// did ekranze unda qrebodes +
// ar unda ikos damokidebuli navbaris simaghleze +
// sidemenu unda ikos gamchvirvale +
// scrollis dablokva sidemenus gaxsnis dros // overflow-y: hidden +
// koordinatebi +
// loader +
// pages +

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("Tbilisi");
  const [searchValue, setSearchValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes.LIGHT);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData(41.6941, 44.8337);
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      setIsLoading(true);
      const weatherJson = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=51786ce34d39a0ce7acd07aef05848e4`
      ).then((data) => data.json());
      setWeatherData(weatherJson);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSearchClick = (lat, lon, cityName) => {
    setIsMenuHidden(true);
    fetchWeatherData(lat, lon);
    setCityName(cityName);
  };

  return (
    <ThemeProvider
      theme={currentTheme === themes.LIGHT ? lightTheme : darkTheme}
    >
      <GlobalStyle isMenuHidden={isMenuHidden} />
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
              <CityNameContext.Provider value={cityName}>
                <RouterPages isLoading={isLoading} />
              </CityNameContext.Provider>
            </WeatherDataContext.Provider>
          </div>
        </SearchCityContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;

import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { SearchCityContext } from "./context/SearchCity";
import { WeatherDataContext } from "./context/WeatherData";
import { ThemeContext, themes } from "./context/Theme";
import { CityNameContext } from "./context/CityName";
import axios from "axios";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import RouterPages from "./router";
import { GlobalStyle } from "./globalStyles";
import { lightTheme, darkTheme } from "./themes";
import { apiId, baseUrl } from "./api";

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("Tbilisi");
  const [searchValue, setSearchValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes.LIGHT);
  const [isLoading, setIsLoading] = useState(false);

  let hiddingContent = useRef();

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    console.log(savedTheme);
    setCurrentTheme(savedTheme);
    fetchWeatherData(41.6941, 44.8337);
  }, []);

  const fetchWeatherData = async (lat, lon) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${baseUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiId}`
      );
      setWeatherData(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const sideMenuHidding = () => {
    window.scrollTo(0, 0);
    let hiddingCount = 0;
    const hiddingSpeed = 9;
    const interval = setInterval(() => {
      if (hiddingCount >= window.innerWidth) {
        clearInterval(interval);
        hiddingContent.current.style.display = "none";
      }
      hiddingCount += hiddingSpeed;
      hiddingContent.current.style.left = `-${hiddingCount}px`;
    }, 1);
  };

  const sideMenuShowing = () => {
    window.scrollTo(0, 0);
    hiddingContent.current.style.display = "flex";
    let showingCount = window.innerWidth;
    const showingSpeed = 9;
    const interval = setInterval(() => {
      if (showingCount <= 0) {
        clearInterval(interval);
      }
      if (showingCount < showingSpeed) {
        showingCount -= showingCount;
        hiddingContent.current.style.left = `-${showingCount}px`;
        clearInterval(interval);
      }
      showingCount -= showingSpeed;
      hiddingContent.current.style.left = `-${showingCount}px`;
    }, 1);
  };

  const handleSearchClick = (lat, lon, cityName, inputElement) => {
    fetchWeatherData(lat, lon);
    setCityName(cityName);
    inputElement.current.blur();
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
            sideMenuHidding={sideMenuHidding}
            sideMenuShowing={sideMenuShowing}
          />
          <div className="app-wrapper">
            <SideMenu
              isMenuHidden={isMenuHidden}
              setIsMenuHidden={setIsMenuHidden}
              setSearchValue={setSearchValue}
              handleSearchClick={handleSearchClick}
              setCurrentTheme={setCurrentTheme}
              hiddingContent={hiddingContent}
              sideMenuHidding={sideMenuHidding}
            />
            <WeatherDataContext.Provider value={weatherData}>
              <CityNameContext.Provider value={cityName}>
                <div className="container">
                  <RouterPages isLoading={isLoading} />
                </div>
              </CityNameContext.Provider>
            </WeatherDataContext.Provider>
          </div>
        </SearchCityContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;

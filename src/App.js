import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weather/action";
import { GlobalStyle } from "./globalStyles";
import { SearchCityContext } from "./context/SearchCity";
import { ThemeContext, themes } from "./context/Theme";
import { CityNameContext } from "./context/CityName";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import RouterPages from "./router";
import { lightTheme, darkTheme } from "./themes";

// ავტორიზაციის-რეგისტრაციის გვერდი (username, email, password, remember) (auth - localStorage).
// nav-ში ღილაკების გაცენტრვა.
// პაროლი უნდა იყოს დაშიფრული.

const App = () => {
  const [cityName, setCityName] = useState("Tbilisi");
  const [searchValue, setSearchValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes.LIGHT);

  const {
    weather: weatherData,
    loading,
    error,
  } = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  let hiddingContent = useRef();

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    setCurrentTheme(savedTheme);
    dispatch(fetchWeatherData({ lat: 41.6941, lon: 44.8337 }));
  }, [dispatch]);

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
    dispatch(fetchWeatherData({ lat, lon }));
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
            <CityNameContext.Provider value={cityName}>
              <div className="container">
                {error && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{ marginTop: 25 }}
                  >
                    {error}
                  </div>
                )}
                <RouterPages weatherData={weatherData} isLoading={loading} />
              </div>
            </CityNameContext.Provider>
          </div>
        </SearchCityContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;

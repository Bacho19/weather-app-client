import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./store/weather/action";
import { GlobalStyle } from "./globalStyles";
import { SearchCityContext } from "./context/SearchCity";
import { themes } from "./context/Theme";
import { CityNameContext } from "./context/CityName";
import { AuthContext } from "./context/Auth";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import RouterPages from "./router";
import { lightTheme, darkTheme } from "./themes";
import { sideMenuHidding, sideMenuShowing } from "./utils/sideMenu";
import { getCookie } from "./utils/cookies";
import { useAuth } from "./hooks/useAuth";

/*
git push (server, client) +
redux-persist (theme) +
monorepo lerna +
apollo server .env (port, url) +
*/

const App = () => {
  const [cityName, setCityName] = useState("Tbilisi");
  const [searchValue, setSearchValue] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  const { theme } = useSelector((state) => state.theme);

  const {
    weather: weatherData,
    loading,
    error,
  } = useSelector((state) => state.weather);

  const {
    isAuth,
    setIsAuth,
    login,
    loginLoading,
    logout,
    loginError,
    clearErrors,
  } = useAuth();
  const dispatch = useDispatch();
  let hiddingContent = useRef();

  useEffect(() => {
    dispatch(fetchWeatherData({ lat: 41.6941, lon: 44.8337 }));

    const token = getCookie("authToken");
    setIsAuth(!!token);
  }, [dispatch, setIsAuth]);

  const handleSearchClick = (lat, lon, cityName, inputElement) => {
    dispatch(fetchWeatherData({ lat, lon }));
    setCityName(cityName);
    inputElement.current.blur();
  };

  return (
    <ThemeProvider theme={theme === themes.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyle isMenuHidden={isMenuHidden} />
      <AuthContext.Provider
        value={{
          isAuth,
          login,
          logout,
          loginLoading,
          loginError,
          clearErrors,
        }}
      >
        <SearchCityContext.Provider value={searchValue}>
          <Navbar
            isMenuHidden={isMenuHidden}
            setIsMenuHidden={setIsMenuHidden}
            setSearchValue={setSearchValue}
            handleSearchClick={handleSearchClick}
            sideMenuHidding={() => sideMenuHidding(hiddingContent)}
            sideMenuShowing={() => sideMenuShowing(hiddingContent)}
          />
          <div className="app-wrapper">
            <SideMenu
              isMenuHidden={isMenuHidden}
              setIsMenuHidden={setIsMenuHidden}
              setSearchValue={setSearchValue}
              handleSearchClick={handleSearchClick}
              hiddingContent={hiddingContent}
              sideMenuHidding={() => sideMenuHidding(hiddingContent)}
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
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;

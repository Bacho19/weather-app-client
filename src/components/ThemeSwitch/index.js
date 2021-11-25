import React, { useContext } from "react";
import { ThemeContext, themes } from "../../context/Theme";
import { ThemeSwitchWrapper } from "./styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import PropTypes from "prop-types";

const ThemeSwitch = ({ setCurrentTheme }) => {
  const theme = useContext(ThemeContext);
  const handleTheme = () => {
    theme === themes.LIGHT
      ? setCurrentTheme(themes.DARK)
      : setCurrentTheme(themes.LIGHT);
  };

  return (
    <ThemeSwitchWrapper onClick={handleTheme}>
      {theme === themes.LIGHT && (
        <BsFillSunFill style={{ color: "#e3d514", fontSize: 24 }} />
      )}
      {theme === themes.DARK && (
        <BsFillMoonFill style={{ color: "#757575  ", fontSize: 20 }} />
      )}
    </ThemeSwitchWrapper>
  );
};

ThemeSwitch.propTypes = {
  setCurrentTheme: PropTypes.func,
};

export default ThemeSwitch;

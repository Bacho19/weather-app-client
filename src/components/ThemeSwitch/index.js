import React, { useContext } from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import { ThemeSwitchWrapper } from "./styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

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

export default ThemeSwitch;

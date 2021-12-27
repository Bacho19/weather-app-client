import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { themes } from "../../context/Theme";
import { changeTheme } from "../../store/theme/reducer";
import { ThemeSwitchWrapper } from "./styled";

const ThemeSwitch = () => {
  // const theme = useContext(ThemeContext);
  // const handleTheme = () => {
  //   if (theme === themes.LIGHT) {
  //     setCurrentTheme(themes.DARK);
  //     localStorage.setItem("theme", JSON.stringify(themes.DARK));
  //   } else {
  //     setCurrentTheme(themes.LIGHT);
  //     localStorage.setItem("theme", JSON.stringify(themes.LIGHT));
  //   }
  // };

  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(changeTheme());
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

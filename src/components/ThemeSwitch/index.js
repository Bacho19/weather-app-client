import React from "react";
import { ThemeSwitchWrapper } from "./styled";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeSwitch = () => {
  return (
    <ThemeSwitchWrapper>
      <BsFillSunFill style={{ color: "#e3d514", fontSize: 24 }} />
      {/* <BsFillMoonFill style={{ color: "yellow", fontSize: 20 }} /> */}
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;

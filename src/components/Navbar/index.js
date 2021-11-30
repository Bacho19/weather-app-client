import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import PropTypes from "prop-types";

import {
  NavbarContent,
  NavbarWrapper,
  NavbarMenu,
  NavbarResponseMenu,
} from "./styled";

const Navbar = ({
  setIsMenuHidden,
  isMenuHidden,
  setSearchValue,
  handleSearchClick,
  setCurrentTheme,
  sideMenuHidding,
  sideMenuShowing,
}) => {
  const handleNavbarButton = () => {
    setIsMenuHidden((prev) => !prev);
    if (isMenuHidden) {
      sideMenuShowing();
    } else {
      sideMenuHidding();
    }
  };

  return (
    <NavbarWrapper>
      <NavbarContent>
        <Searchbar
          setSearchValue={setSearchValue}
          handleSearchClick={handleSearchClick}
        />
        <NavbarMenu>
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Current
          </NavLink>
          <NavLink
            to="/daily"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Daily
          </NavLink>
          <NavLink
            to="/hourly"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Hourly
          </NavLink>
        </NavbarMenu>
        <ThemeSwitch setCurrentTheme={setCurrentTheme} />
      </NavbarContent>
      <NavbarResponseMenu active={!isMenuHidden} onClick={handleNavbarButton}>
        <AiOutlineMenu style={{ fontSize: 24, color: "#fff" }} />
      </NavbarResponseMenu>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  setIsMenuHidden: PropTypes.func,
  isMenuHidden: PropTypes.bool,
  setSearchValue: PropTypes.func,
  handleSearchClick: PropTypes.func,
  setCurrentTheme: PropTypes.func,
  sideMenuHidding: PropTypes.func,
  sideMenuShowing: PropTypes.func,
};

export default Navbar;

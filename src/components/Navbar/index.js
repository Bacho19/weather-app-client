import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { logoutUser } from "../../store/auth/reducer";
import {
  NavbarContent,
  NavbarWrapper,
  NavbarMenu,
  NavbarResponseMenu,
  NavbarSearchbarWrapper,
  NavbarThemeWrapper,
  LogoutButtonWrapper,
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
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleNavbarButton = () => {
    setIsMenuHidden((prev) => !prev);
    if (isMenuHidden) {
      sideMenuShowing();
    } else {
      sideMenuHidding();
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <NavbarWrapper>
      <NavbarContent>
        {isAuth && (
          <NavbarSearchbarWrapper>
            <Searchbar
              setSearchValue={setSearchValue}
              handleSearchClick={handleSearchClick}
            />
          </NavbarSearchbarWrapper>
        )}
        {isAuth ? (
          <NavbarMenu width="225px">
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
        ) : (
          <NavbarMenu width="155px">
            <NavLink
              to="/login"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Register
            </NavLink>
          </NavbarMenu>
        )}
        {isAuth && (
          <LogoutButtonWrapper>
            <Button color="#1859ae" onClick={handleLogout}>
              Logout
            </Button>
          </LogoutButtonWrapper>
        )}
        <NavbarThemeWrapper>
          <ThemeSwitch setCurrentTheme={setCurrentTheme} />
        </NavbarThemeWrapper>
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

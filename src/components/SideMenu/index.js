import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import { SideMenuWrapper, SideMenuContent, SideMenuNav } from "./styled";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button";
import { logoutUser } from "../../store/auth/action";

const SideMenu = ({
  isMenuHidden,
  setIsMenuHidden,
  setSearchValue,
  handleSearchClick,
  setCurrentTheme,
  hiddingContent,
  sideMenuHidding,
}) => {
  const { isAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuItem = () => {
    setIsMenuHidden(true);
    sideMenuHidding();
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleMenuItem();
    navigate("/");
  };

  return (
    <SideMenuWrapper isHidden={isMenuHidden} ref={hiddingContent}>
      <SideMenuContent>
        {isAuth && (
          <Searchbar
            setSearchValue={setSearchValue}
            handleSearchClick={handleSearchClick}
          />
        )}
        {isAuth ? (
          <SideMenuNav height="140px">
            <NavLink
              to="/"
              onClick={handleMenuItem}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Current
            </NavLink>
            <NavLink
              to="/daily"
              onClick={handleMenuItem}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Daily
            </NavLink>
            <NavLink
              to="/hourly"
              onClick={handleMenuItem}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Hourly
            </NavLink>
          </SideMenuNav>
        ) : (
          <SideMenuNav height="85px">
            <NavLink
              to="/"
              onClick={handleMenuItem}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              onClick={handleMenuItem}
              className={({ isActive }) =>
                isActive ? "menu_item_active" : "menu_item"
              }
            >
              Register
            </NavLink>
          </SideMenuNav>
        )}
        {isAuth && (
          <Button color="#1859ae" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <ThemeSwitch setCurrentTheme={setCurrentTheme} />
      </SideMenuContent>
    </SideMenuWrapper>
  );
};

SideMenu.propTypes = {
  isMenuHidden: PropTypes.bool,
  setIsMenuHidden: PropTypes.func,
  setSearchValue: PropTypes.func,
  handleSearchClick: PropTypes.func,
  setCurrentTheme: PropTypes.func,
  hiddingContent: PropTypes.object,
  sideMenuHidding: PropTypes.func,
};

export default SideMenu;

import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import { SideMenuWrapper, SideMenuContent, SideMenuNav } from "./styled";

const SideMenu = ({
  isMenuHidden,
  setIsMenuHidden,
  setSearchValue,
  handleSearchClick,
  setCurrentTheme,
}) => {
  return (
    <SideMenuWrapper isHidden={isMenuHidden}>
      <SideMenuContent>
        <Searchbar
          setSearchValue={setSearchValue}
          handleSearchClick={handleSearchClick}
        />
        <SideMenuNav>
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuHidden(true);
            }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Current
          </NavLink>
          <NavLink
            to="/daily"
            onClick={() => {
              setIsMenuHidden(true);
            }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Daily
          </NavLink>
          <NavLink
            to="/hourly"
            onClick={() => {
              setIsMenuHidden(true);
            }}
            className={({ isActive }) =>
              isActive ? "menu_item_active" : "menu_item"
            }
          >
            Hourly
          </NavLink>
        </SideMenuNav>
        <ThemeSwitch setCurrentTheme={setCurrentTheme} />
      </SideMenuContent>
    </SideMenuWrapper>
  );
};

export default SideMenu;

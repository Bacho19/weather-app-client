import React from "react";
import { NavbarMenuItem } from "../Navbar/styled";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import { SideMenuWrapper, SideMenuContent, SideMenuNav } from "./styled";

const SideMenu = ({ isMenuHidden }) => {
  return (
    <SideMenuWrapper isHidden={isMenuHidden}>
      <SideMenuContent>
        <Searchbar />
        <SideMenuNav>
          <NavbarMenuItem href="#" active>
            Current
          </NavbarMenuItem>
          <NavbarMenuItem href="#">Daily</NavbarMenuItem>
          <NavbarMenuItem href="#">Hourly</NavbarMenuItem>
        </SideMenuNav>
        <ThemeSwitch />
      </SideMenuContent>
    </SideMenuWrapper>
  );
};

export default SideMenu;

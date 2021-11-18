import React from "react";
import Searchbar from "../Searchbar";
import ThemeSwitch from "../ThemeSwitch";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavbarContent,
  NavbarWrapper,
  NavbarMenu,
  NavbarMenuItem,
  NavbarResponseMenu,
} from "./styled";

const Navbar = ({ setIsMenuHidden, isMenuHidden }) => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        <Searchbar />
        <NavbarMenu>
          <NavbarMenuItem active href="#">
            Current
          </NavbarMenuItem>
          <NavbarMenuItem href="#">Daily</NavbarMenuItem>
          <NavbarMenuItem href="#">Hourly</NavbarMenuItem>
        </NavbarMenu>
        <ThemeSwitch />
      </NavbarContent>
      <NavbarResponseMenu
        active={!isMenuHidden}
        onClick={() => setIsMenuHidden((prev) => !prev)}
      >
        <AiOutlineMenu style={{ fontSize: 24, color: "#fff" }} />
      </NavbarResponseMenu>
    </NavbarWrapper>
  );
};

export default Navbar;

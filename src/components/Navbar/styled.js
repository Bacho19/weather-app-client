import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue);
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const NavbarContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 2.5%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

export const NavbarSearchbarWrapper = styled.div`
  position: absolute;
  left: 0;
`;

export const NavbarThemeWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const LogoutButtonWrapper = styled.div`
  position: absolute;
  right: 70px;
`;

export const NavbarResponseMenu = styled.div`
  width: 42px;
  height: 42px;
  display: none;
  margin: 0 2.5%;
  border-radius: 50%;
  margin-left: auto;
  background-color: ${(props) => props.active && "rgba(255, 255, 255, 0.1)"};
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

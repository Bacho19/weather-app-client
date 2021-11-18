import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d70b2;
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2.5%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 220px;
`;

export const NavbarMenuItem = styled.a`
  font-size: 14px;
  text-decoration: none;
  background-color: ${(props) => (props.active ? "#fff" : "none")};
  color: ${(props) => (props.active ? "#3d70b2" : "#fff")};
  border: 1px solid #fff;
  padding: 5px 10px;
  /* margin-right: 25px; */
  transition: 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background-color: #fff;
    color: #3d70b2;
  }
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

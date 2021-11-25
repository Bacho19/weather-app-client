import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  position: fixed;
  left: ${(props) => (props.isHidden ? "-100%" : "0")};
  height: 100%;
  width: 100%;
  background-color: var(--side-menu-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  @media only screen and (min-width: 768px) {
    left: -100%;
  }
`;

export const SideMenuContent = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideMenuNav = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

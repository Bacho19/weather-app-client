import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  position: fixed;
  left: -100%;
  height: 100%;
  width: 100%;
  background-color: var(--side-menu-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  @media only screen and (min-width: 768px) {
    left: -100% !important;
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
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

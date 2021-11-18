import styled from "styled-components";

export const SideMenuWrapper = styled.div`
  position: fixed;
  top: 60px;
  left: ${(props) => (props.isHidden ? "-100%" : "0")};
  height: calc(100% - 60px);
  width: 100%;
  background-color: #6594a8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`;

export const SideMenuContent = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideMenuNav = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

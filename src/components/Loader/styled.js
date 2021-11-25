import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 6px solid var(--side-menu-color);
    border-radius: 50%;
    animation: ${rotate} 1.3s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--side-menu-color) transparent transparent transparent;
    &::nth-child(1) {
      animation-delay: -0.45s;
    }
    &::nth-child(2) {
      animation-delay: -0.3s;
    }
    &::nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

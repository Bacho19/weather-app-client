import styled from "styled-components";

export const AuthTitle = styled.h2`
  color: var(--dark-blue);
  font-size: 55px;
  font-weight: bold;
  margin: 120px 0 20px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RememberLabel = styled.label`
  display: block;
  margin: 5px 0 10px;
  cursor: pointer;
`;

export const RememberLabelText = styled.span`
  color: var(--side-menu-color);
  font-weight: 700;
  margin-left: 5px;
`;

export const LoginErrorMessage = styled.div`
  margin: 30px 0 -104px;
`;

import styled from "styled-components";

export const CustomButton = styled.button`
  border: none;
  background-color: ${(props) => props.color};
  color: var(--white);
  padding: 7px 15px;
  border-radius: 4px;
  &:disabled {
    background-color: var(--disabled-button-color);
  }
`;

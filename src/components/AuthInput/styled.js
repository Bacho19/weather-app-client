import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: none;
  width: 400px;
  height: 40px;
  box-shadow: 0 0 4px var(--dark-blue);
  border-radius: 4px;
  padding-left: 11px;
  background-color: var(--white);
  margin-bottom: 14px;
  transition: box-shadow 0.2s ease;
  &:focus {
    box-shadow: 0 0 7px var(--dark-blue);
  }
  @media only screen and (max-width: 472px) {
    width: 320px;
  }
  @media only screen and (max-width: 372px) {
    width: 270px;
  }
`;

import styled from "styled-components";

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  height: 28px;
  width: 270px;
  border-radius: 15px;
`;

export const SearchbarInput = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.fontColor};
  padding: 0 5px;
  margin-left: 8px;
  width: 85%;
`;

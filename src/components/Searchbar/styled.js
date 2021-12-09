import styled from "styled-components";

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--white);
  height: 28px;
  width: 270px;
  border-radius: 15px;
  @media (max-width: 935px) {
    width: 200px;
  }
`;

export const SearchbarInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--white);
  color: var(--font-color);
  padding: 0 5px;
  margin-left: 8px;
  width: 85%;
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
  }

  body {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.fontColor};
    background-color:  ${(props) => props.theme.body};
    transition: all 0.5s ease;
  }
  .app_wrapper {
  position: "relative";
  }
  ::placeholder {
    color: ${(props) => props.theme.fontColor};
  }
  .container {
    padding: 0 2.5%;
    padding-top: 25px;
  }

  .menu_item {
    font-size: 14px;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    padding: 5px 10px;
    transition: 0.3s;
  }

  .menu_item:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.darkBlue};
  }

  .menu_item_active {
    font-size: 14px;
    text-decoration: none;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.darkBlue};
    border: 1px solid ${(props) => props.theme.white};
    padding: 5px 10px;
    transition: 0.3s;
  }
`;

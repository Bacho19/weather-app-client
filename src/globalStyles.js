import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: ${(props) => props.theme.bgColor};
    --font-color: ${(props) => props.theme.fontColor};
    --dark-blue: ${(props) => props.theme.darkBlue};
    --white: ${(props) => props.theme.white};
    --side-menu-color: ${(props) => props.theme.sideMenuColor};
    --button-color: ${(props) => props.theme.buttonColor};
    --disabled-button-color: ${(props) => props.theme.disabledButtonColor};
  }
   
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    color: var(--font-color);
    background-color:  var(--bg-color);
    overflow-y:  ${(props) => (props.isMenuHidden ? "auto" : "hidden")};
  }
  .app_wrapper {
  position: "relative";
  }
  ::placeholder {
    color: var(--font-color);
  }
  .custom-container {
    padding: 0 2.5%;
    padding-top: 45px;
  }

  .menu_item {
    font-size: 14px;
    text-decoration: none;
    color:  var(--white);
    border: 1px solid  var(--white);
    padding: 5px 10px;
    transition: 0.3s;
  }

  .menu_item:hover {
    background-color:  var(--white);
    color: var(--dark-blue);
  }

  .menu_item_active {
    font-size: 14px;
    text-decoration: none;
    background-color: var(--white);
    color:  var(--dark-blue);
    border: 1px solid var(--white);
    padding: 5px 10px;
    transition: 0.3s;
  }

  /* .weather-cards_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    grid-column-gap: 35px;
    justify-content: space-around;
    margin-top: 30px;
  } */

  .page-name__title {
    font-size: 38px;
    display: inline-block;
    background-color: var(--dark-blue);
    margin-top: 35px;
    color: var(--white);
    padding: 6px 18px;
    border-radius: 7px;
  }
`;

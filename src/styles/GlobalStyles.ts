import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.gray500};
  }

  button {
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.gray500};
  }
`;

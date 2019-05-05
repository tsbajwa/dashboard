import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    padding: 0;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`


export default GlobalStyle;
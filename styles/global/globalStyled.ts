import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #1f1e1d;
    font-size: 16px;
    color: #e6e3e1;
    font-family: 'Montserrat', sans-serif;
  }
`
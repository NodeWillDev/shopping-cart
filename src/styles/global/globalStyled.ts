import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #bdbbbb;
    font-size: 16px;
    color: #303030;
    font-family: 'Montserrat', sans-serif;
  }
`
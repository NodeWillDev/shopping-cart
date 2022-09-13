import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #3d3d3d;
    font-size: 16px;
    color: #fcfcfc;
    font-family: 'Montserrat', sans-serif;
  }
`
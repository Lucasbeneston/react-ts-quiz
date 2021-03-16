import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCSS";
import base from "./base";

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
  ${base}
`;

export default GlobalStyle;

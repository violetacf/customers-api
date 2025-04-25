import { createGlobalStyle } from "styled-components";
import { setTypography } from "$/ui/styles/mixins";
import {
  borderRadius,
  topiFont,
  colors,
  transitions,
  fontWeights,
} from "$/ui/styles/tokens/tokens";

export const GlobalStyleCheckout = createGlobalStyle`
  @font-face {
    font-family: "Readex Pro";
    src: url(${topiFont}) format("truetype-variations");
    /* The next line needs to be set or the font weights will be ignored (https://clagnut.com/blog/2390/) */
    font-weight: 1 999;
  }

  *,
  *::before, *::after,
  *:before, *:after {
    box-sizing: border-box;
  }

  body{
    background-color: ${colors.white};
    color: ${colors.grey90};
    ${setTypography("body1")}
    margin: 0;
    padding: 0;

    /* Hack to avoid a bug on webkit when using min-height: 100vh making a scrollbar
     appear due to margin collapsing yielding a longer height.
     See: https://stackoverflow.com/questions/48313396/html-body-padding-margin-100vh-and-calc
    */
    &::after {
      content: "" ;
      display: block;
      height: 0px ;
    }
  }

  p,
  dl, dd, dt,
  menu,
  ul, ol, li,
  h1, h2, h3, h4, h5, h6{
      padding: 0;
      margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
      font-weight:normal;
      font-size: 100%;
  }

  b, strong {
    font-weight: ${fontWeights.medium};
  }

  a {
    color: ${colors.topiBlue50};
    transition: ${transitions.fast} color;
    text-decoration: none;
    &:hover {
      color: ${colors.topiBlue60};
      text-decoration: underline;
    }

    &:focus-visible {
      outline-color: ${colors.topiBlue50};
      border-radius: ${borderRadius.s};
    }
  }

  dl,
  dd,
  menu,
  ul {
      list-style: none;
  }

  ol{
      list-style-type: decimal;
  }

  img {
      max-width: 100%;
      height: auto;
      border-style: none;
  }

  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

`;

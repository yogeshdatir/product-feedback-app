import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

  * {
    box-sizing: border-box;
    font-family: jost, sans-serif;
    padding: 0;
    margin: 0;
  }

  body {
    max-width: 1110px;
    margin: 0 auto;
    padding: 4rem 0;
    background: #f2f2f2;

    @media only screen and (max-width: 1109px) {
      max-width: 689px;
      margin: 0 auto;
      padding: 3rem 0;
    }
  }

  a {
    text-decoration: none;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
    font-family: "Roboto Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    background-image: url("./public/img/bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: #364701;
  }


  button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul,
li {
  list-style: none;
}
`;

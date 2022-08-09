import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "segoe UI";
  line-height: 1.7rem;
  background-color: #000;
  color: #fff;
}

li {
  cursor: pointer;
}
`;

export default GlobalStyle;

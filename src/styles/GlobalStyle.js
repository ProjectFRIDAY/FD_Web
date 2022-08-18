import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
@font-face {
  font-family: 'SegoeUI';
  src: url('../assets/fonts/SegoeUI.TTF') format('woff2'),
      url('../assets/fonts/SegoeUI.TTF') format('woff'),
      url('../assets/fonts/SegoeUI.TTF') format('truetype');
}
@font-face {
    font-family: 'TimesNewRomanPSMT';
    src: url('../../assets/fonts/TimesNewRomanPSMT.ttf') format('woff2'), 
    url('../../assets/fonts/TimesNewRomanPSMT.ttf') format('woff'), 
    url('../../assets/fonts/TimesNewRomanPSMT.ttf') format('truetype');
  }

body {
  margin: 0;
  padding: 0;
  font-family: 'SegoeUI';
  line-height: 1.7rem;
  background-color: #000;
  color: #fff;
}
.page {
  margin-top: 4rem;
}
.title {
  font-family: 'TimesNewRomanPSMT';
  font-weight: normal;
}
`;

export default GlobalStyle;

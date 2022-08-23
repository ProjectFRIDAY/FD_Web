import { createGlobalStyle } from 'styled-components';
import SegoeUI from '../assets/fonts/SegoeUI.TTF';
import Times from '../assets/fonts/TimesNewRomanPSMT.ttf';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
} 
@font-face {
  font-family: 'SegoeUI', sans-serif;
  src: url(${SegoeUI}) format('woff2'),
      url(${SegoeUI}) format('woff'),
      url(${SegoeUI}) format('truetype');
}
@font-face {
    font-family: 'TimesNewRomanPSMT';
    src: url(${Times}) format('woff2'), 
    url(${Times}) format('woff'), 
    url(${Times}) format('truetype');
  }

body {
  margin: 0;
  padding: 0;
  font-family: 'SegoeUI', sans-serif;
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

.icon {
  cursor: pointer;
  font-size: 40px;
  color: black;
  position: absolute;
  right: 0;
  padding: 25px;
}
`;

export default GlobalStyle;

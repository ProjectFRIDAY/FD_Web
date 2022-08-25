import { createGlobalStyle } from 'styled-components';
import SegoeTTF from '../assets/fonts/SegoeUI.TTF';
import SegoeEot from '../assets/fonts/SegoeUI.eot';
import SegoeWoff from '../assets/fonts/SegoeUI.woff';
import SegoeWoff2 from '../assets/fonts/SegoeUI.woff2';
import TimesTTF from '../assets/fonts/TimesNewRomanMTStd.ttf';
import TimesEot from '../assets/fonts/TimesNewRomanMTStd.eot';
import TimesWoff from '../assets/fonts/TimesNewRomanMTStd.woff';
import TimesWoff2 from '../assets/fonts/TimesNewRomanMTStd.woff2';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
} 
@font-face {
  font-family: 'SegoeUI', sans-serif;
  src: url(${SegoeWoff2}) format('woff2'),
      url(${SegoeWoff}) format('woff'),
      url(${SegoeTTF}) format('truetype'),
      url(${SegoeEot}+'?iefix') format('embedded-opentype');
}
@font-face {
    font-family: 'TimesNewRomanPSMT';
    src: url(${TimesWoff2}) format('woff2'), 
    url(${TimesWoff}) format('woff'), 
    url(${TimesTTF}) format('truetype'),
    url(${TimesEot}+'?iefix') format('embedded-opentype');
  }

body {
  margin: 0;
  padding: 0;
  font-family: 'SegoeUI', sans-serif;
  line-height: 1.7rem;
  background-color: #000;
  text-decoration: none;
  color: #fff;
}

.page {
  margin-top: 5rem;
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
  top: 0;
  padding: 25px;
}
`;

export default GlobalStyle;

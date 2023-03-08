import { createGlobalStyle } from 'styled-components';

const SegoeTTF = '/assets/fonts/SegoeUI.TTF';
const SegoeEot = '/assets/fonts/SegoeUI.eot';
const SegoeWoff = '/assets/fonts/SegoeUI.woff';
const SegoeWoff2 = '/assets/fonts/SegoeUI.woff2';
const TimesTTF = '/assets/fonts/TimesNewRomanMTStd.ttf';
const TimesEot = '/assets/fonts/TimesNewRomanMTStd.eot';
const TimesWoff = '/assets/fonts/TimesNewRomanMTStd.woff';
const TimesWoff2 = '/assets/fonts/TimesNewRomanMTStd.woff2';
const TossFace = '/assets/fonts/TossFaceFontMac.ttf';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
} 
@font-face {
  font-family: 'SegoeUI', sans-serif;
  src: url(${SegoeTTF}) format('truetype');
  src: 
  url(${SegoeWoff}) format('woff'),
  url(${SegoeWoff2}) format('woff2'),
      url(${SegoeEot}+'?iefix') format('embedded-opentype');
}
@font-face {
    font-family: 'TimesNewRomanMTStd';
    src: url(${TimesTTF}) format('truetype');
    src: 
    url(${TimesWoff}) format('woff'), 
    url(${TimesWoff2}) format('woff2'), 
    url(${TimesEot}+'?#iefix') format('embedded-opentype');
  }
@font-face {
    font-family: 'TossFace';
    src: url(${TossFace}) format('truetype');
  }

body {
  max-width:100%;
  margin: 0;
  padding: 0;
  font-family: 'SegoeUI', sans-serif;
  line-height: 1.7rem;
  background-color: #000;
  text-decoration: none;
  color: #fff;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

a:link { 
 text-decoration: none;
}
 
a:visited { 
 text-decoration: none;
}
 
a:hover { 
 text-decoration: none;
}
.title {
  font-family: 'TimesNewRomanMTStd';
  font-weight: normal;
  /* margin-top: 30px; */
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

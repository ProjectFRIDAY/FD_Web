import { css } from 'styled-components';

const SegoeTTF = '/assets/fonts/SegoeUI.TTF';
const SegoeEot = '/assets/fonts/SegoeUI.eot';
const SegoeWoff = '/assets/fonts/SegoeUI.woff';
const SegoeWoff2 = '/assets/fonts/SegoeUI.woff2';
const TimesTTF = '/assets/fonts/TimesNewRomanMTStd.ttf';
const TimesEot = '/assets/fonts/TimesNewRomanMTStd.eot';
const TimesWoff = '/assets/fonts/TimesNewRomanMTStd.woff';
const TimesWoff2 = '/assets/fonts/TimesNewRomanMTStd.woff2';
const TossFace = '/assets/fonts/TossFaceFontMac.ttf';

const FontStyle = css`
  /* ===== Fonts ===== */
  @font-face {
    font-family: 'SegoeUI', sans-serif;
    src: url(${SegoeTTF}) format('truetype');
    src: url(${SegoeWoff}) format('woff'), url(${SegoeWoff2}) format('woff2'),
      url(${SegoeEot}+'?iefix') format('embedded-opentype');
  }
  @font-face {
    font-family: 'TimesNewRomanMTStd';
    src: url(${TimesTTF}) format('truetype');
    src: url(${TimesWoff}) format('woff'), url(${TimesWoff2}) format('woff2'),
      url(${TimesEot}+'?#iefix') format('embedded-opentype');
  }
  @font-face {
    font-family: 'TossFace';
    src: url(${TossFace}) format('truetype');
  }
`;

export default FontStyle;

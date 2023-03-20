import { createGlobalStyle } from 'styled-components';
import FontStyle from './FontStyle';
import NotionStyle from './NotionStyle';
import ElementStyle from './ElementStyle';
import SlickSliderStyle from './SlickSliderStyle';

const GlobalStyle = createGlobalStyle`
  ${FontStyle}
  ${ElementStyle}
  ${NotionStyle}
  ${SlickSliderStyle}
`;

export default GlobalStyle;

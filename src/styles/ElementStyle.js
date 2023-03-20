import { css } from 'styled-components';

const ElementStyle = css`
  /* ===== Box sizing rules ===== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* ===== Default styles ===== */
  body {
    max-width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'SegoeUI', sans-serif;
    line-height: 1.7rem;
    background-color: #000;
    text-decoration: none;
    color: #fff;
  }
  .title {
    font-family: 'TimesNewRomanMTStd';
    font-weight: normal;
  }
  img {
    object-fit: cover;
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
  ::selection {
    background-color: rgba(1, 185, 173, 0.5);
  }

  /* ===== Remove link underline ===== */
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;

export default ElementStyle;

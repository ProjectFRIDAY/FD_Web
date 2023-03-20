import { css } from 'styled-components';

const NotionStyle = css`
  /* ===== Notion blog ===== */
  .notion-page-header {
    display: none;
  }
  .notion {
    color: #eee;
    caret-color: #eee;
    width: 100%;
  }
  .notion b {
    font-weight: 700;
    text-decoration: underline;
  }
  .notion-emoji {
    font-family: 'TossFace', 'Apple Color Emoji', 'SegoeUISymbol', sans-serif;
  }

  /* ===== Notion color ===== */
  .notion-gray {
    color: #aaa;
  }
  .notion-brown {
    color: #c1a294;
  }
  .notion-orange {
    color: #f5ab60;
  }
  .notion-yellow {
    color: #eed06d;
  }
  .notion-teal {
    color: #79e2d4;
  }
  .notion-blue {
    color: #67c9f4;
  }
  .notion-purple {
    color: #a479e1;
  }
  .notion-pink {
    color: #ea71b9;
  }
  .notion-red {
    color: #e87272;
  }

  /* ===== Notion background color ===== */
  .notion-gray_background {
    background-color: #707070;
  }
  .notion-brown_background {
    background-color: #55423a;
  }
  .notion-orange_background {
    background-color: #6b3c10;
  }
  .notion-yellow_background {
    background-color: #85680f;
  }
  .notion-teal_background {
    background-color: #23433d;
  }
  .notion-blue_background {
    background-color: #204c60;
  }
  .notion-purple_background {
    background-color: #463064;
  }
  .notion-pink_background {
    background-color: #6a254c;
  }
  .notion-red_background {
    background-color: #720808;
  }
`;

export default NotionStyle;

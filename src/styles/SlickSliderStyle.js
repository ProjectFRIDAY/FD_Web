import { css } from 'styled-components';

const SlickSliderStyle = css`
  /* ===== Slick slider ===== */
  .slick-prev {
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export default SlickSliderStyle;
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';
import MyLink from '../components/MyLink';

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  gradient: PropTypes.bool,
  border: PropTypes.bool,
};

Button.defaultProps = {
  color: '#01baae',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  gradient: false,
  border: false,
};

const StyledButton = styled.span`
  ${props => {
    const COLOR = props.color;
    const BACKGROUND_COLOR = props.backgroundColor;
    const BORDER = props.border;
    const GRADIENT = props.gradient;
    return css`
      /* 공통 스타일 */
      display: inline-block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 10px;
      color: ${COLOR};
      font-weight: bold;
      cursor: pointer;
      text-align: center;
      padding: 0.5rem 1rem;
      ${BORDER &&
      css`
        border: 2px solid;
        border-color: ${COLOR};
      `}
      /* 크기 */
      height: auto;
      font-size: 1rem;
      /* 색상 */
      background-color: ${BACKGROUND_COLOR};
      ${GRADIENT &&
      css`
        background-image: linear-gradient(180deg, ${BACKGROUND_COLOR}, ${darken(0.2, BACKGROUND_COLOR)});
      `}
      &:hover {
        color: ${lighten(0.05, COLOR)};
      }
      &:active {
        color: ${darken(0.1, COLOR)};
      }
    `;
  }}
`;

function Button({ children, href, ...rest }) {
  if (href) {
    children = (<MyLink href={href} fontSize="1rem" color="#01baae">{children}</MyLink>);
  }
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

MyLink.propTypes = {
  color: PropTypes.string,
  navigation: PropTypes.bool,
  fontSize: PropTypes.number,
  navFontSize: PropTypes.number,
  hoverColor: PropTypes.string,
};

MyLink.defaultProps = {
  color: 'white',
  navigation: true,
  fontSize: '1.5rem',
  navFontSize: '1rem',
  hoverColor: '#01B9AD',
};

const StyledLink = styled(Link)`
  ${props => {
    const COLOR = props.color;
    const NAVIGATION = props.navigation;
    const FONT_SIZE = props.fontSize;
    const NAV_FONT_SIZE = props.navFontSize;
    const HOVER_COLOR = props.hoverColor;
    return css`
      color: ${COLOR};
      font-size: ${FONT_SIZE};
      text-decoration: none;
      vertical-align: middle;
      transition: 0.2s;
      ${NAVIGATION &&
      css`
        font-size: ${NAV_FONT_SIZE};
        @media only screen and (max-width: 800px) {
          display: none;
        }
      `}
      :hover {
        color: ${HOVER_COLOR};
      }
    `;
  }}
`;

function MyLink({ children, ...args }) {
  return <StyledLink {...args}>{children}</StyledLink>;
}

export default MyLink;

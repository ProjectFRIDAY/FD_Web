import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

MyLink.propTypes = {
  color: PropTypes.string,
  navigation: PropTypes.bool,
  fontSize: PropTypes.number,
  navFontSize: PropTypes.number,
};

MyLink.defaultProps = {
  color: 'white',
  navigation: true,
  fontSize: '1.5rem',
  navFontSize: '1rem',
};

const StyledLink = styled(Link)`
  ${props => {
    const COLOR = props.color;
    const NAVIGATION = props.navigation;
    const FONT_SIZE = props.fontSize;
    const NAV_FONT_SIZE = props.navFontSize;
    return css`
      color: ${COLOR};
      font-size: ${FONT_SIZE};
      text-decoration: none;
      ${NAVIGATION &&
      css`
        font-size: ${NAV_FONT_SIZE};
        :hover {
          color: ${darken(0.2, COLOR)};
        }
        @media only screen and (max-width: 800px) {
          display: none;
        }
      `}
    `;
  }}
`;

function MyLink({ children, ...args }) {
  return <StyledLink {...args}>{children}</StyledLink>;
}

export default MyLink;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

MyLink.propTypes = {
  color: PropTypes.string,
  navigation: PropTypes.bool,
};

MyLink.defaultProps = {
  color: 'white',
  navigation: true,
};

const StyledLink = styled(Link)`
  ${props => {
    const COLOR = props.color;
    const NAVIGATION = props.navigation;
    return css`
      color: ${COLOR};
      font-size: 1.5rem;
      text-decoration: none;
      ${NAVIGATION &&
      css`
        font-size: 1rem;
        :hover {
          color: ${darken(0.2, COLOR)};
        }
        @media only screen and (max-width: 700px) {
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

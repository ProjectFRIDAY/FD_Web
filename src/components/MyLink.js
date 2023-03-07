import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const StyledLink = styled(Link)`
  ${props => {
    const COLOR = props.color ?? 'white';
    const FONT_SIZE = props.fontSize ?? '1.5rem';
    const HOVER_COLOR = props.hoverColor ?? '#01B9AD';
    return css`
      color: ${COLOR};
      font-size: ${FONT_SIZE};
      text-decoration: none;
      vertical-align: middle;
      transition: 0.2s;
      :hover {
        color: ${HOVER_COLOR};
      }
    `;
  }}
`;

function MyLink({ children, to, ...args }) {
  return <StyledLink href={to} {...args}>{children}</StyledLink>;
}

export default MyLink;

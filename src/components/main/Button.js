import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

const PRIMARY_COLOR = props => props.theme.primaryColor;
const COLOR = props => props.color;
const BACK_COLOR = props => props.backgroundColor;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 10px;
  color: ${COLOR || PRIMARY_COLOR}; // PRIMARY_COLOR 작동 안하는듯..
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding-top: 3px;
  padding-left: 1rem;
  padding-right: 1rem;
  ${props =>
    props.border &&
    css`
      border: 1px solid;
      border-color: ${COLOR || PRIMARY_COLOR};
    `}
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;
  /* 색상 */
  background-color: ${BACK_COLOR || 'black'};
  ${props =>
    props.gradient &&
    css`
      background-image: linear-gradient(180deg, ${PRIMARY_COLOR}, ${darken(0.2, '#01baae')});
    `}
  &:hover {
    color: ${lighten(0.1, '#01baae')};
  }
  &:active {
    color: ${darken(0.1, '#01baae')};
  }
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

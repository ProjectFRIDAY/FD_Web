import React from 'react';
import styled, { css } from 'styled-components';

const AnimationContainer = styled.div`
  position: relative;
  // flex-flow: column wrap;
  // justify-content: center;
  // align-item: center;
  height: 600px;
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #036660 100%);
  text-align: center;
`;

const AnimationText = styled.div`
  ${props => {
    const PRIMARY_COLOR = props.theme.primaryColor;
    const BACKGROUND_TEXT = props.backgroundText;
    const UPPERCASE = props.upperCase;
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: bold;
      color: ${PRIMARY_COLOR};
      ${BACKGROUND_TEXT &&
      css`
        font-size: 200px;
        opacity: 20%;
      `}
      ${UPPERCASE && css``}
    `;
  }}
`;

function Animation() {
  return (
    <AnimationContainer>
      <AnimationText backgroundText>DAY</AnimationText>
      <AnimationText>asd</AnimationText>
      <AnimationText>asdd</AnimationText>
    </AnimationContainer>
  );
}

export default Animation;

import React from 'react';
import styled, { css } from 'styled-components';

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  height: 600px;
`;

const GradientBackground = styled.div`
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #036660 100%);
  display: flex;
  justify-content: center;
  height: inherit;
  position: relative;
`

const TextContainer = styled.div`
  height: auto;
  display: inline-flex;
  flex-direction: column;
  align-item: center;
  position: absolute;
  top: 50%;
  transform: translate(10%, -40%);
`

const BackgroundText = styled.div`
  ${props => {
    const PRIMARY_COLOR = props.theme.primaryColor;
    const BACKGROUND_TEXT = props.backgroundText;
    const UPPERCASE = props.upperCase;
    return css`
      height: auto;
      position: absolute;
      top: 50%;
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

const UpperText = styled.div`
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
  font-size: 5rem;
  text-align: left;
  margin: 1.5rem;
`

const LowerText = styled.span`
  color: white;
  font-size: 4rem;
`

const PlainText = styled.span`
  color: white;
  font-size: 1rem;
  margin: 1.5rem; 
`



function Animation() {
  return (
    <Positioner>
      <GradientBackground>
        <BackgroundText backgroundText>DAY</BackgroundText>
        <TextContainer>
          <UpperText>F<LowerText>ocus on</LowerText></UpperText>
          <UpperText>R<LowerText>eal</LowerText></UpperText>
          <UpperText>I<LowerText>ssue</LowerText></UpperText>
          <PlainText>사용자들이 불편해하는 실제 문제점을 찾아 해결하는데 집중합니다.</PlainText>
        </TextContainer>
      </GradientBackground>
    </Positioner>
  );
}

export default Animation;

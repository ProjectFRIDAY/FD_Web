import React from 'react';
import styled, { css } from 'styled-components';
import MainVideo from './MainVideo';
import Button from './Button';

const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  font-size: 15vw;
`;

const PButton = styled(Button)`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2vw;
  z-index: 1;
`;

function MainTop() {
  return (
    <>
      <MainVideo>
        <StyledH1>
          FRIDAY
          <PButton color={'#fff'} border={true} gradient={false}>
            10기 지원하기 →
          </PButton>
        </StyledH1>
      </MainVideo>
    </>
  );
}

export default MainTop;

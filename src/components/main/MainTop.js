import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import MainVideo from './MainVideo';
import Button from './Button';

const Friday = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  font-size: 100%;
`;

function MainTop() {
  return (
    <>
      <MainVideo>
        <Friday>FRIDAY</Friday>
      </MainVideo>
      <Button color={'#fff'} border={true} gradient={false}>
        10기 지원하기 →
      </Button>
    </>
  );
}

export default MainTop;

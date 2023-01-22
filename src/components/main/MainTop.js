import React from 'react';
import styled from 'styled-components';
import MainVideo from './MainVideo';
import Button from '../Button';

const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  font-size: 15vw;
`;

const MyButton = styled(Button)`
  position: absolute;
  margin-top: 1rem;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5vw;
  z-index: 1;
`;

function MainTop() {
  return (
    <>
      <MainVideo>
        <StyledH1 className="title">FRIDAY</StyledH1>
        <MyButton
          href="https://the-form.io/forms/survey/response/829a9b33-b74a-44d8-810b-22edea79a3ef"
          target="_blank"
          color={'#01baae'}
          backgroundColor={'white'}
          border={true}
        >
          4.5기 지원하기
        </MyButton>
      </MainVideo>
    </>
  );
}

export default MainTop;

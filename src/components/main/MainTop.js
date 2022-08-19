import React from 'react';
import styled from 'styled-components';
import MainVideo from './MainVideo';
import Button from './Button';

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
          href="https://wjsalsrb5.typeform.com/friday-apply"
          target="_blank"
          color={'white'}
          border={true}
          gradient={false}
        >
          10기 지원하기
        </MyButton>
      </MainVideo>
    </>
  );
}

export default MainTop;

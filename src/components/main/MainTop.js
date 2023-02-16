import React from 'react';
import styled from 'styled-components';
import MainVideo from './MainVideo';
import Button from '../Button';
import Lottie from 'react-lottie';
import Scroll from '../../lottie/scroll.json';

const TopContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -20%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: 15vw;
  margin-bottom: 5vw;
`;

const MyButton = styled(Button)`
  font-size: 1rem;
  z-index: 1;
`;

const AnimationContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
`;

function MainTop() {
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Scroll,
  };

  return (
    <>
      <MainVideo>
        <TopContainer>
          <StyledTitle className="title">FRIDAY</StyledTitle>
          <MyButton
            onClick={() => alert('5기 모집 기간이 아닙니다.')}
            target="_blank"
            color={'#01baae'}
            backgroundColor={'white'}
            border={true}
          >
            5기 지원하기
          </MyButton>
          <AnimationContainer>
            <Lottie options={defaultLottieOptions} width={600}isClickToPauseDisabled/>
          </AnimationContainer>
        </TopContainer>
      </MainVideo>
    </>
  );
}

export default MainTop;

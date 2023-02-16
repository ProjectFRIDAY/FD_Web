import React from 'react';
import { useSetRecoilState } from 'recoil';
import Lottie from 'react-lottie';
import FridayAnimation from '../lottie/friday.json';
import ProjectIntro from '../components/main/ProjectIntro';
import PhilosophyText from '../components/main/PhilosophyText';
import styled from 'styled-components';
import Button from '../components/Button';
import MainTop from '../components/main/MainTop';
import Review from '../components/main/Review';
import { menuAtom } from '../recoil/atom';
import ScrollAnimation from '../components/ScrollAnimation';

const MainBottom = styled.div`
  margin: 26rem auto;
  text-align: center;
  font-size: 3vw;
`;

const GradientContainer = styled.div`
  padding: 5vh 0;
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #024D48 100%);
`;

function Main() {
  const setMenu = useSetRecoilState(menuAtom);
  const settings = {
    animateIn: 'zoomIn',
    animateOnce: false,
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FridayAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      {setMenu(1)}
      <MainTop />
      <GradientContainer>
        <Lottie options={defaultOptions} height="90vh" isClickToPauseDisabled/>
      </GradientContainer>
      <PhilosophyText />
      <ProjectIntro />
      <Review />
      <ScrollAnimation {...settings}>
        <MainBottom>
          <h1>Open Up Your Ideas</h1>
          <Button
            onClick={() => alert('5기 모집 기간이 아닙니다.')}
            target="_blank"
            backgroundColor={'#01baae'}
            color={'white'}
            gradient
          >
            5기 지원하기
          </Button>
        </MainBottom>
      </ScrollAnimation>
    </div>
  );
}

export default Main;

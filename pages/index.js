import React from 'react';
import { useSetRecoilState } from 'recoil';
import Lottie from 'react-lottie';
import ProjectIntro from '../src/components/main/ProjectIntro';
import PhilosophyText from '../src/components/main/PhilosophyText';
import styled from 'styled-components';
import MainTop from '../src/components/main/MainTop';
import Review from '../src/components/main/Review';
import JoinFriday from '../src/components/JoinFriday';
import { menuAtom } from '../src/recoil/atom';
import AnimatedPage from '../src/components/template/AnimatedPage';
import FridayAnimation from '../public/assets/lottie/friday.json';

const GradientContainer = styled.div`
  padding: 5vh 0;
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #024d48 100%);
`;

function Main() {
  const setMenu = useSetRecoilState(menuAtom);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: FridayAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <AnimatedPage>
      {setMenu(1)}
      <MainTop />
      <GradientContainer>
        <Lottie options={defaultOptions} height="90vh" isClickToPauseDisabled />
      </GradientContainer>
      <PhilosophyText />
      <ProjectIntro />
      <Review />
      <JoinFriday />
    </AnimatedPage>
  );
}

export default Main;

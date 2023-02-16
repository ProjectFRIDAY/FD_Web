import React from 'react';
import { useSetRecoilState } from 'recoil';
import Lottie from 'react-lottie';
import FridayAnimation from '../lottie/friday.json';
import ProjectIntro from '../components/main/ProjectIntro';
import PhilosophyText from '../components/main/PhilosophyText';
import styled from 'styled-components';
import MainTop from '../components/main/MainTop';
import Review from '../components/main/Review';
import JoinFriday from '../components/JoinFriday';
import { menuAtom } from '../recoil/atom';

const GradientContainer = styled.div`
  padding: 5vh 0;
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 21, 20, 1) 90%, #024D48 100%);
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
    <div>
      {setMenu(1)}
      <MainTop />
      <GradientContainer>
        <Lottie options={defaultOptions} height="90vh" isClickToPauseDisabled/>
      </GradientContainer>
      <PhilosophyText />
      <ProjectIntro />
      <Review />
      <JoinFriday/>
    </div>
  );
}

export default Main;

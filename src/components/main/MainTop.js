import React from 'react';
import styled from 'styled-components';
import MainVideo from './MainVideo';
import Button from '../Button';
import Lottie from 'react-lottie';
import Scroll from '../../../public/assets/lottie/scroll.json';
import MyLink from '../../components/MyLink';

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
          <MyButton color={'#01baae'} backgroundColor={'white'} border={true}>
            <MyLink to="/recruit" fontSize="1rem" color="#01B9AD" hoverColor="#a1ede8">5기 지원하기</MyLink>
          </MyButton>
          <AnimationContainer>
            <Lottie options={defaultLottieOptions} width={600} isClickToPauseDisabled />
          </AnimationContainer>
        </TopContainer>
      </MainVideo>
    </>
  );
}

export default MainTop;

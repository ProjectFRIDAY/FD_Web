import React from 'react';
import styled, { css } from 'styled-components';
import tempImage from '../../assets/images/momTimer.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 20rem auto;
`;

const Modal = styled.div`
  @media only screen and (min-width: 564px) {
    ${props => {
      const X_POSITION = props.xPosition;
      return css`
        transform: translate(${X_POSITION}, 0);
      `;
    }}
  }
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 40px 0 ${props => props.theme.primaryColor};
  background: #ccc;
  margin: 1rem;
`;
const ImageField = styled.img``;

const TextField = styled.div`
  background: white;
  color: black;
`;

const LeftTopText = styled.div`
  font-size: 2vw;
  @media only screen and (max-width: 700px) {
    font-size: 3vw;
  }
`;

const BackgroundText = styled.h1`
  ${props => {
    const COLOR = props.theme.primaryColor;
    const INDEX = props.index;
    return css`
      text-shadow: -1px 0 ${COLOR}, 0 1px ${COLOR}, 1px 0 ${COLOR}, 0 -1px ${COLOR};
      top: ${INDEX * 15 + 10}rem;
    `;
  }}
  color: black;
  font-size: 10rem;
  z-index: -1;
  position: absolute;
`;

const MyAnimationOnScroll = styled(AnimationOnScroll)`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

function Review() {
  return (
    <Positioner>
      <MyAnimationOnScroll
        offset={0}
        animatePreScroll="false"
        animateIn="fadeInRight"
        initiallyVisible="false"
        animateOnce="false"
      >
        <BackgroundText index={0}>Designer</BackgroundText>
        <BackgroundText index={1}>Programmer</BackgroundText>
        <BackgroundText index={2}>Management</BackgroundText>
      </MyAnimationOnScroll>

      <LeftTopText>
        <h1>FRIDAY 후기+</h1>
        <p>FRIDAY와 함께하는 이야기</p>
      </LeftTopText>
      <Modal xPosition={'8rem'}>222222222</Modal>
      <Modal xPosition={'-8rem'}>
        <ImageField src={tempImage}></ImageField>
        <TextField></TextField>
      </Modal>

      <Modal xPosition={'8rem'}>333333</Modal>
      <AnimationOnScroll animateIn="boundInLeft">
        <h1>asdasdasd</h1>
      </AnimationOnScroll>
    </Positioner>
  );
}

export default Review;

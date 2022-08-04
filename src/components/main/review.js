import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from '../ScrollAnimation';

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
  @media only screen and (min-width: 665px) {
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
const ImageField = styled.img`
  height: 12rem;
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextField = styled.div`
  height: 13rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  color: black;
  text-align: center;
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
  font-size: 11vw;
  z-index: -1;
  position: absolute;
  @media only screen and (max-width: 1060px) {
    font-size: 15vw;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const MyAnimationOnScroll = styled(ScrollAnimation)`
  position: absolute;
  left: 5rem;
`;

function Review() {
  const settings = {
    offset: 0,
    animateIn: 'flash',
    duration: 2,
    animateOnce: false,
    initiallyVisible: true,
    animatePreScroll: false,
  };
  return (
    <Positioner>
      <MyAnimationOnScroll {...settings}>
        <BackgroundText index={0}>Designer</BackgroundText>
        <BackgroundText index={1}>Development</BackgroundText>
        <BackgroundText index={2}>Management</BackgroundText>
      </MyAnimationOnScroll>
      <LeftTopText>
        <h1>FRIDAY 후기+</h1>
        <p>FRIDAY와 함께하는 이야기</p>
      </LeftTopText>
      <Modal xPosition={'8rem'}>
        <ImageField />
        <TextField>
          <h3>안녕하세요</h3>
          <p>밥주세요</p>
        </TextField>
      </Modal>
      <Modal xPosition={'-8rem'}>
        <ImageField />
        <TextField>asd</TextField>
      </Modal>

      <Modal xPosition={'8rem'}>
        <ImageField />
        <TextField>asd</TextField>
      </Modal>
    </Positioner>
  );
}

export default Review;

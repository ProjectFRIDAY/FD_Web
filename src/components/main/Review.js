import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from '../ScrollAnimation';
import Image from 'next/image';

const minaImg = '/assets/images/review/mina.jpg';
const wonheeImg = '/assets/images/review/wonhee.jpg';
const seonghwanImg = '/assets/images/review/seonghwan.jpg';
const jinyoungImg = '/assets/images/review/jinyoung.jpg';

const Positioner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 20rem auto 0 auto;
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
  height: 30.2rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 40px 0 ${props => props.theme.primaryColor};
  background: #ccc;
  margin: 3rem;
`;

const ImageField = styled(Image)`
  height: 17rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const TextField = styled.div`
  height: 13.2rem;
  padding: 0 1rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  color: black;
  text-align: center;
`;

const TopText = styled.div`
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
    font-size: 13vw;
  }
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const MyAnimationOnScroll = styled(ScrollAnimation)`
  position: absolute;
  left: 5rem;
`;

const BlackLine = styled.div`
  width: 100%;
  height: 0;
  border: black solid 0.6px;
`;

const Highlight = styled.span`
  background-color: rgba(1, 186, 174, 0.3);
  font-weight: bold;
  padding: 1px 2px;
`;

function Review() {
  const settings = {
    offset: 0,
    animateIn: 'animate__flash',
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
        <BackgroundText index={3}>Together</BackgroundText>
      </MyAnimationOnScroll>
      <TopText>
        <h1>FRIDAY 후기+</h1>
        <p>FRIDAY와 함께하는 이야기</p>
      </TopText>
      <Modal xPosition={'8rem'}>
        <ImageField src={minaImg} alt="민아님 이미지" placeholder="blur" />
        <TextField>
          <p style={{ fontSize: '15px' }}>
            FRIDAY 활동을 하기 전에는 웹 디자인을 해보고 싶다고 막연하게만 생각했습니다. FRIDAY의 다양한 프로젝트를 통해{' '}
            <Highlight>많은 디자인 경험</Highlight>을 쌓게 되었어요!{' '}
            <Highlight>디자인을 제대로 한 번 해보고 싶은 분</Highlight>께 추천합니다 :)
          </p>
          <BlackLine />
          <p style={{ margin: '0.5rem', textAlign: 'left' }}>
            <b>김민아님 (디자이너, 3기)</b>
          </p>
        </TextField>
      </Modal>
      <Modal xPosition={'-8rem'}>
        <ImageField src={seonghwanImg} alt="승환님 이미지" placeholder="blur" />
        <TextField>
          <p style={{ fontSize: '15px' }}>
            목적 없는 열정은 FRIDAY를 만난 후 <Highlight>명확한 비전</Highlight>이 되었습니다. 드넓은 개발 세상 속
            FRIDAY에서의 경험은 <Highlight>제 여정의 이정표</Highlight>가 되었습니다. 당장 진로가 정해지지 않았더라도
            주저하지 말고 일단 지원해 보세요.
          </p>
          <BlackLine />
          <p style={{ margin: '0.5rem', textAlign: 'left' }}>
            <b>송승환님 (개발자, 3기)</b>
          </p>
        </TextField>
      </Modal>

      <Modal xPosition={'8rem'}>
        <ImageField src={wonheeImg} alt="원희님 이미지" placeholder="blur" />
        <TextField>
          <p style={{ fontSize: '15px' }}>
            <Highlight>“SW앱 개발의 프로젝트 매니징”</Highlight>이 PM의 주 업무입니다:) 말만 들어도 저 같은 문과생이
            쉽게 경험할 수 있는 과정이 아니기에 저와 PM팀 모두에게{' '}
            <Highlight>무엇과도 바꿀 수 없는 매우 값진 시간</Highlight>이 된 것 같아요.
          </p>
          <BlackLine />
          <p style={{ margin: '0.5rem', textAlign: 'left' }}>
            <b>도원희님 (PM, 2기)</b>
          </p>
        </TextField>
      </Modal>
      <Modal xPosition={'-8rem'}>
        <ImageField src={jinyoungImg} alt="진영님 이미지" placeholder="blur" />
        <TextField>
          <p style={{ fontSize: '15px' }}>
            <Highlight>프로젝트의 A부터 Z까지</Highlight> 함께할 수 있고,{' '}
            <Highlight>서로 피드백을 공유하고 수용</Highlight>한다는 게 가장 큰 장점인 것 같아요. 열정 있는 사람들과
            함께 하나의 프로덕트를 완성해나가고 싶으시다면, 지금 바로 지원하세요!
          </p>
          <BlackLine />
          <p style={{ margin: '0.5rem', textAlign: 'left' }}>
            <b>송진영님 (개발자, 2기)</b>
          </p>
        </TextField>
      </Modal>
    </Positioner>
  );
}

export default Review;

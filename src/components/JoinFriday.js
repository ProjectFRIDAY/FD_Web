import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';
import Button from './Button';

const JoinBottom = styled.div`
  height: 70vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  font-size: 3vw;
`;

const JoinFriday = () => {
  const settings = {
    animateIn: 'zoomIn',
    animateOnce: false,
  };

  return (
    <ScrollAnimation {...settings}>
      <JoinBottom>
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
      </JoinBottom>
    </ScrollAnimation>
  );
};

export default JoinFriday;

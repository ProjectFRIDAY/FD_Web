import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from './ScrollAnimation';
import Button from './Button';
import MyLink from '../components/MyLink';

const JoinBottom = styled.div`
  height: 70vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 3vw;
`;

const JoinFriday = () => {
  const settings = {
    animateIn: 'animate__zoomIn',
    animateOnce: false,
  };

  return (
    <ScrollAnimation {...settings}>
      <JoinBottom>
        <h1>Open Up Your Ideas</h1>
        <Button target="_blank" backgroundColor={'#01baae'} color={'white'} gradient>
          <MyLink to="/recruit" fontSize="1rem">모집 공고 확인하기</MyLink>
        </Button>
      </JoinBottom>
    </ScrollAnimation>
  );
};

export default JoinFriday;

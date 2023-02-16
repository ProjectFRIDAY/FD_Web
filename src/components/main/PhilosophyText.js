import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from '../ScrollAnimation';

const PhilosophyBox = styled.div`
  width: 80vw;
  padding: 4rem;
  margin: 4rem auto;
  border: 1px solid #01baae;
  border-radius: 20px;
  @media screen and (max-width: 800px) {
    width: 90vw;
    padding: 2rem;
    line-height: 2rem;
  }
`;

function PhilosophyText() {
  const settings = {
    offset: 0,
    animateIn: 'fadeIn',
    animateOnce: false,
  };
  return (
    <ScrollAnimation {...settings}>
      <PhilosophyBox>
        <h1>
          <b>Focus on Real Issue</b>
        </h1>
        <br></br>
        <p>단순히 소프트웨어 서비스를 만드는 것이 아닌, 사용하게 하는 것이 우리의 목표입니다.</p>
        <br></br>
        <p>
          사용자를 가장 먼저 생각하며, <b>사용자의 불편함을 찾아 문제점을 해결</b>합니다.
        </p>
        <p>
          모두가 함께 <b>아이디어를 구상</b>하고, 서비스를 기획합니다.
        </p>
        <p>
          하나의 목표를 향해 구성원들이 <b>자발적으로 참여하여 서비스를 만들어 나갑니다.</b>
        </p>
      </PhilosophyBox>
    </ScrollAnimation>
  );
}

export default PhilosophyText;

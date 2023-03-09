import React from 'react';
import styled from 'styled-components';

const TopButton = styled.button`
  position: fixed;
  cursor: pointer;
  right: 5vw;
  bottom: 5vw;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
  border-radius: 50%;
  border: none;
  width: 70px;
  height: 70px;
`;

const TopIcon = styled.div`
  border: solid #01b9ad;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
`;

const TopText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #01b9ad;
`;

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <TopButton onClick={scrollToTop}>
      <TopIcon />
      <TopText>TOP</TopText>
    </TopButton>
  );
}

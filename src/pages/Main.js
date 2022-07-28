import React, { useState } from 'react';
import MainVideo from '../components/main/MainVideo';
import Animation from '../components/main/Animation';
import ProjectIntro from '../components/main/ProjectIntro';
import PhilosophyText from '../components/main/PhilosophyText';
import styled from 'styled-components';
import Button from '../components/main/Button';
import MainTop from '../components/main/MainTop';
import Footer from '../components/Footer';
import Review from '../components/main/review';

const MainBottom = styled.div`
  margin: 20rem auto;
  text-align: center;
`;

function Main() {
  return (
    <div style={{ marginTop: '4rem' }}>
      <MainTop />
      <Animation />
      <PhilosophyText />
      <ProjectIntro />
      <Review />
      <MainVideo bottom />
      <MainBottom>
        <h1>Open Up Your Ideas</h1>
        <Button color={'white'} gradient>
          10기 지원하기 →{' '}
        </Button>
      </MainBottom>

      <Footer />
    </div>
  );
}

export default Main;

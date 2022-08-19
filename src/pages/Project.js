import React from 'react';
import { useRecoilState } from 'recoil';
import { prjState, visibleState } from '../recoil/atom';
import styled from 'styled-components';
import Times from '../assets/fonts/TimesNewRomanPSMT.ttf';
import Icons from '../components/Icons';
import card from '../components/main/Card';
import Button from '../components/main/Button';
import Modal from '../components/Modal';

const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  font-size: 167px;
  @font-face {
    font-family: 'TimesNewRomanPSMT';
    src: url('${Times}') format('truetype');
  }
  font-family: 'TimesNewRomanPSMT';
  font-weight: normal;
`;

const BackgroundText = styled.h1`
  position: relative;
  opacity: 0.37;
  top: 5rem;
  filter: blur(12px);
  font-family: SegoeUISymbol;
  font-size: 168px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #f1efef;
`;

const Text = styled.div`
  font-family: 'TimesNewRomanPSMT';
  background-color: rgba(0, 122, 114, 0.86);
  padding: 1rem;
  font-size: 45px;
  margin-top: 8rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Wrapper = styled.div`
  @media only screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 100%;
    height: 50%;
    justify-content: space-between;
    display: flex;
    margin: 0;
  }
  justify-content: space-between;
  display: flex;
  margin: auto;
  margin-bottom: 5rem;
  width: 80%;
  height: 50%;
`;

const MainBottom = styled.div`
  margin: 15rem auto;
  text-align: center;
  font-size: 3vw;
`;

function Project() {
  const [visible, setVisible] = useRecoilState(visibleState);
  const [prj, setPrj] = useRecoilState(prjState);
  const openModal = num => {
    setPrj(num);
    setVisible(true);
  };

  return (
    <>
      <StyledH1>FRIDAY</StyledH1>
      <BackgroundText>CREATIVE</BackgroundText>
      <Text>Friday Projects</Text>
      <Wrapper>
        <card.Card
          onClick={() => {
            openModal(1);
          }}
        >
          <card.ImageField src={Icons[1].src}></card.ImageField>
          <card.TextField>플랜 다이얼</card.TextField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal(2);
          }}
        >
          <card.ImageField src={Icons[6].src}></card.ImageField>
          <card.TextField>Friday 공식 웹사이트</card.TextField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal(3);
          }}
        >
          <card.ImageField src={Icons[0].src}></card.ImageField>
          <card.TextField>Comento</card.TextField>
        </card.Card>
      </Wrapper>
      <Wrapper>
        <card.Card
          onClick={() => {
            openModal(4);
          }}
        >
          <card.ImageField src={Icons[3].src}></card.ImageField>
          <card.TextField>엄마 타이머</card.TextField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal(5);
          }}
        >
          <card.ImageField src={Icons[4].src}></card.ImageField>
          <card.TextField>날로</card.TextField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal(6);
          }}
        >
          <card.ImageField src={Icons[5].src}></card.ImageField>
          <card.TextField>텍스티</card.TextField>
        </card.Card>
        <Modal content={prj} visible={visible}></Modal>
      </Wrapper>
      <MainBottom>
        <h1>Open Up Your Ideas</h1>
        <Button
          href="https://wjsalsrb5.typeform.com/friday-apply"
          target="_blank"
          backgroundColor={'#01baae'}
          color={'white'}
          gradient
        >
          10기 지원하기 🡒
        </Button>
      </MainBottom>
    </>
  );
}

export default Project;

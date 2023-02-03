import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import { prjState, visibleState } from '../recoil/atom';
import styled from 'styled-components';
import Icons from '../components/Icons';
import card from '../components/project/Card';
import Button from '../components/Button';
import Modal from '../components/project/Modal';
import Projects from '../components/project/Projects';

const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  font-size: 167px;
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
  const openModal = prj => {
    setPrj(prj);
    setVisible(true);
  };
  const setMenu = useSetRecoilState(menuAtom);

  return (
    <>
      {setMenu(1)}
      <StyledH1 className="title">FRIDAY</StyledH1>
      <BackgroundText>CREATIVE</BackgroundText>
      <Text className="title">Friday Projects</Text>
      <Wrapper>
        <card.Card
          onClick={() => {
            openModal('배달N');
          }}
        >
          <card.ImageField src={Icons[8].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발중</card.Tag>
            <card.Tag>#Mobile</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('OOTD');
          }}
        >
          <card.ImageField src={Icons[6].src}></card.ImageField>

          <card.TagField>
            <card.Tag>#개발중</card.Tag>
            <card.Tag>#Mobile</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('레모아');
          }}
        >
          <card.ImageField src={Icons[7].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발중</card.Tag>
            <card.Tag>#Web</card.Tag>
          </card.TagField>
        </card.Card>
      </Wrapper>
      <Wrapper>
        <card.Card
          onClick={() => {
            openModal('comento');
          }}
        >
          <card.ImageField src={Icons[0].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발중</card.Tag>
            <card.Tag>#Web</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('플랜다이얼');
          }}
        >
          <card.ImageField src={Icons[1].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발완료</card.Tag>
            <card.Tag>#Mobile</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('웹사이트');
          }}
        >
          <card.ImageField src={Icons[2].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발완료</card.Tag>
            <card.Tag>#Web</card.Tag>
          </card.TagField>
        </card.Card>
      </Wrapper>
      <Wrapper>
        <card.Card
          onClick={() => {
            openModal('엄마타이머');
          }}
        >
          <card.ImageField src={Icons[3].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#개발완료</card.Tag>
            <card.Tag>#Mobile</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('텍스티');
          }}
        >
          <card.ImageField src={Icons[5].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#해커톤</card.Tag>
            <card.Tag>#Web</card.Tag>
          </card.TagField>
        </card.Card>
        <card.Card
          onClick={() => {
            openModal('약속이');
          }}
        >
          <card.ImageField src={Icons[4].src}></card.ImageField>
          <card.TagField>
            <card.Tag>#토이프로젝트</card.Tag>
            <card.Tag>#Web</card.Tag>
          </card.TagField>
        </card.Card>
        <Modal content={Projects[prj]} visible={visible}></Modal>
      </Wrapper>
      <MainBottom>
        <h1>Open Up Your Ideas</h1>
        <Button
          onClick={() => alert("4.5기 모집 기간이 아닙니다.")}
          target="_blank"
          backgroundColor={'#01baae'}
          color={'white'}
          gradient
        >
          4.5기 지원 마감
        </Button>
      </MainBottom>
    </>
  );
}

export default Project;

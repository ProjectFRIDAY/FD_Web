import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import { prjState, visibleState } from '../recoil/atom';
import styled from 'styled-components';
import Icons from '../components/Icons';
import card from '../components/project/Card';
import Modal from '../components/project/Modal';
import Projects from '../components/project/Projects';
import JoinFriday from '../components/JoinFriday';
import AnimatedPage from '../components/template/AnimatedPage';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 10vw 0;
`;

const StyledH1 = styled.div`
  font-size: 10vw;
  text-align: center;
  line-height: 1;
`;

const BackgroundText = styled.div`
  opacity: 0.4;
  filter: blur(10px);
  font-family: SegoeUISymbol;
  font-size: 10vw;
  text-align: center;
  color: #f1efef;
  @media only screen and (max-width: 800px) {
    filter: blur(4px);
  }
`;

const Text = styled.div`
  background-color: rgba(0, 122, 114, 0.86);
  padding: 1.3rem 1rem;
  font-size: 40px;
  margin-bottom: 3rem;
  text-align: center;
`;

const Wrapper = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin: auto;
  width: 100%;
  flex-wrap: wrap;
  gap: 10vw 10px;
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
    <AnimatedPage>
      {setMenu(1)}
      <TitleContainer>
        <StyledH1 className="title">FRIDAY</StyledH1>
        <BackgroundText>CREATIVE</BackgroundText>
      </TitleContainer>
      <Text className="title">Friday Projects</Text>
      <Wrapper>
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
      <JoinFriday />
    </AnimatedPage>
  );
}

export default Project;

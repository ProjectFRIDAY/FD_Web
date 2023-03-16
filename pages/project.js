import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../src/recoil/atom';
import styled from 'styled-components';
import Card from '../src/components/project/Card';
import Projects from '../src/data/static/Projects';
import Modal from '../src/components/project/Modal';
import JoinFriday from '../src/components/JoinFriday';
import AnimatedPage from '../src/components/template/AnimatedPage';

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
  const [visible, setVisible] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const setMenu = useSetRecoilState(menuAtom);

  const openModal = prj => {
    setProjectIndex(prj);
    setVisible(true);
  };

  return (
    <AnimatedPage>
      {setMenu(1)}
      <TitleContainer>
        <StyledH1 className="title">FRIDAY</StyledH1>
        <BackgroundText>CREATIVE</BackgroundText>
      </TitleContainer>
      <Text className="title">Friday Projects</Text>
      <Wrapper>
        {Projects.map((prj, index) => (
          <Card
            imageSrc={prj.img}
            tags={prj.tags.slice(0, 2)}
            key={index}
            onClick={() => {
              openModal(index);
            }}
          />
        ))}
        <Modal content={Projects[projectIndex]} visible={visible} setVisible={setVisible}></Modal>
      </Wrapper>
      <JoinFriday />
    </AnimatedPage>
  );
}

export default Project;

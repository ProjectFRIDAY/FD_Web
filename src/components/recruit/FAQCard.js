import React, { useState } from 'react';
import styled from 'styled-components';

const FaqLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  margin-top: 10rem;
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  border-bottom: 1px solid #888787;
`;

const FaqLogo = styled.span`
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background-image: linear-gradient(134deg, #01baae 9%, #044a27 90%);
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  padding-top: 7px;
  margin-right: 1rem;
`;

const FaqTitleContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
`;

const QuestionTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  text-align: left;
`;

const FaqModal = styled.p`
  font-size: 16px;
  margin-top: 0px;
  margin-left: 2.3rem;
  color: #ccc;
`;

const Toggle = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  cursor: pointer;
`;

const FaqTitle = styled.p`
  font-family: Arial;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 100px;
`;

function FAQCard() {
  return (
    <FaqLayout>
      <FaqTitle>FAQ</FaqTitle>
      <FAQ title="해당 분야에 대해 잘 모르는데, 참여할 수 있나요?">
        물론 가능합니다.
        <br />
        열정과 새로운 지식을 습득하고자 하는 의지가 있는 분들은 언제든 환영합니다!
      </FAQ>

      <FAQ title="정해진 활동 시간이 있나요?">
        활동 시간은 프로젝트별로 상이합니다.
        <br />
        다만 공통적으로 주 1회의 정기 회의가 진행됩니다.
      </FAQ>

      <FAQ title="모든 활동이 온라인으로 진행되나요?">
        현재는 모두 온라인으로 진행되고 있습니다. 상황에 따라 달라질 수 있습니다.
        <br />
        친목을 위한 대면 활동도 있으니 기대해주세요!
      </FAQ>

      <FAQ title="프로젝트는 어떤 식으로 시작되나요?">
        먼저 Friday 전체 회의에서 각자의 아이디어를 공유합니다.
        <br />
        이후 투표를 통해 몇 개의 아이디어를 선정합니다.
        <br />
        선정된 아이디어를 토대로 프로젝트 팀이 구성됩니다.
      </FAQ>
    </FaqLayout>
  );
}
export default FAQCard;

function FAQ(props) {
  const [expanded, setExpand] = useState(false);
  const onToggle = e => {
    if (expanded === false) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };
  return (
    <FaqContainer>
      <FaqTitleContainer>
        <FaqLogo>Q</FaqLogo>
        <QuestionTitle>
          {props.title}
          <div>
            <Toggle onClick={onToggle} />
          </div>
        </QuestionTitle>
      </FaqTitleContainer>
      {expanded && <FaqModal>{props.children}</FaqModal>}
    </FaqContainer>
  );
}

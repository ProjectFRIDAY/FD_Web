import React, { useState } from 'react';
import styled from 'styled-components';

const FaqLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 3rem;
  margin-top: 10rem;
  width: 100%;
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 30px 60px 30px;
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
`;

const FaqTitleContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  gap: 10px;
`;

const QuestionTitle = styled.p`
  font-weight: bold;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  gap: 10px;

  @media only screen and (max-width: 800px) {
    font-size: 17px;
  }
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
        Friday는 열정과 새로운 지식을 습득하고자 하는 의지와 열정이 있는 분들을 환영합니다!
        <br />
        <br />
        다만 추가 모집 전형인 .5기의 경우 프로젝트 진행 도중에 참여하므로 어느 정도 지식이 요구됩니다.
      </FAQ>

      <FAQ title="정해진 활동 기간이 있나요?">
        Friday는 프로젝트 1회 후 끝나는 것이 아닌, 계속해서 활동할 수 있는 동아리입니다.
        <br />
        분기(3개월)당 30,000원의 회비가 존재하며, 납부시 계속 활동을 이어갈 수 있습니다.
        <br />
        언제든 Friday와 함께 아이디어를 펼쳐보세요!
      </FAQ>

      <FAQ title="정해진 활동 시간이 있나요?">
        활동 시간은 프로젝트별로 상이합니다.
        <br />
        다만 공통적으로 주 1회의 비대면 정기 회의가 진행됩니다.
      </FAQ>

      <FAQ title="모든 활동이 온라인으로 진행되나요?">
        현재는 대부분이 온라인으로 진행되고 있습니다.
        <br />
        프로젝트에 따라 주기적으로 대면 모임을 가지는 경우도 있습니다.
        <br />
        또한 모든 프로젝트 팀원들이 모여 친목 다지는 활동도 있으니 기대해주세요!
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
    <FaqContainer onClick={onToggle}>
      <FaqTitleContainer>
        <FaqLogo>Q</FaqLogo>
        <QuestionTitle>
          {props.title}
          <div>
            <Toggle />
          </div>
        </QuestionTitle>
      </FaqTitleContainer>
      {expanded && <FaqModal>{props.children}</FaqModal>}
    </FaqContainer>
  );
}

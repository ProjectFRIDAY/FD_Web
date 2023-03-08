import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const BackgroundImage = "/assets/images/recruitBackground.png";

const TitleContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  height: 500px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RecruitButton = styled(Button)`
  color: black;
  background-color: white;
`;

const StyledH1 = styled.h1`
  font-size: 10vw;
`;

function TitleBackgroundCard() {
  return (
    <TitleContainer>
      <StyledH1 className="title">FRIDAY 모집</StyledH1>
      <RecruitButton gradient border={false} onClick={() => alert('5기 모집 기간이 아닙니다.')} target="_blank">
        5기 지원하기
      </RecruitButton>
    </TitleContainer>
  );
}
export default TitleBackgroundCard;

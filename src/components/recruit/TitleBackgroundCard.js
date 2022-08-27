import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/recruitBackground.png';
import Button from '../../components/Button';

const RecruitButton = styled(Button)`
  width: 160px;
  height: 50px;
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
`;

const StyledH1 = styled.h1`
  font-family: 'TimesNewRomanPSMT';
  font-weight: normal;
`;

function TitleBackgroundCard() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        height: '600px',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <StyledH1
        style={{
          fontSize: '80px',
          paddingTop: '250px',
          marginLeft: '20vw',
        }}
        className="title"
      >
        FRIDAY 모집
      </StyledH1>
      <RecruitButton gradient border={false} href="https://wjsalsrb5.typeform.com/friday-apply" target="_blank">
        4기 지원하기
      </RecruitButton>
    </div>
  );
}
export default TitleBackgroundCard;

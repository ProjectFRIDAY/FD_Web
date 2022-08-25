import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../../assets/images/recruitBackground.png';
import Button from '../../components/main/Button';

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
`

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
      <p
        style={{
          fontFamily: 'TimesNewRomanPSMT',
          fontSize: '80px',
          paddingTop: '250px',
          marginLeft: '20vw',
        }}
      >
        FRIDAY 모집
      </p>
      <RecruitButton
        gradient
        border={false}
        href="https://wjsalsrb5.typeform.com/friday-apply"
        target="_blank"
      >
        4기 지원하기
      </RecruitButton>
    </div>
  );
}
export default TitleBackgroundCard;

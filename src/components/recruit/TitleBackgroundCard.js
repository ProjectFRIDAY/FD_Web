import React from 'react';
import BackgroundImage from '../../assets/images/recruitBackground.png';
import Button from '../../components/main/Button';

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
      <Button
        style={{
          width: '160px',
          height: '50px',
          marginLeft: '20vw',
        }}
        color={'black'}
        gradient
        border={false}
        backgroundColor={'white'}
        href="https://wjsalsrb5.typeform.com/friday-apply"
        target="_blank"
      >
        4기 지원하기
      </Button>
    </div>
  );
}
export default TitleBackgroundCard;

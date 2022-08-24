import React from 'react';
import styled from 'styled-components';
import MyButton from '../Button';
import Icons from '../Icons';
import Carousel from '../Carousel';

const Container = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
`;

const TextContainer = styled.div`
  margin: 5rem auto;
  font-size: 1.5vw;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const MySlider = styled(Carousel)`
  width: 100%;
`;

const MyImg = styled.img`
  width: 90%;
  height: 90%;
  outline: none;
  border-radius: 20px;
  border: 1.5px solid ${props => props.theme.primaryColor};
`;

function ProjectIntro() {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 443,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <TextContainer>
        <div>
          <h1>당신이 만들고 싶은 가치있는 서비스를 만듭니다.</h1>
        </div>
      </TextContainer>
      <MySlider {...settings}>
        <div>
          <MyImg src={Icons[0].src} />
        </div>
        <div>
          <MyImg src={Icons[1].src} />
        </div>
        <div>
          <MyImg src={Icons[2].src} />
        </div>
        <div>
          <MyImg src={Icons[3].src} />
        </div>
        <div>
          <MyImg src={Icons[4].src} />
        </div>
        <div>
          <MyImg src={Icons[5].src} />
        </div>
      </MySlider>
      <MyButton href="/project" style={{ marginTop: '4rem' }} border color={'#01baae'} backgroundColor={'black'}>
        모든 프로젝트 보기
      </MyButton>
    </Container>
  );
}

export default ProjectIntro;

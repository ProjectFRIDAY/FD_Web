import React from 'react';
import styled from 'styled-components';
import MyButton from '../Button';
import Carousel from '../Carousel';
import Image from 'next/image';
import Icons from '../../data/static/ProjectIcons';

const Container = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem auto;
`;

const TextContainer = styled.div`
  margin: 3rem auto;
  font-size: 1.5vw;
  @media only screen and (max-width: 600px) {
    font-size: 2vw;
  }
`;

const MySlider = styled(Carousel)`
  width: 100%;
`;

const MyImgContainer = styled.div`
  position: relative;
  width: 90%;
  aspect-ratio: 1/1;
  outline: none;
  border-radius: 20px;
  border: 1.5px solid ${props => props.theme.primaryColor};
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
`;

const Arrow = styled.div`
  border: solid #01baae;
  border-width: 0 3px 3px 0;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  border-radius: 3px;
  z-index: 1;
  transform: translateY(-20px) rotate(${props => (props.left ? 135 : 315)}deg); ;
`;

function ProjectIntro() {
  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease-out',
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
    nextArrow: <Arrow right />,
    prevArrow: <Arrow left />,
  };

  return (
    <Container>
      <TextContainer>
        <div>
          <h1>당신이 만들고 싶은 가치있는 서비스를 만듭니다.</h1>
        </div>
      </TextContainer>
      <MySlider {...settings}>
        {Object.values(Icons).map((icon, index) => (
          <div key={index}>
            <MyImgContainer>
              <Image fill src={icon} placeholder="blur" alt="프로젝트 이미지" />
            </MyImgContainer>
          </div>
        ))}
      </MySlider>
      <MyButton href="/project" style={{ marginTop: '3rem' }} border color={'#01baae'} backgroundColor={'black'}>
        모든 프로젝트 보기
      </MyButton>
    </Container>
  );
}

export default ProjectIntro;

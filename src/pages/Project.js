import React from 'react';
import styled, { css } from 'styled-components';
import Times from '../assets/fonts/TimesNewRomanPSMT.ttf';
import Carousel from '../components/Carousel';
import card from '../components/main/Card';

const StyledH1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  position: absolute;
  font-size: 167px;
  @font-face {
    font-family: 'TimesNewRomanPSMT';
    src: url('${Times}') format('truetype');
  }
  font-family: 'TimesNewRomanPSMT';
  font-weight: normal;
`;

const BackgroundText = styled.h1`
  margin: 66px 0 0;
  position: relative;
  opacity: 0.37;
  top: 5rem;
  filter: blur(12px);
  font-family: SegoeUISymbol;
  font-size: 168px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #f1efef;
`;

const Text = styled.span`
  font-size: 25px;
  font-family: 'SegoeUI';
  margin-left: 10rem;
  position: absolute;
  top: 40rem;
`;

const ProjectsSlider = styled(Carousel)`
  width: 100%;
`;

function Project() {
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
    <>
      <StyledH1>FRIDAY</StyledH1>
      <BackgroundText>CREATIVE</BackgroundText>
      <Text>완료된 작업물</Text>
      <ProjectsSlider {...settings}>
        <div>
          <card.Card>
            <card.ImageField></card.ImageField>
            <card.TextField></card.TextField>
          </card.Card>
        </div>
      </ProjectsSlider>
    </>
  );
}

export default Project;

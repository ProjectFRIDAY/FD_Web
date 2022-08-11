import React from 'react';
import styled, { css } from 'styled-components';
import Times from '../assets/fonts/TimesNewRomanPSMT.ttf';
import Carousel from '../components/Carousel';

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

const Card = styled.div`
  width: 10rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 40px 0 ${props => props.theme.primaryColor};
  background: #ccc;
  margin: 1rem;
`;

const ImageField = styled.img`
  height: 30rem;
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextField = styled.div`
  height: 13rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: white;
  color: black;
  text-align: center;
`;

const ProjectsSlider = styled(Carousel)`
  width: 100%;
`;

function Project() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
        <div>
          <Card></Card>
        </div>
      </ProjectsSlider>
    </>
  );
}

export default Project;

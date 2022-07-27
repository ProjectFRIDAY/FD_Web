import React, { useState } from 'react';
import styled from 'styled-components';
import MyButton from './Button';
import Icons from '../Icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  line-height: 2rem;
`;

const MySlider = styled(Slider)`
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
  const icons = Icons.map(icon => {
    <div>
      <MyImg key={icon.id} src={icon.src} />
    </div>;
  });
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
        breakpoint: 1200,
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
        breakpoint: 550,
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
          {/* <p style={{ fontSize: '1.4vw' }}>
            사용자들이 유용하게 사용할 수 있는 서비스를 개발 및 출시,<br></br>
            운영하는 것을 목표로하는 조직입니다. 열정있는 기획자, 디자이너,<br></br>
            개발자가 하나의 팀이 되어 새로운 가치를 창출합니다.
          </p> */}
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
        {/* {icons} */}
      </MySlider>
      <MyButton style={{ marginTop: '4rem' }} border color={'#01baae'} backgroundColor={'black'}>
        모든 프로젝트 보기
      </MyButton>
    </Container>
    // <Container>
    //   <Positioner>
    //     <CarouselContainer>
    //       <Slider {...settings}>
    //         <img src={Icons[0].src}></img>
    //         <img src={Icons[1].src}></img>
    //         <img src={Icons[2].src}></img>
    //       </Slider>
    //     </CarouselContainer>
    //     <TextContainer>
    //       <div>
    //         <h1>comento</h1>
    //         <h4>당신이 만들고 싶은 가치있는 서비스를 만듭니다.</h4>
    //         <p>
    //           사용자들이 유용하게 사용할 수 있는 서비스를 개발 및 출시,<br></br>
    //           운영하는 것을 목표로하는 조직입니다. 열정있는 기획자, 디자이너,<br></br>
    //           개발자가 하나의 팀이 되어 새로운 가치를 창출합니다.
    //         </p>
    //         <MyButton border color={'#01baae'} backgroundColor={'black'}>
    //           모든 프로젝트 보기
    //         </MyButton>
    //       </div>
    //     </TextContainer>
    //   </Positioner>
    // </Container>
  );
}

export default ProjectIntro;

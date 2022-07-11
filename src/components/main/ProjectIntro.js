import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import comentoIcon from '../../assets/images/comento.png';

// let Slides = styled.img`
// width: 100%;
// height: 100%;
// background: black;
// border-radius: 20%;
// `;

const FrontIcon = styled.img.attrs({
  src: `${comentoIcon}`,
})`
  width: 10rem;
  height: 10rem;
  margin: 10 auto;
  display: inline;
  border-radius: 20px;
  background-color: #000;
  box-shadow: 0 3px 40px 0 #007b73;
  border: 1.5px solid #01baae;
  position: relative;
`;

const LeftIcon = styled.img.attrs({
  src: `${comentoIcon}`,
})`
width: 7rem;
height: 7rem;
margin: 10 auto;
display: inline;
border-radius: 20px;
box-shadow: 0 3px 40px 0 #007b73;
border: 1.5px solid #01baae;
position: relative;
left: 3rem;
filter: blur(2px);
z-index = -1;
`;

const RightIcon = styled.img.attrs({
  src: `${comentoIcon}`,
})`
width: 7rem;
height: 7rem;
margin: 10 auto;
display: inline;
border-radius: 20px;
box-shadow: 0 3px 40px 0 #007b73;
border: 1.5px solid #01baae;
position: relative;
right: 3rem;
filter: blur(2px);
z-index = -1;
`;

function ProjectIntro() {
  const [num, setNum] = useState();

  return (
    <div>
      <div className="row ">
        <div className="col-sm-4">
          <LeftIcon></LeftIcon>
          <FrontIcon></FrontIcon>
          <RightIcon></RightIcon>
        </div>
        <div className="col-sm-8">
          <div>
            <h1>comento</h1>
            <h4>당신이 만들고 싶은 가치있는 서비스를 만듭니다.</h4>
            <p>
              사용자들이 유용하게 사용할 수 있는 서비스를 개발 및 출시,<br></br>
              운영하는 것을 목표로하는 조직입니다. 열정있는 기획자, 디자이너,<br></br>
              개발자가 하나의 팀이 되어 새로운 가치를 창출합니다.
            </p>
            <Button border color={'#01baae'} backgroundColor={'black'}>
              모든 프로젝트
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectIntro;
